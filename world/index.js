import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { buildScene, chapterSpec } from './scene.js';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector('#world');
const chapters = Array.from(document.querySelectorAll('[data-chapter]'));
const root = document.documentElement;
const navigation = Array.from(document.querySelectorAll('[data-nav]'));
const meter = document.querySelector('#scroll-progress');
const motionButton = document.querySelector('#motion-toggle');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');
const { clamp, damp, lerp } = THREE.MathUtils;
const reducedByUser = () => reduced.matches || paused;
let paused = false;
let exact = 0;
let active = -1;
let anchors = [];
let maxScroll = 1;
let invalidate = () => {};
const listeners = new AbortController();
const listen = (target, type, callback, options = {}) => target?.addEventListener(type, callback, { ...options, signal: listeners.signal });

function measure() {
  const height = window.innerHeight;
  maxScroll = Math.max(1, document.documentElement.scrollHeight - height);
  anchors = chapters.map((chapter, index) => {
    const y = chapter.getBoundingClientRect().top + window.scrollY;
    if (index === 0) return 0;
    return clamp(y - Math.min(height * .29, 235), 0, maxScroll);
  });
}

function updateStory() {
  const y = clamp(window.scrollY, 0, maxScroll);
  let index = 0;
  while (index < anchors.length - 1 && y >= anchors[index + 1]) index++;
  const next = Math.min(index + 1, anchors.length - 1);
  const interval = anchors[next] - anchors[index];
  const local = interval > 0 ? (y - anchors[index]) / interval : 0;
  exact = index + THREE.MathUtils.smoothstep(local, .43, 1);
  const current = Math.min(Math.round(exact), chapters.length - 1);
  const progress = y / maxScroll;
  meter?.style.setProperty('--progress', String(progress));
  if (meter instanceof HTMLProgressElement) {
    meter.max = 1;
    meter.value = progress;
  } else if (meter?.getAttribute('role') === 'progressbar') {
    meter.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
  }
  if (current !== active) {
    active = current;
    const chapter = chapters[active];
    const name = chapter.dataset.chapter || chapter.id;
    root.dataset.activeChapter = name;
    for (const link of navigation) {
      const selected = link.dataset.nav === name || link.getAttribute('href') === `#${chapter.id}`;
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  invalidate();
}

function refreshStory() {
  measure();
  updateStory();
}

function syncMotion() {
  const off = reducedByUser();
  const labelText = reduced.matches ? 'Motion disabled' : off ? 'Resume motion' : 'Pause motion';
  root.classList.toggle('motion-paused', off);
  document.body.classList.toggle('motion-paused', off);
  motionButton?.setAttribute('aria-label', reduced.matches ? 'Motion disabled by system settings' : labelText);
  if (motionButton) motionButton.disabled = reduced.matches;
  const label = motionButton?.querySelector('[data-motion-label]');
  if (label) label.textContent = labelText;
  invalidate();
}

function startScene() {
  if (!canvas || chapters.length !== chapterSpec.length) return () => {};
  const context = canvas.getContext('webgl2', {
    alpha: true,
    antialias: true,
    powerPreference: 'low-power',
  });
  if (!context) return () => {};
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true });
  } catch {
    root.dataset.worldState = 'fallback';
    return () => {};
  }
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.setClearColor(0x000000, 0);
  const { scene, landmarks, key, rim } = buildScene();
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 85);
  const centers = chapterSpec.map(spec => new THREE.Vector3(...spec.anchor));
  const positions = chapterSpec.map((spec, index) => centers[index].clone().add(new THREE.Vector3(...spec.view)));
  const cameraPath = new THREE.CatmullRomCurve3(positions, false, 'catmullrom', .43);
  const targetPath = new THREE.CatmullRomCurve3(centers, false, 'catmullrom', .38);
  const pointer = new THREE.Vector2();
  const offset = new THREE.Vector2();
  const target = new THREE.Vector3();
  const chapterColor = new THREE.Color();
  const nextColor = new THREE.Color();
  const colors = chapterSpec.map(spec => new THREE.Color(spec.color));
  let smooth = exact;
  let lastTimestamp = 0;
  let frame = 0;
  let time = 0;
  let lost = false;
  let compact = false;
  let inView = true;
  let dpr = 1.6;
  let slowFrames = 0;
  let performanceCap = 1.6;

  function resize() {
    const width = canvas.clientWidth || canvas.parentElement.clientWidth || innerWidth;
    const height = canvas.clientHeight || canvas.parentElement.clientHeight || innerHeight;
    compact = innerWidth < 780;
    const newDpr = Math.min(window.devicePixelRatio || 1, compact ? 1.25 : 1.6, performanceCap);
    dpr = newDpr;
    renderer.setPixelRatio(newDpr);
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
    wake();
  }

  function render(timestamp) {
    frame = 0;
    if (lost || document.hidden || !inView) return;
    const rawDelta = lastTimestamp ? timestamp - lastTimestamp : 16.67;
    const dt = Math.min(rawDelta / 1000, 1 / 30);
    lastTimestamp = timestamp;
    const off = reducedByUser();
    smooth = off ? Math.round(exact) : damp(smooth, exact, 7.2, dt);
    const last = landmarks.length - 1;
    const index = Math.min(Math.floor(smooth), last);
    const next = Math.min(index + 1, last);
    const local = smooth - index;
    const t = clamp(smooth / last, 0, 1);
    targetPath.getPoint(t, target);
    cameraPath.getPoint(t, camera.position);
    if (compact) {
      camera.position.x = lerp(camera.position.x, target.x, .3);
      camera.position.y += .35;
    }
    camera.fov = lerp(chapterSpec[index].lens, chapterSpec[next].lens, local) + (compact ? 2 : 0);
    const lens = Math.tan(camera.fov * Math.PI / 360);
    const distance = camera.position.distanceTo(target);
    const wideCompact = compact && camera.aspect > 1.35;
    const framedDistance = Math.max(5.55 / (2 * lens * camera.aspect), distance * (wideCompact ? .84 : 1));
    camera.position.sub(target).multiplyScalar(framedDistance / distance).add(target);
    offset.lerp(pointer, off ? 1 : 1 - Math.exp(-4.3 * dt));
    if (!off) {
      camera.position.x += offset.x * .18;
      camera.position.y += offset.y * .12;
      time += dt;
    }
    target.y += wideCompact ? -.24 : .16;
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    chapterColor.copy(colors[index]).lerp(nextColor.copy(colors[next]), local);
    rim.color.copy(chapterColor);
    rim.position.set(target.x - 6, 4, -5);
    key.position.set(target.x + 1, 8, 9);
    key.target.position.copy(target);
    rim.target.position.copy(target);
    key.target.updateMatrixWorld();
    rim.target.updateMatrixWorld();
    for (const [i, landmark] of landmarks.entries()) {
      landmark.group.visible = Math.abs(i - smooth) < 1.35;
      if (landmark.group.visible) landmark.animate(off ? 0 : time);
    }
    renderer.render(scene, camera);
    if (root.dataset.worldState !== 'ready') root.dataset.worldState = 'ready';
    if (!off && dpr > 1 && rawDelta > 25) slowFrames++;
    else slowFrames = Math.max(0, slowFrames - 2);
    if (slowFrames > 75 && performanceCap > 1) {
      performanceCap = 1;
      slowFrames = 0;
      resize();
    }
    if (!off) wake();
  }

  function wake() {
    if (!frame && !lost && !document.hidden && inView) frame = requestAnimationFrame(render);
  }

  listen(window, 'pointermove', event => {
    if (!finePointer.matches || reducedByUser()) return;
    pointer.set(event.clientX / innerWidth * 2 - 1, 1 - event.clientY / innerHeight * 2);
  }, { passive: true });
  listen(document.documentElement, 'pointerleave', () => pointer.set(0, 0));
  listen(document, 'visibilitychange', () => {
    lastTimestamp = 0;
    wake();
  });
  listen(canvas, 'webglcontextlost', event => {
    event.preventDefault();
    lost = true;
    root.dataset.worldState = 'lost';
    cancelAnimationFrame(frame);
    frame = 0;
  });
  listen(canvas, 'webglcontextrestored', () => {
    lost = false;
    smooth = exact;
    lastTimestamp = 0;
    resize();
  });
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  const intersection = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    lastTimestamp = 0;
    wake();
  });
  intersection.observe(canvas);
  invalidate = wake;
  resize();
  return () => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    intersection.disconnect();
    const resources = new Set();
    scene.traverse(object => {
      if (object.geometry) resources.add(object.geometry);
      if (object.material) resources.add(object.material);
      if (object.isInstancedMesh) resources.add(object);
    });
    for (const resource of resources) resource.dispose();
    renderer.dispose();
  };
}

if (chapters.length) {
  root.dataset.worldState = 'fallback';
  refreshStory();
  syncMotion();
  const trigger = ScrollTrigger.create({
    id: 'portfolio-world',
    start: 0,
    end: 'max',
    onUpdate: updateStory,
    onRefresh: refreshStory,
  });
  const disposeScene = startScene();
  listen(motionButton, 'click', () => {
    paused = !paused;
    syncMotion();
  });
  listen(reduced, 'change', syncMotion);
  listen(window, 'hashchange', refreshStory);
  listen(window, 'pageshow', () => ScrollTrigger.refresh());
  listen(window, 'pagehide', event => {
    if (event.persisted) return;
    listeners.abort();
    trigger.kill();
    disposeScene();
  });
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

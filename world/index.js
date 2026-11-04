import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { buildScene, chapterSpec } from './scene.js';

gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector('#world');
const panel = document.querySelector('.right-pane');
const stage = canvas?.closest('.stage');
const chapters = Array.from(document.querySelectorAll('[data-chapter]'));
const root = document.documentElement;
const navigation = Array.from(document.querySelectorAll('[data-nav]'));
const meter = document.querySelector('#scroll-progress');
const motionButton = document.querySelector('#motion-toggle');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopLayout = window.matchMedia('(min-width: 900px) and (min-height: 620px)');
const { clamp, damp, lerp } = THREE.MathUtils;
const reducedByUser = () => reduced.matches || paused;
const chooseScroller = () => desktopLayout.matches && panel ? panel : window;
let scroller = chooseScroller();
let paused = false;
let exact = 0;
let chapterProgress = 0;
let active = -1;
let anchors = [];
let maxScroll = 1;
let trigger;
let restoreFrame = 0;
let restoreSavedProgress = false;
let fastTransitionUntil = 0;
let invalidate = () => {};
const listeners = new AbortController();
const listen = (target, type, callback, options = {}) => target?.addEventListener(type, callback, { ...options, signal: listeners.signal });

function scrollPosition() {
  return scroller === window ? window.scrollY : scroller.scrollTop;
}

function positionFor(target) {
  if (target === panel) return 0;
  const scrollHost = scroller === window ? root : scroller;
  const padding = parseFloat(getComputedStyle(scrollHost).scrollPaddingTop);
  const inset = Number.isFinite(padding) ? padding : scroller === panel ? stage?.clientHeight || 0 : 0;
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const viewportTop = scroller === window ? 0 : scroller.getBoundingClientRect().top + scroller.clientTop;
  const top = scrollPosition() + target.getBoundingClientRect().top - viewportTop;
  return clamp(top - inset - margin, 0, maxScroll);
}

function measure() {
  const height = scroller === window ? window.innerHeight : scroller.clientHeight;
  const scrollHeight = scroller === window ? root.scrollHeight : scroller.scrollHeight;
  maxScroll = Math.max(0, scrollHeight - height);
  anchors = chapters.map((chapter, index) => index === 0 ? 0 : positionFor(chapter));
}

function chapterAt(y) {
  let index = 0;
  while (index < anchors.length - 1 && y >= anchors[index + 1]) index++;
  const nextAnchor = anchors[index + 1];
  const interval = (nextAnchor ?? maxScroll) - anchors[index];
  const local = interval > 0 ? clamp((y - anchors[index]) / interval, 0, 1) : 0;
  return { index, local, nextAnchor };
}

function positionForProgress(progress) {
  const index = Math.min(Math.floor(progress), anchors.length - 1);
  return lerp(anchors[index], anchors[index + 1] ?? maxScroll, progress - index);
}

function updateStory() {
  if (scroller !== chooseScroller()) return;
  const y = clamp(scrollPosition(), 0, maxScroll);
  const { index, local, nextAnchor } = chapterAt(y);
  chapterProgress = index + local;
  exact = index + (nextAnchor === undefined ? 0 : THREE.MathUtils.smoothstep(local, .43, 1));
  const current = Math.min(Math.round(exact), chapters.length - 1);
  const progress = maxScroll > 0 ? y / maxScroll : 0;
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

function bindScrollTrigger() {
  trigger?.kill();
  trigger = ScrollTrigger.create({
    id: 'portfolio-world',
    scroller,
    start: 0,
    end: 'max',
    onUpdate: updateStory,
    onRefresh: refreshStory,
  });
}

function scrollToPosition(top, animate = false) {
  fastTransitionUntil = performance.now() + 1000;
  const behavior = animate && !reducedByUser() ? 'smooth' : 'instant';
  scroller.scrollTo({ top, behavior });
  if (behavior === 'instant') updateStory();
}

function fragmentTarget(fragment) {
  if (!fragment || fragment === '#') return null;
  try {
    return document.getElementById(decodeURIComponent(fragment.slice(1)));
  } catch {
    return null;
  }
}

function savePanelProgress() {
  if (scroller !== panel) return;
  const { index, local } = chapterAt(clamp(panel.scrollTop, 0, maxScroll));
  history.replaceState({ ...history.state, portfolioPanelProgress: index + local }, '');
}

function restorePanelPosition(useSavedProgress) {
  if (scroller !== panel) return;
  const saved = history.state?.portfolioPanelProgress;
  if (useSavedProgress && Number.isFinite(saved)) {
    scrollToPosition(positionForProgress(clamp(saved, 0, chapters.length)));
    return;
  }
  const target = fragmentTarget(location.hash);
  if (target && panel.contains(target)) scrollToPosition(positionFor(target));
  else if (!location.hash) scrollToPosition(0);
}

function scheduleRestore(useSavedProgress = false) {
  fastTransitionUntil = performance.now() + 1000;
  restoreSavedProgress ||= useSavedProgress;
  if (restoreFrame) return;
  restoreFrame = requestAnimationFrame(() => {
    restoreFrame = 0;
    refreshStory();
    restorePanelPosition(restoreSavedProgress);
    restoreSavedProgress = false;
  });
}

function followPanelLink(event) {
  if (scroller !== panel || event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest('a[href^="#"]:not([target]):not([download])');
  const fragment = link?.getAttribute('href');
  const target = fragmentTarget(fragment);
  if (!target || !panel.contains(target)) return;
  event.preventDefault();
  measure();
  const top = positionFor(target);
  if (location.hash !== fragment) {
    savePanelProgress();
    const { index, local } = chapterAt(top);
    history.pushState({ portfolioPanelProgress: index + local }, '', fragment);
  }
  if (link.classList.contains('skip-link') || event.detail === 0) {
    const destination = target.closest('.chapter') || target;
    if (!destination.hasAttribute('tabindex')) destination.tabIndex = -1;
    destination.focus({ preventScroll: true });
  }
  scrollToPosition(top, !link.classList.contains('skip-link'));
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
  const target = new THREE.Vector3();
  const chapterColor = new THREE.Color();
  const nextColor = new THREE.Color();
  const colors = chapterSpec.map(spec => new THREE.Color(spec.color));
  let smooth = exact;
  let lastTimestamp = 0;
  let frame = 0;
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
    const cameraResponse = timestamp < fastTransitionUntil ? 16 : 7.2;
    smooth = off ? Math.round(exact) : damp(smooth, exact, cameraResponse, dt);
    if (!off && Math.abs(smooth - exact) <= .001) smooth = exact;
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
    const compactScale = wideCompact ? lerp(.84, .72, clamp(smooth, 0, 1)) : 1;
    const framedDistance = Math.max(6.2 / (2 * lens * camera.aspect), distance * compactScale);
    camera.position.sub(target).multiplyScalar(framedDistance / distance).add(target);
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
      landmark.group.visible = Math.abs(i - smooth) < .85;
      if (landmark.group.visible) landmark.animate(off ? 0 : clamp(chapterProgress - i, 0, 1) * 6);
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
    if (!off && Math.abs(smooth - exact) > .001) wake();
    else lastTimestamp = 0;
  }

  function wake() {
    if (!frame && !lost && !document.hidden && inView) frame = requestAnimationFrame(render);
  }

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
      if (object.material?.map) resources.add(object.material.map);
      if (object.isInstancedMesh) resources.add(object);
    });
    for (const resource of resources) resource.dispose();
    renderer.dispose();
  };
}

if (chapters.length) {
  root.dataset.worldState = 'fallback';
  refreshStory();
  restorePanelPosition(true);
  syncMotion();
  bindScrollTrigger();
  const disposeScene = startScene();
  listen(motionButton, 'click', () => {
    paused = !paused;
    syncMotion();
  });
  listen(reduced, 'change', syncMotion);
  listen(document, 'click', followPanelLink);
  listen(window, 'hashchange', () => scheduleRestore());
  listen(window, 'popstate', () => scheduleRestore(true));
  listen(desktopLayout, 'change', () => {
    const nextScroller = chooseScroller();
    if (nextScroller === scroller) return;
    const previousProgress = chapterProgress;
    scroller = nextScroller;
    refreshStory();
    scrollToPosition(positionForProgress(previousProgress));
    bindScrollTrigger();
    ScrollTrigger.refresh();
  });
  listen(window, 'pageshow', event => {
    ScrollTrigger.refresh();
    if (event.persisted) scheduleRestore(true);
  });
  listen(document, 'toggle', event => {
    if (event.target instanceof HTMLDetailsElement) ScrollTrigger.refresh();
  }, { capture: true });
  listen(window, 'pagehide', event => {
    savePanelProgress();
    if (event.persisted) return;
    listeners.abort();
    cancelAnimationFrame(restoreFrame);
    trigger.kill();
    disposeScene();
  });
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

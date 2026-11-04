import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const porcelain = 0xeaf1ff;
const ice = 0x8be2ff;
const cobalt = 0x344fb5;
const navy = 0x142461;
const tau = Math.PI * 2;

export const chapterSpec = [
  { name: 'top',        anchor: [0, 0, 0],       view: [3.8, 2.8, 8.3],  lens: 35, color: porcelain },
  { name: 'production', anchor: [9.5, 0, -.6],   view: [.9, 2.35, 8.7],  lens: 35, color: ice },
  { name: 'agentic',    anchor: [19, 0, .3],     view: [.45, 2.15, 8.65], lens: 36, color: porcelain },
  { name: 'generative', anchor: [28.5, 0, -.55], view: [-2.5, 2.7, 8.2], lens: 36, color: ice },
  { name: 'backend',    anchor: [38, 0, .35],    view: [1.15, 2.15, 8.7], lens: 35, color: porcelain },
  { name: 'toolkit',    anchor: [47.5, 0, -.2],  view: [-2.6, 2.8, 8.1], lens: 35, color: ice },
];

export function buildScene() {
  const scene = new THREE.Scene();
  scene.name = 'Systems exhibition';
  scene.fog = new THREE.FogExp2(0x233db7, .031);
  const key = new THREE.DirectionalLight(0xf3f6ff, 2.5);
  const rim = new THREE.DirectionalLight(ice, 1.7);
  scene.add(key, rim, new THREE.HemisphereLight(0xc9d6ff, 0x182c72, 1.55));

  const ceramic = new THREE.MeshStandardMaterial({ color: porcelain, roughness: .34, metalness: .04 });
  const enamel = new THREE.MeshStandardMaterial({ color: cobalt, roughness: .37, metalness: .26 });
  const frame = new THREE.MeshStandardMaterial({ color: navy, roughness: .44, metalness: .52 });
  const alloy = new THREE.MeshStandardMaterial({ color: 0x84a4e7, roughness: .28, metalness: .61 });
  const frosted = new THREE.MeshStandardMaterial({ color: 0x82beed, roughness: .38, transparent: true, opacity: .35, depthWrite: false });
  const signal = new THREE.MeshBasicMaterial({ color: ice, toneMapped: false });
  const print = new THREE.MeshBasicMaterial({ color: 0x4764a2, toneMapped: false });
  const rail = new THREE.LineBasicMaterial({ color: 0x6585db, transparent: true, opacity: .47 });
  const packetShape = new THREE.SphereGeometry(.068, 12, 8);

  function mesh(parent, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0]) {
    const object = new THREE.Mesh(geometry, material);
    object.position.set(...position);
    object.rotation.set(...rotation);
    parent.add(object);
    return object;
  }

  function box(parent, size, material, position, radius = .04) {
    const [width, height, depth] = size;
    const bevel = Math.min(radius, width * .4, height * .4, depth * .4);
    return mesh(parent, new RoundedBoxGeometry(width, height, depth, 1, bevel), material, position);
  }

  function cylinder(parent, radius, height, material, position, rotation) {
    return mesh(parent, new THREE.CylinderGeometry(radius, radius, height, 32), material, position, rotation);
  }

  function tube(parent, path, radius, material, closed = false) {
    return mesh(parent, new THREE.TubeGeometry(path, 48, radius, 6, closed), material);
  }

  function ring(parent, major, minor, material, position, rotation, arc = tau) {
    return mesh(parent, new THREE.TorusGeometry(major, minor, 8, 48, arc), material, position, rotation);
  }

  function route(parent, points, material = rail) {
    const geometry = new THREE.BufferGeometry().setFromPoints(points.map(point => new THREE.Vector3(...point)));
    parent.add(new THREE.Line(geometry, material));
  }

  function label(parent, text, position, width = 1.1) {
    const plate = document.createElement('canvas');
    plate.width = 320;
    plate.height = 76;
    const context = plate.getContext('2d');
    if (!context) return;
    context.font = '650 50px Arial, sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = '#eaf1ff';
    context.fillText(text, 160, 38, 300);
    const map = new THREE.CanvasTexture(plate);
    map.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map, depthTest: false, depthWrite: false, toneMapped: false, fog: false });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(...position);
    sprite.scale.set(width, width * plate.height / plate.width, 1);
    parent.add(sprite);
  }

  function bench(parent, width, depth) {
    box(parent, [width, .24, depth], frame, [0, -1.31, 0], .09);
    box(parent, [width - .16, .06, depth - .15], enamel, [0, -1.17, 0], .027);
    box(parent, [width - .48, .022, .025], signal, [0, -1.28, depth / 2 + .002]);
    for (const x of [-width / 2 + .25, width / 2 - .25]) {
      for (const z of [-depth / 2 + .25, depth / 2 - .25]) cylinder(parent, .043, .03, alloy, [x, -1.13, z]);
    }
  }

  function core(parent) {
    cylinder(parent, 1.65, .27, frame, [0, -1.25, 0]);
    cylinder(parent, 1.53, .09, alloy, [0, -1.07, 0]);
    cylinder(parent, .74, .17, enamel, [0, -.96, 0]);
    ring(parent, 1.42, .027, signal, [0, -1.01, 0], [Math.PI / 2, 0, 0]);

    const instrument = new THREE.Group();
    parent.add(instrument);
    const crystal = mesh(instrument, new THREE.IcosahedronGeometry(.86, 0), ceramic, [0, .03, 0], [.14, .26, -.18]);
    const bezel = ring(instrument, 1.26, .07, alloy, [0, .03, 0], [.17, -.32, .2]);
    ring(instrument, 1.4, .029, signal, [0, .03, 0], [.8, .35, -.53], 4.78);
    for (const x of [-1.27, 1.27]) {
      box(parent, [.13, .7, .2], frame, [x, -.55, -.15]);
      cylinder(parent, .105, .14, alloy, [x, -.16, -.15], [0, 0, Math.PI / 2]);
    }
    return time => {
      crystal.rotation.y = .26 + time * .16;
      bezel.rotation.y = -.32 + Math.sin(time * .48) * .24;
      instrument.position.y = Math.sin(time * .42) * .055;
    };
  }

  function documentSheet(parent, x, z, material = ceramic) {
    const sheet = new THREE.Group();
    sheet.position.set(x, -.78, z);
    parent.add(sheet);
    box(sheet, [.66, .042, .93], material, [0, 0, 0]);
    box(sheet, [.26, .013, .05], print, [-.11, .03, -.29]);
    for (const [index, width] of [.46, .37, .46, .29].entries()) {
      box(sheet, [width, .013, .024], print, [width / 2 - .24, .03, -.11 + index * .125]);
    }
    return sheet;
  }

  function processor(parent) {
    bench(parent, 5.35, 2.35);
    box(parent, [4.83, .18, 1.13], frame, [0, -.99, 0], .06);
    for (const z of [-.68, .68]) {
      box(parent, [4.9, .14, .095], alloy, [0, -.89, z]);
      box(parent, [4.65, .018, .045], enamel, [0, -.80, z]);
    }
    const inputs = [-2.07, -1.27, -.47].map(x => documentSheet(parent, x, 0));
    for (const z of [-.79, .79]) box(parent, [.46, 1.25, .32], ceramic, [0, -.48, z], .08);
    box(parent, [.67, .29, 1.99], ceramic, [0, .19, 0], .08);
    box(parent, [.48, .045, 1.35], signal, [0, .027, 0]);
    const scan = box(parent, [.057, .046, 1.22], signal, [0, -.715, 0]);
    const output = documentSheet(parent, 1.81, 0, ceramic);
    for (const z of [-.15, .06, .27]) box(output, [.095, .016, .044], signal, [.14, .035, z]);
    label(parent, 'Document', [-1.88, -.48, 1.14], 1.32);
    label(parent, 'Extract', [0, .55, .35], 1.04);
    label(parent, 'Validated KPIs', [1.77, -.48, 1.14], 1.51);
    return time => {
      const progress = THREE.MathUtils.clamp(time / 6, 0, 1);
      inputs.forEach((sheet, i) => { sheet.position.x = -2.07 + i * .8 + progress * .33; });
      scan.position.x = -.2 + .4 * progress;
      output.position.x = 1.47 + progress * .48;
    };
  }

  function agentLoop(parent) {
    const axis = [Math.PI / 2, 0, 0];
    const loop = new THREE.EllipseCurve(0, 0, 1.95, 1.15);
    const curve = new THREE.CatmullRomCurve3(loop.getSpacedPoints(48).slice(0, -1).map(point =>
      new THREE.Vector3(point.x, -.35, point.y)), true);
    cylinder(parent, 1.35, .23, frame, [0, -1.25, 0]);
    cylinder(parent, 1.17, .06, enamel, [0, -1.11, 0]);
    cylinder(parent, .31, .46, alloy, [0, -.85, 0]);
    ring(parent, .67, .06, alloy, [0, -.55, 0], axis);
    tube(parent, curve, .105, alloy, true);
    const trace = curve.clone();
    trace.points.forEach(point => { point.y += .102; });
    tube(parent, trace, .022, signal, true);
    const names = ['Generate', 'Evaluate', 'Improve', 'Plan'];
    const nodeMaterials = names.map(() => new THREE.MeshStandardMaterial({
      color: porcelain, roughness: .36, emissive: ice, emissiveIntensity: .07,
    }));
    const nodes = names.map((name, index) => {
      const location = curve.getPointAt(.12 + index * .25);
      const node = cylinder(parent, .225, .31, nodeMaterials[index], [location.x, -.19, location.z]);
      cylinder(parent, .098, .035, enamel, [location.x, -.014, location.z]);
      label(parent, name, [location.x, index > 1 ? .43 : .21, location.z + .07], 1.15);
      return node;
    });
    const packet = mesh(parent, packetShape, signal);
    packet.scale.setScalar(1.38);
    return time => {
      const progress = THREE.MathUtils.clamp(time / 6, 0, 1);
      const phase = (.87 + progress) % 1;
      packet.position.copy(curve.getPointAt(phase));
      packet.position.y += .11;
      const active = Math.floor(((phase + .005) % 1) * 4);
      nodes.forEach((node, index) => { node.material.emissiveIntensity = active === index ? .55 : .07; });
    };
  }

  function model(parent) {
    bench(parent, 4.5, 2.66);
    const levels = [-.87, -.33, .21, .75];
    const columns = [-1.51, 1.51];
    for (const x of columns) for (const z of [-.69, .69]) {
      cylinder(parent, .045, 1.9, alloy, [x, -.18, z]);
      cylinder(parent, .095, .13, enamel, [x, .78, z]);
    }
    levels.forEach((level, index) => {
      const layer = box(parent, [3.22, .085, 1.55], index === 0 ? enamel : frosted, [0, level, 0]);
      layer.renderOrder = index === 0 ? 0 : index;
      box(parent, [3.18, .07, .08], index === 3 ? ceramic : alloy, [0, level, .75]);
      box(parent, [3.18, .04, .04], signal, [0, level + .047, .72]);
      for (let x = 0; x < 5; x++) for (let z = 0; z < 2; z++) {
        const size = .19 + ((x + index * z) % 3) * .08;
        box(parent, [size, .035, .18], (x + z + index) % 4 === 0 ? signal : ceramic,
          [-1.09 + x * .49, level + .075, -.27 + z * .54]);
      }
    });
    label(parent, 'Tokens', [1.8, -.86, .85], .96);
    label(parent, 'Attention', [1.8, -.3, .85], 1.13);
    label(parent, 'Decoder', [1.8, .25, .85], 1.08);
    label(parent, 'Evaluate', [1.8, .83, .85], 1.1);
    const packet = mesh(parent, packetShape, signal, [-.36, -.85, .77]);
    packet.scale.setScalar(1.55);
    return time => { packet.position.y = -.87 + THREE.MathUtils.clamp(time / 6, 0, 1) * 1.62; };
  }

  function relay(parent) {
    bench(parent, 5.5, 2.35);
    for (const x of [-1.84, 1.84]) {
      box(parent, [.85, .12, .62], alloy, [x, -1.02, .32]);
      box(parent, [.17, .46, .16], frame, [x, -.76, .08]);
      box(parent, [1.32, .92, .17], ceramic, [x, -.27, .05], .065);
      box(parent, [1.12, .71, .025], enamel, [x, -.26, .151], .04);
      for (const [i, width] of [.49, .34, .55].entries()) {
        box(parent, [width, .078, .025], i === 0 ? signal : alloy, [x + (i % 2 ? .15 : -.12), -.07 - i * .2, .172]);
      }
    }
    cylinder(parent, .52, .09, alloy, [0, -1.02, .34]);
    for (const level of [-.86, -.67, -.48]) cylinder(parent, .47, .13, ceramic, [0, level, .34]);
    const socket = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.25, .02, -.1), new THREE.Vector3(-.8, .46, -.4),
      new THREE.Vector3(0, .67, -.52), new THREE.Vector3(.8, .46, -.4), new THREE.Vector3(1.25, .02, -.1),
    ]);
    tube(parent, socket, .037, signal);
    const packet = mesh(parent, packetShape, signal);
    packet.scale.setScalar(1.58);
    label(parent, 'Client', [-1.83, .44, .15], 1);
    label(parent, 'WebSocket', [0, .92, -.42], 1.32);
    label(parent, 'SQLite', [0, -.85, 1.15], .98);
    return time => { packet.position.copy(socket.getPoint(THREE.MathUtils.clamp(time / 6, 0, 1))); };
  }

  function toolkit(parent) {
    bench(parent, 5.12, 2.45);
    const tools = [-1.68, -.55, .55, 1.68].map(x => {
      const module = new THREE.Group();
      module.position.set(x, -.63, -.12);
      parent.add(module);
      box(parent, [.92, .08, .98], frame, [x, -1.08, -.12]);
      return module;
    });
    mesh(tools[0], new THREE.DodecahedronGeometry(.44), ceramic, [0, 0, 0], [.3, .25, .15]);
    ring(tools[0], .53, .025, signal, [0, 0, 0], [.34, .4, .25], 5.3);
    for (const level of [-.25, -.035, .18]) cylinder(tools[1], .37, .155, ceramic, [0, level, 0]);
    box(tools[2], [.79, .68, .09], ceramic, [0, .04, 0], .065);
    box(tools[2], [.64, .5, .036], enamel, [0, .02, .065]);
    for (const y of [.13, -.01, -.15]) box(tools[2], [.39, .034, .025], signal, [0, y, .092]);
    box(tools[3], [.69, .58, .61], ceramic, [0, -.02, 0], .08);
    box(tools[3], [.52, .06, .48], enamel, [0, .23, 0], .02);
    box(tools[3], [.29, .12, .035], enamel, [0, -.015, .314]);
    ['AI', 'Data', 'Web', 'Delivery'].forEach((name, i) => label(parent, name, [tools[i].position.x, -.9, .98], .85));
    return time => {
      const progress = THREE.MathUtils.clamp(time / 6, 0, 1);
      tools.forEach((module, i) => { module.position.y = -.65 + Math.sin(Math.PI * THREE.MathUtils.clamp(progress * 4 - i, 0, 1)) * .24; });
    };
  }

  const builders = [core, processor, agentLoop, model, relay, toolkit];
  const exhibits = new THREE.Group();
  exhibits.name = 'Six systems';
  scene.add(exhibits);
  const landmarks = chapterSpec.map((chapter, index) => {
    const group = new THREE.Group();
    group.name = chapter.name;
    group.position.set(...chapter.anchor);
    const animate = builders[index](group);
    exhibits.add(group);
    return { group, animate };
  });

  const track = new THREE.Group();
  track.name = 'Shared floor';
  scene.add(track);
  for (const z of [-1.77, 1.76]) {
    route(track, [[-5, -1.46, z], [53, -1.46, z]]);
  }
  for (const { anchor: [x] } of chapterSpec) {
    for (const z of [-1.77, 1.76]) {
      route(track, [[x - 2.7, -1.46, z], [x - 2.7, -1.46, z + .23]]);
      route(track, [[x + 2.7, -1.46, z], [x + 2.7, -1.46, z + .23]]);
    }
  }

  return { scene, landmarks, key, rim };
}

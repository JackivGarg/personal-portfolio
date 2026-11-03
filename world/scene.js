import * as THREE from 'three';

const ink = 0x111b56;
const graphite = 0x293e9c;
const porcelain = 0xf1f3fa;
const cyan = 0x7cd8ff;
const TAU = Math.PI * 2;

// Meter-like units, lateral circuit spine, six distinct stations. The stage
// holds the landmark on the right and keeps the reading column in the DOM.
export const chapterSpec = [
  { name: 'top',       anchor: [0, 0, 0],       view: [6.5, 4, 9.2],  lens: 35, color: porcelain },
  { name: 'production',anchor: [10, 0.35, -2],  view: [5.7, 3, 9.5],  lens: 35, color: cyan },
  { name: 'agentic',   anchor: [20, 0.1, 0.8],  view: [0.8, 3.8, 11], lens: 36, color: porcelain },
  { name: 'generative',anchor: [30, 0.2, -2.4], view: [-4, 3, 10.2],  lens: 37, color: cyan },
  { name: 'backend',   anchor: [40, 0.05, 1.4], view: [5.6, 5, 9.4],  lens: 34, color: porcelain },
  { name: 'toolkit',   anchor: [50, 0.1, -0.3], view: [-1, 2.6, 11],  lens: 36, color: cyan },
];

export function buildScene() {
  const scene = new THREE.Scene();
  scene.name = 'Circuit archive';
  scene.fog = new THREE.FogExp2(0x152567, 0.044);
  const stations = new THREE.Group();
  stations.name = 'Landmarks';
  scene.add(stations);
  const key = new THREE.DirectionalLight(0xe5edff, 2.9);
  key.position.set(1, 8, 9);
  const rim = new THREE.DirectionalLight(cyan, 2.2);
  rim.position.set(-6, 4, -5);
  scene.add(key, rim, new THREE.HemisphereLight(0xd5e2ff, 0x142251, 1.7));

  const metal = new THREE.MeshStandardMaterial({ color: ink, roughness: 0.39, metalness: 0.48 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: graphite, roughness: 0.64, metalness: 0.28 });
  const structure = new THREE.LineBasicMaterial({ color: 0x6d87d8 });
  const pinGeometry = new THREE.BoxGeometry(1, 1, 1);
  const accents = new Map([porcelain, cyan].map(color => [color, new THREE.MeshBasicMaterial({ color })]));
  const lines = new Map([porcelain, cyan].map(color => [color, new THREE.LineBasicMaterial({ color })]));

  function block(parent, size, position, material = metal, edge = structure) {
    const geometry = new THREE.BoxGeometry(...size);
    const object = new THREE.Mesh(geometry, material);
    object.position.set(...position);
    if (edge) object.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edge));
    parent.add(object);
    return object;
  }

  function path(parent, points, material = structure) {
    const geometry = new THREE.BufferGeometry().setFromPoints(points.map(point => new THREE.Vector3(...point)));
    const object = new THREE.Line(geometry, material);
    parent.add(object);
    return object;
  }

  function ring(parent, radius, material, position = [0, 0, 0], rotation = [0, 0, 0], length = TAU) {
    const object = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.013, 4, 56, length), material);
    object.position.set(...position);
    object.rotation.set(...rotation);
    parent.add(object);
    return object;
  }

  function pins(parent, positions, material, size) {
    const instance = new THREE.InstancedMesh(pinGeometry, material, positions.length);
    const transform = new THREE.Object3D();
    transform.scale.set(...size);
    positions.forEach((position, index) => {
      transform.position.set(...position);
      transform.updateMatrix();
      instance.setMatrixAt(index, transform.matrix);
    });
    parent.add(instance);
  }

  function base(parent, width = 4.45, depth = 2.9) {
    block(parent, [width, .14, depth], [0, -1.36, 0], metal);
    block(parent, [width - .18, .045, depth - .18], [0, -1.263, 0], darkMetal);
    const traces = [];
    for (const sign of [-1, 1]) {
      for (let i = 0; i < 6; i++) {
        const x = sign * (width / 2 - .16 - i * .17);
        traces.push([x, -1.226, -depth / 2 + .25], [x, -1.226, depth / 2 - .25]);
      }
    }
    pins(parent, traces, darkMetal, [.085, .025, .24]);
  }

  function core(parent) {
    base(parent, 4.8, 3.15);
    const housing = new THREE.Mesh(new THREE.IcosahedronGeometry(1.13, 1), metal);
    housing.rotation.set(.18, .34, -.15);
    housing.add(new THREE.LineSegments(new THREE.EdgesGeometry(housing.geometry, 14), structure));
    parent.add(housing);
    const tracer = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(.78, 0)), lines.get(porcelain));
    tracer.rotation.set(-.4, .1, .3);
    const cage = new THREE.Group();
    cage.add(tracer);
    ring(cage, 1.67, accents.get(porcelain), [0, 0, 0], [.84, .4, 0], 5.35);
    ring(cage, 1.86, accents.get(cyan), [0, 0, 0], [-.45, .95, -.6], 4.3);
    ring(cage, 2.15, accents.get(porcelain), [0, 0, 0], [1.18, -.34, 1.8], 2.85);
    ring(parent, 2.26, darkMetal, [0, -.9, 0], [Math.PI / 2, 0, 0]);
    parent.add(cage);
    const lugs = [];
    for (let i = 0; i < 8; i++) {
      const theta = i * TAU / 8;
      lugs.push([Math.cos(theta) * 1.95, -1.16, Math.sin(theta) * 1.24]);
    }
    pins(parent, lugs, accents.get(porcelain), [.07, .07, .07]);
    return time => { cage.rotation.y = Math.sin(time * .28) * .38; cage.rotation.z = time * .09; };
  }

  function production(parent) {
    base(parent, 4.75, 3.05);
    for (const x of [-1.82, -.56, .7, 1.96]) {
      block(parent, [.13, 3.25, 1.2], [x, .39, 0], darkMetal);
    }
    const lights = [];
    for (let column = 0; column < 3; column++) {
      const x = -1.18 + column * 1.27;
      for (let row = 0; row < 5; row++) {
        const y = -.98 + row * .57;
        block(parent, [1.08, .36, 1.21], [x, y, 0], metal);
        block(parent, [.52, .07, .035], [x - .12, y + .01, .624], darkMetal, null);
        lights.push([x + .33, y + .02, .63]);
      }
      path(parent, [[x, 1.48, -.66], [x, 1.93, -.66], [x, 1.93, .6], [x, 1.56, .6]], lines.get(cyan));
    }
    pins(parent, lights, accents.get(cyan), [.075, .044, .035]);
    ring(parent, 1.8, darkMetal, [.06, -.7, .02], [Math.PI / 2, 0, 0]);
    const packet = block(parent, [.12, .07, .04], [0, 1.93, .6], accents.get(porcelain), null);
    return time => { packet.position.x = Math.sin(time * .95) * 1.25; };
  }

  function agentGraph(parent) {
    base(parent, 4.8, 3.05);
    const nodes = [[0, .5, .34], [-1.95, 1.2, -.48], [1.95, 1.2, -.48], [-1.3, -.35, .9], [1.3, -.35, .9], [0, 1.95, -.85]];
    const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 5], [2, 5], [1, 3], [2, 4], [3, 4]];
    const nodeShape = new THREE.OctahedronGeometry(.42, 0);
    const nodeEdge = new THREE.EdgesGeometry(nodeShape);
    for (const [i, position] of nodes.entries()) {
      const object = new THREE.Mesh(nodeShape, metal);
      object.position.set(...position);
      object.scale.setScalar(i === 0 ? 1.55 : 1);
      object.add(new THREE.LineSegments(nodeEdge, lines.get(i % 2 ? cyan : porcelain)));
      parent.add(object);
      path(parent, [[position[0], -1.22, position[2]], position]);
    }
    for (const [start, end] of edges) path(parent, [nodes[start], nodes[end]], start === 0 ? lines.get(porcelain) : structure);
    const cursor = block(parent, [.09, .09, .09], nodes[0], accents.get(cyan), null);
    const from = new THREE.Vector3();
    const to = new THREE.Vector3();
    return time => {
      const t = time * .6;
      const [start, end] = edges[Math.floor(t) % edges.length];
      cursor.position.copy(from.fromArray(nodes[start])).lerp(to.fromArray(nodes[end]), t % 1);
    };
  }

  function generator(parent) {
    base(parent, 4.8, 3.2);
    const scanner = new THREE.Group();
    scanner.position.y = .36;
    parent.add(scanner);
    for (let i = 0; i < 5; i++) {
      const z = -.84 + i * .42;
      ring(scanner, 1.5 - i * .09, accents.get(i % 2 ? cyan : porcelain), [0, 0, z], [0, 0, i * .61], TAU * .78);
      ring(scanner, 1.64 - i * .09, darkMetal, [0, 0, z], [0, 0, 0]);
    }
    for (const x of [-1.72, 1.72]) {
      block(parent, [.25, 2.45, .53], [x, .09, -.42], metal);
      block(parent, [.28, .12, .58], [x, 1.36, -.42], darkMetal);
    }
    const positions = [];
    for (let x = -4; x <= 4; x++) {
      for (let y = -4; y <= 4; y++) {
        const d = Math.hypot(x, y);
        if (d < 4.5 && (x + y) % 3 !== 1) positions.push([x * .21, .36 + y * .21, .94 - Math.cos(x + y) * .18]);
      }
    }
    const field = new THREE.Group();
    parent.add(field);
    pins(field, positions, accents.get(cyan), [.038, .038, .038]);
    return time => {
      scanner.rotation.z = Math.sin(time * .28) * .35;
      field.position.z = Math.sin(time * .88) * .16;
    };
  }

  function backend(parent) {
    base(parent, 4.7, 3.5);
    for (let layer = 0; layer < 4; layer++) {
      const y = -.97 + layer * .63;
      block(parent, [3.15, .18, 2.45], [0, y, 0], layer % 2 ? metal : darkMetal);
      for (const side of [-1, 1]) {
        path(parent, [[side * 1.4, y + .105, -1.02], [side * 1.4, y + .105, .75], [side * .75, y + .105, 1.02], [0, y + .105, 1.02]], lines.get(layer % 2 ? cyan : porcelain));
      }
    }
    for (const x of [-1.22, 1.22]) {
      for (const z of [-.95, .95]) block(parent, [.09, 2.27, .09], [x, -.13, z], darkMetal, structure);
    }
    const center = block(parent, [1.02, .28, .76], [0, 1.21, 0], metal, lines.get(porcelain));
    const squares = [];
    for (let i = -3; i <= 3; i++) squares.push([i * .16, 1.37, -.4], [i * .16, 1.37, .4]);
    pins(parent, squares, accents.get(cyan), [.06, .025, .14]);
    return time => { center.position.y = 1.21 + Math.sin(time * .75) * .06; };
  }

  function toolkit(parent) {
    base(parent, 4.65, 3.2);
    const hub = new THREE.Mesh(new THREE.DodecahedronGeometry(.74), metal);
    hub.position.y = .31;
    hub.add(new THREE.LineSegments(new THREE.EdgesGeometry(hub.geometry), lines.get(porcelain)));
    parent.add(hub);
    const modules = new THREE.Group();
    modules.position.y = .31;
    parent.add(modules);
    for (let i = 0; i < 7; i++) {
      const angle = i * TAU / 7;
      const x = Math.cos(angle) * 1.75;
      const z = Math.sin(angle) * 1.75;
      const y = Math.sin(angle * 2) * .55;
      const module = block(modules, [.53, .33, .53], [x, y, z], metal, lines.get(i % 2 ? porcelain : cyan));
      module.rotation.y = -angle;
      path(modules, [[0, 0, 0], [x * .62, y, z * .62], [x, y, z]]);
    }
    ring(parent, 1.82, accents.get(cyan), [0, .31, 0], [Math.PI / 2, .2, 0], TAU * .9);
    return time => { modules.rotation.y = time * .13; hub.rotation.set(.22, time * .23, .18); };
  }

  const build = [core, production, agentGraph, generator, backend, toolkit];
  const landmarks = chapterSpec.map((chapter, index) => {
    const group = new THREE.Group();
    group.name = chapter.name;
    group.position.set(...chapter.anchor);
    const animate = build[index](group);
    stations.add(group);
    return { group, animate };
  });

  // The routing plane spans every station, tying adjacent frames together.
  const grid = new THREE.GridHelper(68, 68, 0x5374ca, 0x31469b);
  grid.position.set(25, -1.51, 0);
  scene.add(grid);
  for (let lane = 0; lane < 5; lane++) {
    const z = 2.1 + lane * .26;
    const points = [[-7, -1.48, z]];
    for (let i = 0; i < chapterSpec.length; i++) {
      const x = chapterSpec[i].anchor[0];
      const offset = ((i + lane) % 2) * .66;
      points.push([x - 3, -1.48, z], [x - 2, -1.48, z + offset], [x + 2, -1.48, z + offset], [x + 3, -1.48, z]);
    }
    points.push([57, -1.48, z]);
    path(scene, points);
  }

  const position = new Float32Array(90 * 3);
  for (let i = 0; i < 90; i++) {
    position.set([((i * 73) % 211) / 211 * 64 - 7, ((i * 43) % 89) / 89 * 5 - 1, ((i * 19) % 113) / 113 * 13 - 8], i * 3);
  }
  const dust = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(position, 3));
  scene.add(new THREE.Points(dust, new THREE.PointsMaterial({ color: 0x809edf, size: .028, sizeAttenuation: true })));

  return { scene, landmarks, key, rim };
}

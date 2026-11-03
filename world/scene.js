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
  { name: 'production',anchor: [10, 0.35, -2],  view: [1.45, 1.6, 10.2],  lens: 35, color: cyan },
  { name: 'agentic',   anchor: [20, 0.1, 0.8],  view: [0.4, 1.2, 10.4], lens: 36, color: porcelain },
  { name: 'generative',anchor: [30, 0.2, -2.4], view: [-1.45, 1.5, 10.4],  lens: 37, color: cyan },
  { name: 'backend',   anchor: [40, 0.05, 1.4], view: [1.8, 1.9, 10.2],  lens: 34, color: porcelain },
  { name: 'toolkit',   anchor: [50, 0.1, -0.3], view: [-.8, 1.45, 10.5],  lens: 36, color: cyan },
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

  function stageLabel(parent, text, position, width = 1.75) {
    const plate = document.createElement('canvas');
    plate.width = 448;
    plate.height = 104;
    const context = plate.getContext('2d');
    context.fillStyle = '#eaf0ff';
    context.beginPath();
    context.roundRect(1, 3, 446, 98, 18);
    context.fill();
    context.fillStyle = '#172765';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = '700 55px Arial, sans-serif';
    context.fillText(text, 224, 54, 403);
    const map = new THREE.CanvasTexture(plate);
    map.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map, depthWrite: false, toneMapped: false, fog: false });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(...position);
    sprite.scale.set(width, width * plate.height / plate.width, 1);
    parent.add(sprite);
  }

  const tilePositions = [[-1.18, .88, 0], [1.18, .88, 0], [1.18, -.73, 0], [-1.18, -.73, 0]];
  const traceZ = -.055;
  const junctionShape = new THREE.OctahedronGeometry(.075);
  const arrowShape = new THREE.ConeGeometry(.08, .16, 3);
  const glyphMaterial = accents.get(cyan);
  const glyphLine = lines.get(porcelain);

  function stroke(parent, points, material = glyphLine) {
    path(parent, points.map(([x, y]) => [x, y, .4]), material);
  }

  function drawGlyph(parent, kind) {
    if (kind === 'document' || kind === 'draft' || kind === 'plan') {
      stroke(parent, [[-.37, -.25], [-.37, .49], [.16, .49], [.38, .27], [.38, -.25], [-.37, -.25]]);
      stroke(parent, [[.16, .49], [.16, .27], [.38, .27]]);
      for (const y of [.12, -.02, -.16]) stroke(parent, [[-.23, y], [.23, y]]);
    } else if (kind === 'route' || kind === 'attention' || kind === 'socket') {
      const points = [[-.48,.12], [0,.12], [.47,.34], [.47,-.12]];
      stroke(parent, [points[0], points[1], points[2]]);
      stroke(parent, [points[1], points[3]]);
      pins(parent, points.map(([x,y]) => [x,y,.41]), glyphMaterial, [.1,.1,.09]);
    } else if (kind === 'extract' || kind === 'token' || kind === 'decoder') {
      const tiles = [];
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 5; col++) {
          if ((row + col) % 3 !== 2) tiles.push([-.48 + col * .24, -.14 + row * .24, .42]);
        }
      }
      pins(parent, tiles, glyphMaterial, [.17,.16,.085]);
    } else if (kind === 'evaluate' || kind === 'validate' || kind === 'dedupe') {
      stroke(parent, [[-.48,-.2],[-.48,.42],[.48,.42],[.48,-.2],[-.48,-.2]]);
      stroke(parent, [[-.25,.1],[-.08,-.06],[.28,.28]], lines.get(cyan));
      pins(parent, [[-.25,.1,.4],[-.08,-.06,.4],[.28,.28,.4]], glyphMaterial, [.07,.07,.07]);
    } else if (kind === 'improve' || kind === 'delivery') {
      ring(parent, .34, glyphMaterial, [0,.12,.42], [0,0,.65], 5.05);
      stroke(parent, [[.14,.45],[.33,.4],[.33,.23]]);
      pins(parent, [[0,.12,.42]], glyphMaterial, [.115,.115,.115]);
    } else if (kind === 'database') {
      for (const y of [-.06,.12,.3]) {
        const disc = new THREE.Mesh(new THREE.CylinderGeometry(.37,.37,.105,20), darkMetal);
        disc.position.set(0,y,.38);
        disc.add(new THREE.LineSegments(new THREE.EdgesGeometry(disc.geometry), glyphLine));
        parent.add(disc);
      }
    } else if (kind === 'client' || kind === 'fullstack') {
      stroke(parent, [[-.52,-.16],[-.52,.42],[.52,.42],[.52,-.16],[-.52,-.16]]);
      stroke(parent, [[-.5,.26],[.5,.26]]);
      stroke(parent, [[-.26,.1],[-.37,.01],[-.26,-.08]]);
      stroke(parent, [[.26,.1],[.37,.01],[.26,-.08]]);
    } else {
      const facets = new THREE.Mesh(new THREE.OctahedronGeometry(.33), glyphMaterial);
      facets.position.set(0,.13,.34);
      facets.rotation.set(.24,.41,.13);
      parent.add(facets);
    }
  }

  function schematic(parent, stages, options = {}) {
    const cells = stages.map(([label, glyph], index) => {
      const tile = new THREE.Group();
      const [x, y, z] = tilePositions[index];
      tile.position.set(x, y, z);
      const face = new THREE.MeshStandardMaterial({
        color: graphite, roughness: .53, metalness: .35,
        emissive: cyan, emissiveIntensity: .08
      });
      block(tile, [1.88, 1.22, .24], [0, 0, 0], metal);
      block(tile, [1.68, .99, .13], [0, .03, .17], face);
      drawGlyph(tile, glyph);
      stageLabel(tile, label, [0, -.43, .48]);
      parent.add(tile);
      return { tile, face };
    });
    const routes = [];
    function route(from, to, color = cyan, directed = true) {
      const start = new THREE.Vector3(...from).setZ(traceZ);
      const end = new THREE.Vector3(...to).setZ(traceZ);
      path(parent, [start.toArray(), end.toArray()], lines.get(color));
      const marker = new THREE.Mesh(directed ? arrowShape : junctionShape, accents.get(color));
      marker.position.lerpVectors(start, end, .5);
      if (directed) marker.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.clone().sub(start).normalize());
      parent.add(marker);
      routes.push([start, end]);
    }
    if (options.hub) {
      const hub = new THREE.Mesh(new THREE.DodecahedronGeometry(.34), darkMetal);
      hub.add(new THREE.LineSegments(new THREE.EdgesGeometry(hub.geometry), glyphLine));
      parent.add(hub);
      for (const position of tilePositions) route([0, .075, 0], position, porcelain, false);
    } else {
      for (let i = 0; i < cells.length - 1; i++) route(tilePositions[i], tilePositions[i + 1]);
      if (options.feedback) route(tilePositions[3], tilePositions[0], porcelain);
    }
    if (options.monitor) {
      path(parent, [[-1.18,-1.35,traceZ],[-1.18,-1.73,traceZ],[0,-1.73,traceZ]], lines.get(porcelain));
      stageLabel(parent, 'Monitor', [.53, -1.73, .11], 1.38);
    }
    if (options.feedback) {
      stageLabel(parent, 'Next pass', [0, .075, .07], 1.4);
    }
    const packet = new THREE.Mesh(junctionShape, accents.get(porcelain));
    packet.scale.setScalar(1.4);
    parent.add(packet);
    return time => {
      const progress = THREE.MathUtils.clamp(time / 6, 0, 1);
      const step = progress * routes.length;
      const routeIndex = Math.min(Math.floor(step), routes.length - 1);
      const [start, end] = routes[routeIndex];
      packet.position.lerpVectors(start, end, step - routeIndex);
      packet.position.z = .55;
      const active = Math.min(cells.length - 1, Math.floor(progress * cells.length));
      for (const [index, cell] of cells.entries()) {
        cell.face.emissiveIntensity = index === active ? .48 : index < active ? .17 : .035;
        cell.tile.position.z = index === active ? .12 : 0;
      }
    };
  }

  function production(parent) {
    return schematic(parent, [
      ['Documents', 'document'], ['Route', 'route'], ['Extract', 'extract'], ['Validate', 'validate']
    ], { monitor: true });
  }

  function agentGraph(parent) {
    return schematic(parent, [
      ['Plan', 'plan'], ['Generate', 'draft'], ['Evaluate', 'evaluate'], ['Improve', 'improve']
    ], { feedback: true });
  }

  function generator(parent) {
    return schematic(parent, [
      ['BPE tokens', 'token'], ['Causal attention', 'attention'], ['Decoder', 'decoder'], ['Evaluate', 'evaluate']
    ]);
  }

  function backend(parent) {
    return schematic(parent, [
      ['Client', 'client'], ['WebSocket', 'socket'], ['Dedupe', 'dedupe'], ['SQLite', 'database']
    ]);
  }

  function toolkit(parent) {
    return schematic(parent, [
      ['AI engineering', 'ai'], ['Backend & data', 'database'], ['Full stack', 'fullstack'], ['Delivery', 'delivery']
    ], { hub: true });
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

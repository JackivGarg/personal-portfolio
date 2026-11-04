(() => {
  const mounts = [...document.querySelectorAll('.folio-motion[data-motion]')];
  if (!mounts.length) return;

  const tag = (x, y, text, align = 'middle', accent = false) =>
    '<text class="' + (accent ? 'fm-accent' : 'fm-label') + '" x="' + x + '" y="' + y + '" text-anchor="' + align + '">' + text + '</text>';

  const wire = (path, accent = '') =>
    '<path class="fm-wire ' + accent + '" data-draw pathLength="1" d="' + path + '"/>';
  const bed = (path, accent = '') => '<path class="fm-bed ' + accent + '" d="' + path + '"/>';
  const pulse = (path, start = .12, end = .85) =>
    '<path data-route d="' + path + '" fill="none" stroke="none"/><circle class="fm-pulse" r="5" data-pulse="' + start + ' ' + end + '"/>';
  const show = (at, svg) => '<g data-reveal="' + at + '">' + svg + '</g>';
  const rect = (x, y, width, height, kind = '', radius = 8) =>
    '<rect class="fm-shape ' + kind + '" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" rx="' + radius + '"/>';
  const disc = (x, y, r, kind = '') => '<circle class="fm-shape ' + kind + '" cx="' + x + '" cy="' + y + '" r="' + r + '"/>';
  const tick = (x, y) => '<path class="fm-stroke" d="M' + x + ' ' + y + 'l7 7 14-16"/>';
  const ruled = (x, y, widths) => widths.map((w, i) =>
    '<path class="fm-rule" d="M' + x + ' ' + (y + i * 15) + 'h' + w + '"/>').join('');

  function intro() {
    const left = 'M173 156h85l48-38';
    const right = 'M547 156h-85l-48-38';
    const bottom = 'M360 160v48';
    return bed(left) + bed(right) + bed(bottom) + wire(left) + wire(right, 'fm-violet') + wire(bottom) +
      show(.08, rect(58, 117, 138, 74, 'fm-copper') + tag(127, 160, 'Workflows')) +
      show(.28, rect(524, 117, 138, 74, 'fm-violet') + tag(593, 160, 'Models')) +
      show(.46, rect(299, 204, 122, 53) + tag(360, 237, 'Python APIs')) +
      show(.22, '<path class="fm-plane" d="M271 102l89-51 89 51-89 51z"/><path class="fm-plane fm-under" d="M271 102v17l89 50 89-50v-17l-89 51z"/>' +
        '<path class="fm-stroke" d="M311 102l49-28 49 28-49 28z"/><circle class="fm-pulse" cx="360" cy="102" r="5"/>') +
      pulse(left, .14, .53) + pulse(right, .33, .70) + pulse(bottom, .61, .91);
  }

  function experience() {
    const route = 'M164 136H261Q283 136 302 108L324 82h91q22 0 40 28l18 26h83';
    const branch = 'M262 136q38 0 63 47h89';
    return bed(route) + bed(branch) + wire(route) + wire(branch, 'fm-violet') +
      show(.05, rect(81, 77, 84, 109, '', 5) + rect(68, 66, 84, 109, 'fm-copper', 5) +
        ruled(88, 100, [41, 35, 43, 28]) + tag(117, 224, 'Document')) +
      show(.24, disc(262, 136, 22, 'fm-copper') + '<path class="fm-stroke" d="M251 135h12l7-8m-7 8 7 8"/>' +
        tag(263, 207, 'Route')) +
      show(.39, rect(328, 59, 89, 48, 'fm-violet', 6) + ruled(347, 77, [47, 36]) + tag(374, 145, 'Extract')) +
      show(.53, '<circle class="fm-pulse fm-muted" cx="415" cy="183" r="4"/>' + tag(374, 221, 'Monitor')) +
      show(.61, rect(544, 73, 106, 112, 'fm-copper', 6) +
        '<path class="fm-rule" d="M564 103h65m-65 24h65m-65 24h65m-43-49v66"/>' +
        tick(606, 101) + tick(606, 126) + tick(606, 150) + tag(598, 224, 'Validated KPIs')) +
      pulse(route, .12, .90);
  }

  function loop() {
    const circuit = 'M194 86H526Q570 86 570 129T526 172H194Q150 172 150 129T194 86Z';
    const stages = [
      { x: 219, y: 86, label: 'Plan', at: .05 },
      { x: 503, y: 86, label: 'Generate', at: .24 },
      { x: 503, y: 172, label: 'Evaluate', at: .44 },
      { x: 219, y: 172, label: 'Improve', at: .65 },
    ];
    return '<ellipse class="fm-gridline" cx="360" cy="130" rx="227" ry="75"/>' +
      bed(circuit) + wire(circuit) +
      '<path class="fm-rule" d="m339 82 7 4-7 4m47 78-7 4 7 4"/>' +
      stages.map(({ x, y, label, at }, i) => show(at,
        disc(x, y, 11, i > 1 ? 'fm-violet' : 'fm-copper') + disc(x, y, 3, 'fm-solid') +
        tag(x, y + (y < 100 ? -24 : 35), label)
      )).join('') +
      show(.62, tag(360, 133, 'Evaluation feedback', 'middle', true)) +
      show(.78, '<path class="fm-rule" d="M359 147h-43m0 0 7-4m-7 4 7 4"/>') +
      pulse(circuit, .10, .96);
  }

  function storyseed() {
    const before = 'M194 130h91';
    const after = 'M448 130h80';
    const levels = [0, 1, 2].map(i => {
      const y = 140 - i * 28;
      return show(.22 + i * .12,
        '<path class="fm-plane ' + (i % 2 ? 'fm-indigo-plane' : '') + '" d="M273 ' + y + 'l86-47 86 47-86 47z"/>' +
        '<path class="fm-rule" d="M299 ' + y + 'l60-32 60 32-60 32z"/>' +
        [0, 1, 2, 3, 4].map(n => '<circle class="fm-pulse fm-muted" cx="' + (315 + n * 22) + '" cy="' + (y - (n % 3) * 9) + '" r="3"/>').join('')
      );
    }).join('');
    return bed(before) + bed(after) + wire(before, 'fm-violet') + wire(after) +
      show(.04, [0, 1, 2, 3].map(i => rect(74 + i * 29, 113, 23, 29, i % 2 ? 'fm-violet' : 'fm-copper', 4)).join('') +
        tag(125, 197, 'BPE tokens')) +
      levels + tag(360, 217, 'Attention + decoder') +
      show(.67, rect(530, 81, 115, 96, 'fm-copper', 6) + ruled(551, 107, [63, 72, 55, 37]) +
        tag(586, 217, 'Evaluate text')) +
      pulse(before, .08, .32) + pulse(after, .56, .82);
  }

  function relay() {
    const send = 'M167 111h95l28 25h140l28-25h95';
    const ack = 'M552 157h-94l-28 25H290l-28-25h-95';
    const db = '<path class="fm-plane fm-indigo-plane" d="M315 112v57c0 15 90 15 90 0v-57"/>' +
      '<ellipse class="fm-plane" cx="360" cy="112" rx="45" ry="14"/><path class="fm-rule" d="M315 134c0 15 90 15 90 0m-90 18c0 15 90 15 90 0"/>';
    return bed(send) + bed(ack) + wire(send) + wire(ack, 'fm-violet') +
      show(.04, rect(66, 77, 110, 106, '', 8) + rect(79, 91, 84, 57, 'fm-violet', 5) + ruled(93, 112, [47, 32]) +
        tag(121, 222, 'Sender')) +
      show(.25, db + tag(360, 223, 'Persist to SQLite')) +
      show(.49, rect(544, 77, 110, 106, '', 8) + rect(557, 91, 84, 57, 'fm-copper', 5) + ruled(571, 112, [47, 32]) +
        tag(599, 222, 'Recipient')) +
      show(.08, tag(360, 57, 'Authenticated WebSocket', 'middle', true)) +
      show(.71, tag(360, 257, 'Delivery acknowledgment', 'middle', true)) +
      pulse(send, .10, .64) + pulse(ack, .66, .94);
  }

  function toolkit() {
    const positions = [112, 277, 443, 608];
    return bed('M92 203H628') + wire('M92 203H628', 'fm-violet') +
      ['AI', 'Data', 'Web', 'Delivery'].map((name, i) => {
        const x = positions[i];
        let icon;
        if (i === 0) icon = '<path class="fm-stroke" d="M' + (x - 25) + ' 130l25-29 25 29-25 29z"/>' + disc(x, 130, 6, 'fm-solid');
        if (i === 1) icon = '<ellipse class="fm-plane" cx="' + x + '" cy="111" rx="24" ry="8"/><path class="fm-stroke" d="M' + (x - 24) + ' 111v34c0 12 48 12 48 0v-34m-48 17c0 11 48 11 48 0"/>';
        if (i === 2) icon = rect(x - 28, 109, 56, 43, 'fm-violet', 4) + '<path class="fm-stroke" d="M' + (x - 28) + ' 122h56"/>' + ruled(x - 17, 134, [29]);
        if (i === 3) icon = '<path class="fm-plane" d="M' + (x - 28) + ' 119l28-18 28 18-28 16z"/><path class="fm-stroke" d="M' + (x - 28) + ' 119v28l28 17 28-17v-28m-28 16v29"/>';
        return show(.09 + i * .17, rect(x - 57, 77, 114, 109, i % 2 ? 'fm-violet' : 'fm-copper', 7) +
          icon + tag(x, 245, name));
      }).join('');
  }

  function achievements() {
    const trace = 'M92 138H628';
    const events = [
      {x: 128, title: 'SmartBU', detail: 'First place', at: .09},
      {x: 360, title: 'Campus roles', detail: 'AIS + CodeChef', at: .30},
      {x: 592, title: 'LeetCode', detail: '100 Days Badge', at: .52},
    ];
    return bed(trace) + wire(trace) + events.map(({x,title,detail,at}, i) =>
      show(at, '<path class="fm-rule" d="M' + x + ' 92v92"/>' +
        disc(x, 138, 15, i === 1 ? 'fm-violet' : 'fm-copper') + disc(x, 138, 4, 'fm-solid') +
        tag(x, 70, title) + tag(x, 218, detail, 'middle', true))
    ).join('') + pulse(trace, .10, .93);
  }

  function meritrove() {
    const pathway = 'M116 176h111q24 0 38-22l28-45h114q23 0 37 15l37 39h117';
    return bed(pathway) + wire(pathway) +
      show(.06, disc(116, 176, 15, 'fm-copper') + disc(116, 176, 4, 'fm-solid') + tag(116, 219, 'Find gaps')) +
      show(.25, disc(294, 109, 15, 'fm-violet') + disc(294, 109, 4, 'fm-solid') + tag(294, 76, 'Find peers')) +
      show(.43, disc(444, 124, 15, 'fm-copper') + disc(444, 124, 4, 'fm-solid') + tag(444, 88, 'Practise')) +
      show(.62, rect(545, 117, 112, 79, 'fm-violet', 7) + ruled(568, 144, [62, 50, 59]) +
        tag(601, 235, 'Career Card')) +
      pulse(pathway, .10, .92);
  }

  function sixstrings() {
    const strings = ['E', 'A', 'D', 'G', 'B', 'E'];
    const frets = [194, 279, 356, 426, 492, 552, 608];
    const track = strings.map((note, i) => {
      const y = 82 + i * 22;
      const path = 'M115 ' + y + 'H652';
      return tag(78, y + 7, note) + bed(path) + show(.07 + i * .10, wire(path, i % 2 ? 'fm-violet' : ''));
    }).join('');
    return rect(108, 60, 551, 154, '', 10) +
      frets.map(x => '<path class="fm-gridline" d="M' + x + ' 61v152"/>').join('') +
      track +
      show(.31, disc(236, 104, 7, 'fm-solid') + disc(318, 148, 7, 'fm-solid')) +
      show(.57, disc(460, 170, 7, 'fm-solid') + disc(580, 126, 7, 'fm-solid')) +
      tag(360, 253, 'Lessons and daily guitar practice', 'middle', true);
  }

  function gym() {
    const axis = 'M126 135H594';
    return '<ellipse class="fm-gridline" cx="360" cy="135" rx="257" ry="83"/>' +
      bed(axis) + wire(axis) +
      show(.10, rect(262, 120, 196, 30, 'fm-violet', 10) + ruled(315, 133, [90])) +
      show(.30, rect(205, 78, 58, 114, 'fm-copper', 10) + rect(457, 78, 58, 114, 'fm-copper', 10)) +
      show(.54, rect(166, 96, 41, 78, 'fm-violet', 8) + rect(513, 96, 41, 78, 'fm-violet', 8)) +
      show(.75, rect(149, 117, 18, 36, '', 6) + rect(554, 117, 18, 36, '', 6)) +
      tag(360, 239, 'Personal fitness project', 'middle', true);
  }

  function strengths() {
    const checks = [
      ['Recover', 'Checkpoint → resume', 74, .07],
      ['Evaluate', 'Draft → criteria', 137, .28],
      ['Observe', 'Failure → signal', 200, .50],
    ];
    return checks.map(([label, detail, y, at], index) => {
      const path = 'M245 ' + y + 'H536';
      return tag(83, y + 7, label, 'start') + bed(path) + show(at, wire(path, index % 2 ? 'fm-violet' : '') +
        rect(267, y - 15, 211, 30, index % 2 ? 'fm-violet' : 'fm-copper', 5) +
        tag(372, y + 6, detail, 'middle', true) + disc(558, y, 14) + tick(550, y + 1)) +
        pulse(path, at + .03, at + .41);
    }).join('');
  }

  function contact() {
    const links = [
      ['Email', 116, 'M360 105v22q0 16-18 16H134q-18 0-18 18v23'],
      ['GitHub', 360, 'M360 105v79'],
      ['LinkedIn', 604, 'M360 105v22q0 16 18 16h208q18 0 18 18v23'],
    ];
    return show(.04, rect(292, 57, 136, 51, 'fm-copper') + tag(360, 89, 'Say hello')) +
      links.map(([name, x, path], i) => bed(path) + wire(path, i === 1 ? 'fm-violet' : '') +
        show(.22 + i * .16, rect(x - 55, 184, 110, 51, i === 1 ? 'fm-violet' : '', 6) + tag(x, 216, name)) +
        pulse(path, .18 + i * .14, .65 + i * .12)).join('');
  }

  const diagrams = {
    intro: ['Engineering systems', intro],
    experience: ['Munshot · Document workflow', experience],
    loop: ['The Loop · Iterative generation', loop],
    storyseed: ['StorySeed · Small language model', storyseed],
    relay: ['Relay · Message delivery', relay],
    meritrove: ['MERITrove · Career preparation', meritrove],
    sixstrings: ['Six Strings · Fretboard', sixstrings],
    gym: ['Gym · Personal project', gym],
    strengths: ['Engineering practice', strengths],
    toolkit: ['Engineering toolkit', toolkit],
    achievements: ['Recognition and campus leadership', achievements],
    contact: ['Contact paths', contact],
  };
  const panel = document.querySelector('.detail-pane');
  const desktop = matchMedia('(min-width: 900px) and (min-height: 620px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const clamp = value => Math.min(1, Math.max(0, value));
  const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };

  function createDiagram(mount, index) {
    const diagram = diagrams[mount.dataset.motion];
    if (!diagram) return null;
    const [label, draw] = diagram;
    const gridId = 'folio-grid-' + index;
    mount.innerHTML = '<div class="fm-heading" aria-hidden="true">' +
      '<span>' + label + '</span><span>' + String(index + 1).padStart(2, '0') + ' / ' + String(mounts.length).padStart(2, '0') + '</span></div>' +
      '<svg viewBox="0 0 720 275" focusable="false" aria-hidden="true">' +
      '<defs><pattern id="' + gridId + '" width="24" height="24" patternUnits="userSpaceOnUse">' +
      '<path class="fm-gridline" d="M24 0H0v24"/></pattern></defs>' +
      '<rect width="720" height="275" fill="url(#' + gridId + ')"/>' +
      draw() + '</svg><div class="fm-meter" aria-hidden="true"><span></span></div>';
    mount.classList.add('is-enhanced');
    const paths = [...mount.querySelectorAll('[data-route]')];
    const pulses = [...mount.querySelectorAll('[data-pulse]')].map((element, i) => ({
      element,
      path: paths[i],
      length: paths[i].getTotalLength(),
      range: element.dataset.pulse.split(' ').map(Number),
    }));
    return {
      mount,
      reveals: [...mount.querySelectorAll('[data-reveal]')].map(element => [element, Number(element.dataset.reveal)]),
      wires: [...mount.querySelectorAll('[data-draw]')],
      pulses,
      last: NaN,
    };
  }

  const scenes = mounts.map(createDiagram).filter(Boolean);
  let frame = 0;

  function renderScene(scene, progress, paused) {
    if (Math.abs(scene.last - progress) < .002) return;
    scene.last = progress;
    scene.mount.style.setProperty('--fm-progress', progress.toFixed(3));
    for (const wireElement of scene.wires) wireElement.style.strokeDashoffset = String(1 - smooth(progress));
    for (const [element, at] of scene.reveals) {
      const amount = smooth((progress - at) / .20);
      element.style.opacity = String(.56 + amount * .44);
      element.style.transform = 'translateY(' + ((1 - amount) * 12).toFixed(2) + 'px)';
    }
    for (const {element, path, length, range: [start, end]} of scene.pulses) {
      const time = clamp((progress - start) / (end - start));
      const point = path.getPointAtLength(time * length);
      element.setAttribute('cx', point.x.toFixed(2));
      element.setAttribute('cy', point.y.toFixed(2));
      element.style.opacity = paused ? '0' : String(Math.sin(Math.PI * time) ** .45);
    }
  }

  function render() {
    frame = 0;
    const paused = reduced.matches || root.classList.contains('motion-paused') ||
      document.body.classList.contains('motion-paused') || root.dataset.motion === 'off';
    const nested = panel && desktop.matches;
    const panelRect = nested ? panel.getBoundingClientRect() : null;
    const viewportTop = panelRect ? Math.max(0, panelRect.top) : 0;
    const viewportHeight = panelRect ? Math.min(panel.clientHeight, innerHeight - viewportTop) : innerHeight;
    const from = viewportTop + viewportHeight * .92;
    const to = viewportTop + viewportHeight * .16;
    for (const scene of scenes) {
      const rect = scene.mount.getBoundingClientRect();
      const point = rect.top + rect.height * .20;
      renderScene(scene, paused ? 1 : clamp((from - point) / Math.max(1, from - to)), paused);
    }
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  window.addEventListener('scroll', schedule, {passive: true});
  panel?.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', schedule, {passive: true});
  window.addEventListener('pageshow', schedule);
  reduced.addEventListener('change', schedule);
  desktop.addEventListener('change', schedule);
  const settings = new MutationObserver(schedule);
  settings.observe(root, {attributes: true, attributeFilter: ['class', 'data-motion', 'data-active-section']});
  settings.observe(document.body, {attributes: true, attributeFilter: ['class', 'data-motion']});
  document.fonts?.ready.then(schedule);
  schedule();
})();

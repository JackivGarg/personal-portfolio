(() => {
  const shell = document.querySelector('.folio-shell');
  const left = shell?.querySelector('.section-pane');
  const right = shell?.querySelector('.detail-pane');
  if (!left || !right) return;

  const root = document.documentElement;
  const stops = [...left.querySelectorAll('.section-stop[id][data-section]')];
  const stories = [...right.querySelectorAll('.detail-story[data-story]')];
  const storiesByKey = new Map(stories.map(story => [story.dataset.story, story]));
  const sections = new Map(stops
    .filter(stop => storiesByKey.has(stop.dataset.section))
    .map(stop => [stop.dataset.section, { stop, story: storiesByKey.get(stop.dataset.section) }]));
  const keys = [...sections.keys()];
  if (!keys.length) return;

  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const meter = document.querySelector('#scroll-progress');
  const desktop = matchMedia('(min-width: 900px) and (min-height: 620px)');
  const savedRightPositions = new Map();
  let isSplit = desktop.matches;
  let activeKey;
  let requestedLeftTop;
  let updateFrame = 0;
  let historyFrame = 0;
  let readHistoryState = false;

  function select(key, modeChanged = false) {
    const next = sections.get(key);
    if (!next || (activeKey === key && !modeChanged)) return;
    const previous = sections.get(activeKey);
    const focusWasInStory = previous?.story.contains(document.activeElement);
    if (isSplit && previous && !modeChanged) savedRightPositions.set(activeKey, right.scrollTop);

    activeKey = key;
    root.dataset.activeSection = key;
    for (const [id, { stop, story }] of sections) {
      stop.classList.toggle('is-active', id === key);
      story.classList.toggle('is-active', id === key);
      story.hidden = isSplit && id !== key;
    }
    for (const link of navLinks) {
      if (link.dataset.nav === key) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    if (isSplit) {
      right.scrollTo({ top: savedRightPositions.get(key) ?? 0, behavior: 'instant' });
      if (focusWasInStory && previous !== next) right.focus({ preventScroll: true });
    }
    shell.dispatchEvent(new CustomEvent('folio:storychange', {
      bubbles: true,
      detail: { key, story: next.story, split: isSplit },
    }));
  }

  function scrollInset(scroller) {
    return parseFloat(getComputedStyle(scroller).scrollPaddingTop) || 0;
  }

  function offsetWithin(scroller, element) {
    const viewportTop = scroller.getBoundingClientRect().top + scroller.clientTop;
    const offset = element.getBoundingClientRect().top - viewportTop;
    const margin = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
    return Math.max(0, scroller.scrollTop + offset - scrollInset(scroller) - margin);
  }

  function alignLeft(key, top) {
    const section = sections.get(key);
    if (!section) return;
    left.scrollTo({ top: top ?? offsetWithin(left, section.stop), behavior: 'instant' });
    requestedLeftTop = left.scrollTop;
  }

  function activeFromLeft() {
    const top = left.scrollTop;
    if (requestedLeftTop !== undefined && Math.abs(top - requestedLeftTop) < 1) return activeKey;
    requestedLeftTop = undefined;
    if (top <= 1) return keys[0];
    const max = left.scrollHeight - left.clientHeight;
    if (max > 1 && top >= max - 1) return keys.at(-1);
    const readingLine = left.getBoundingClientRect().top + Math.min(112, left.clientHeight * .22);
    let match = keys[0];
    for (const [key, section] of sections) {
      if (section.stop.getBoundingClientRect().top > readingLine) break;
      match = key;
    }
    return match;
  }

  function activeFromPage() {
    const readingLine = Math.min(innerHeight * .35, 225);
    let bestTop = -Infinity;
    let match = keys[0];
    for (const [key, { stop, story }] of sections) {
      for (const block of [stop, story]) {
        const top = block.getBoundingClientRect().top;
        if (top <= readingLine && top > bestTop) {
          bestTop = top;
          match = key;
        }
      }
    }
    return match;
  }

  function update() {
    updateFrame = 0;
    if (desktop.matches !== isSplit) return;
    const top = isSplit ? left.scrollTop : window.scrollY;
    const max = isSplit ? left.scrollHeight - left.clientHeight : root.scrollHeight - innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, top / max)) : 0;
    meter?.style.setProperty('--progress', String(progress));
    root.style.setProperty('--folio-progress', String(progress));
    select(isSplit ? activeFromLeft() : activeFromPage());
  }

  function scheduleUpdate() {
    if (!updateFrame) updateFrame = requestAnimationFrame(update);
  }

  function fragmentDestination(fragment) {
    if (!fragment || fragment === '#') return null;
    let target;
    try {
      target = document.getElementById(decodeURIComponent(fragment.slice(1)));
    } catch {
      return null;
    }
    const key = target?.closest('[data-section]')?.dataset.section
      || target?.closest('[data-story]')?.dataset.story;
    const section = sections.get(key);
    if (!section) return null;
    return { key, target: section.stop.contains(target) ? section.story : target };
  }

  function reveal(destination) {
    const { key, target } = destination;
    const { story } = sections.get(key);
    select(key);
    if (isSplit) {
      alignLeft(key);
      if (target !== story) right.scrollTo({ top: offsetWithin(right, target), behavior: 'instant' });
    } else target.scrollIntoView({ block: 'start', behavior: 'instant' });
    scheduleUpdate();
  }

  function savePosition() {
    history.replaceState({
      ...history.state,
      folioKey: activeKey,
      folioLeftScroll: isSplit ? left.scrollTop : null,
      folioPageScroll: isSplit ? null : window.scrollY,
    }, '');
  }

  function restoreLocation(preferSaved) {
    const saved = preferSaved ? history.state : null;
    const key = saved?.folioKey;
    const section = sections.get(key);
    if (section && isSplit && Number.isFinite(saved.folioLeftScroll)) {
      select(key);
      alignLeft(key, saved.folioLeftScroll);
    } else if (section && !isSplit && Number.isFinite(saved.folioPageScroll)) {
      select(key);
      window.scrollTo({ top: saved.folioPageScroll, behavior: 'instant' });
    } else {
      const destination = fragmentDestination(location.hash);
      if (destination) reveal(destination);
      else if (isSplit && !location.hash) {
        select(keys[0]);
        alignLeft(keys[0], 0);
      }
    }
    scheduleUpdate();
  }

  function queueRestore(preferSaved = false) {
    readHistoryState ||= preferSaved;
    if (historyFrame) return;
    historyFrame = requestAnimationFrame(() => {
      historyFrame = 0;
      restoreLocation(readHistoryState);
      readHistoryState = false;
    });
  }

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href^="#"]:not([target]):not([download])');
    const fragment = link?.getAttribute('href');
    const destination = fragmentDestination(fragment);
    if (!destination) return;
    event.preventDefault();
    if (location.hash !== fragment) {
      savePosition();
      history.pushState({ folioKey: destination.key }, '', fragment);
    }
    reveal(destination);
    if (event.detail === 0) {
      const heading = sections.get(destination.key).story.querySelector('h2');
      if (heading) {
        if (!heading.hasAttribute('tabindex')) heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    }
  });

  left.addEventListener('scroll', () => {
    if (isSplit) scheduleUpdate();
  }, { passive: true });
  window.addEventListener('scroll', () => {
    if (!isSplit) scheduleUpdate();
  }, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  window.addEventListener('hashchange', () => queueRestore());
  window.addEventListener('popstate', () => queueRestore(true));
  window.addEventListener('pagehide', savePosition);
  window.addEventListener('pageshow', event => {
    if (event.persisted) queueRestore(true);
  });
  document.addEventListener('toggle', scheduleUpdate, true);
  desktop.addEventListener('change', () => {
    const key = activeKey ?? keys[0];
    if (isSplit) savedRightPositions.set(key, right.scrollTop);
    isSplit = desktop.matches;
    requestedLeftTop = undefined;
    select(key, true);
    if (isSplit) alignLeft(key);
    else if (key !== keys[0] || location.hash) sections.get(key).story.scrollIntoView({ block: 'start', behavior: 'instant' });
    scheduleUpdate();
  });

  select(keys[0], true);
  root.dataset.folioReady = '';
  restoreLocation(true);
  document.fonts?.ready.then(scheduleUpdate);
})();

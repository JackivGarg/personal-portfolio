(() => {
  const workbench = document.querySelector('.split-workbench');
  const story = workbench?.querySelector('.story-pane');
  const gallery = workbench?.querySelector('.work-scroll');
  if (!story || !gallery) return;

  const root = document.documentElement;
  const chapters = [...story.querySelectorAll('[data-chapter][id]')];
  const cards = [...gallery.querySelectorAll('.work-card[data-work]')];
  const cardsById = new Map(cards.map(card => [card.dataset.work, card]));
  const chapterIds = new Set(chapters.map(chapter => chapter.id));
  const links = [...document.querySelectorAll('[data-nav]')];
  const workLabel = workbench.querySelector('[data-work-label]');
  const meter = document.querySelector('#scroll-progress');
  const splitLayout = matchMedia('(min-width: 900px) and (min-height: 620px)');
  const initialWorkLabel = workLabel?.textContent;
  let currentStory;
  let currentWork;
  let requestedWork;
  let intendedScrollTop;
  let lastPanelInput = -Infinity;
  let explicitUntil = 0;
  let frame = 0;
  let pageScrolled = false;

  function panelInUse() {
    return gallery.contains(document.activeElement) || performance.now() - lastPanelInput < 420;
  }

  function scanActive(items, line) {
    let active = items[0];
    for (const item of items) {
      if (item.getBoundingClientRect().top > line) break;
      active = item;
    }
    return active;
  }

  function findStory() {
    const bounds = story.getBoundingClientRect();
    const readingLine = Math.min(innerHeight * .35, 300);
    if (readingLine < bounds.top || readingLine >= bounds.bottom) return null;
    return scanActive(chapters, readingLine)?.id || null;
  }

  function findWork() {
    const bounds = gallery.getBoundingClientRect();
    if (bounds.top >= innerHeight || bounds.bottom <= 0) return null;
    if (splitLayout.matches) {
      if (requestedWork) return requestedWork;
      const lastScrollTop = gallery.scrollHeight - gallery.clientHeight;
      if (lastScrollTop > 0 && gallery.scrollTop >= lastScrollTop - 2) return cards.at(-1)?.dataset.work;
      return scanActive(cards, bounds.top + gallery.clientHeight * .24)?.dataset.work;
    }
    const readingLine = Math.min(innerHeight * .45, 360);
    if (bounds.top > readingLine || bounds.bottom <= readingLine) return null;
    return scanActive(cards, readingLine)?.dataset.work || null;
  }

  function markWork(id) {
    if (currentWork === id) return;
    currentWork = id;
    if (id) root.dataset.activeWork = id;
    else delete root.dataset.activeWork;
    for (const card of cards) card.classList.toggle('is-active', card.dataset.work === id);
    for (const chapter of chapters) chapter.classList.toggle('is-related', splitLayout.matches && chapter.id === id);
    for (const link of links) link.classList.toggle('is-work-related', splitLayout.matches && link.dataset.nav === id);
    if (workLabel) {
      const title = cardsById.get(id)?.querySelector('h3')?.textContent?.trim();
      workLabel.textContent = title || initialWorkLabel;
    }
  }

  function alignGallery(id, focus = false) {
    const card = cardsById.get(id);
    if (!splitLayout.matches || !card) return;
    const scrollPadding = parseFloat(getComputedStyle(gallery).scrollPaddingTop) || 0;
    const distance = card.getBoundingClientRect().top - gallery.getBoundingClientRect().top;
    const limit = gallery.scrollHeight - gallery.clientHeight;
    requestedWork = id;
    const top = Math.max(0, Math.min(limit, gallery.scrollTop + distance - gallery.clientTop - scrollPadding));
    gallery.scrollTo({ top, behavior: 'instant' });
    intendedScrollTop = gallery.scrollTop;
    if (focus) {
      if (!card.hasAttribute('tabindex')) card.tabIndex = -1;
      card.focus({ preventScroll: true });
    }
    markWork(id);
  }

  function update() {
    frame = 0;
    const scrollRange = Math.max(1, root.scrollHeight - innerHeight);
    const progress = Math.max(0, Math.min(1, scrollY / scrollRange));
    meter?.style.setProperty('--progress', String(progress));
    const storyId = findStory();
    if (storyId !== currentStory) {
      currentStory = storyId;
      for (const link of links) {
        if (link.dataset.nav === storyId) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
      const explicitNavigation = performance.now() < explicitUntil;
      if (pageScrolled && storyId && !explicitNavigation && !panelInUse()) alignGallery(storyId);
    }
    pageScrolled = false;
    markWork(findWork());
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(update);
  }

  function notePanelInput() {
    lastPanelInput = performance.now();
    intendedScrollTop = undefined;
    requestedWork = undefined;
    schedule();
  }

  function syncExplicitChapter(id) {
    explicitUntil = performance.now() + 850;
    alignGallery(id);
    schedule();
  }

  function followFragment() {
    const id = location.hash.slice(1);
    if (id.startsWith('work-') && cardsById.has(id.slice(5))) alignGallery(id.slice(5));
    else if (chapterIds.has(id)) syncExplicitChapter(id);
    schedule();
  }

  window.addEventListener('scroll', () => {
    pageScrolled = true;
    schedule();
  }, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('hashchange', followFragment);
  gallery.addEventListener('scroll', () => {
    if (!splitLayout.matches) return;
    if (intendedScrollTop === undefined || Math.abs(gallery.scrollTop - intendedScrollTop) > 2) notePanelInput();
    else schedule();
  }, { passive: true });
  gallery.addEventListener('wheel', notePanelInput, { passive: true });
  gallery.addEventListener('touchstart', notePanelInput, { passive: true });
  gallery.addEventListener('pointerdown', notePanelInput);
  gallery.addEventListener('keydown', event => {
    if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) notePanelInput();
  });
  gallery.addEventListener('toggle', schedule, true);
  story.addEventListener('toggle', schedule, true);
  splitLayout.addEventListener('change', () => {
    requestedWork = undefined;
    intendedScrollTop = undefined;
    currentWork = undefined;
    if (splitLayout.matches && currentStory && !panelInUse()) alignGallery(currentStory);
    schedule();
  });

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href^="#"]:not([target])');
    if (!link || !splitLayout.matches) return;
    const id = link.getAttribute('href').slice(1);
    if (id.startsWith('work-') && cardsById.has(id.slice(5))) {
      const bounds = gallery.getBoundingClientRect();
      if (!story.contains(link) || bounds.bottom <= 0 || bounds.top >= innerHeight) return;
      event.preventDefault();
      if (location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
      alignGallery(id.slice(5), true);
    } else if (chapterIds.has(id)) {
      syncExplicitChapter(id);
    }
  });

  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(schedule);
    observer.observe(story);
    observer.observe(gallery);
    for (const card of cards) observer.observe(card);
  }
  followFragment();
})();

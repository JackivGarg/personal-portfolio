(() => {
  'use strict';

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const header = document.querySelector('.site-header');
  const art = document.querySelector('.hero-art');
  const dialog = document.querySelector('#project-dialog');
  const dialogContent = document.querySelector('#dialog-content');
  let returnFocus = null;
  let framePending = false;

  function setMenu(open) {
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }

  menuButton?.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  navigation?.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });
  document.addEventListener('click', event => {
    if (!header?.contains(event.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });

  function updateScroll() {
    header?.classList.toggle('is-scrolled', window.scrollY > 20);
    const progress = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty('--scroll-progress', `${progress > 0 ? window.scrollY / progress * 100 : 0}%`);
    framePending = false;
  }
  window.addEventListener('scroll', () => {
    if (!framePending) {
      framePending = true;
      requestAnimationFrame(updateScroll);
    }
  }, { passive: true });
  updateScroll();

  const revealTargets = document.querySelectorAll('.section-heading, .project, .project-row, .experience-intro, .experience-content, .about-copy, .now-panel, .toolkit, .recognition');
  if ('IntersectionObserver' in window && !motionPreference.matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    revealTargets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${index % 2 * 70}ms`);
      target.classList.add('reveal');
      revealObserver.observe(target);
    });
  }

  if ('IntersectionObserver' in window) {
    const navLinks = [...document.querySelectorAll('#navigation a')];
    const sectionObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.1, 0.4] });
    document.querySelectorAll('#work, #experience, #about').forEach(section => sectionObserver.observe(section));
  }

  // A small pointer response supplements the diagrams without blocking navigation.
  art?.addEventListener('pointermove', event => {
    if (motionPreference.matches || event.pointerType === 'touch') return;
    const bounds = art.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    art.style.setProperty('--pointer-x', `${-y * 7}deg`);
    art.style.setProperty('--pointer-y', `${x * 7}deg`);
  });
  art?.addEventListener('pointerleave', () => {
    art.style.setProperty('--pointer-x', '0deg');
    art.style.setProperty('--pointer-y', '0deg');
  });
  motionPreference.addEventListener('change', event => {
    document.body.classList.toggle('reduced-motion', event.matches);
    if (event.matches) {
      revealTargets.forEach(target => target.classList.add('is-visible'));
      art?.style.setProperty('--pointer-x', '0deg');
      art?.style.setProperty('--pointer-y', '0deg');
    }
  });

  const projects = {
    relay: {
      title: 'Relay',
      summary: 'A Signal-inspired real-time messaging platform, built from the interface to persistent storage and deployment.',
      stack: 'Next.js · React · TypeScript · FastAPI · SQLAlchemy · SQLite · Docker · Azure',
      sections: [
        ['The product', 'Direct and group conversations with contact search, typing indicators, online presence, and delivery/read receipts.'],
        ['Engineering decisions', 'Authenticated WebSocket delivery and client-generated message IDs make sends idempotent. Hashed session tokens are stored in HttpOnly cookies; group administration has explicit authorization checks.'],
        ['Delivery', 'Docker Compose and Caddy HTTPS on an Azure Linux VM, with Alembic migrations, persistent storage, health checks, backups, and GitHub Actions validation.']
      ],
      note: 'Educational project. Registration uses mocked verification; messages are not end-to-end encrypted.',
      source: 'https://github.com/JackivGarg/SIGNAL-CLONE'
    },
    loop: {
      title: 'The Loop',
      summary: 'An evaluator-driven AI website builder that makes the iteration process visible: plan, generate, evaluate, and improve.',
      stack: 'React · TypeScript · FastAPI · SQLite · Groq inference · Docker',
      sections: [
        ['The product', 'Private accounts, saved projects, desktop/mobile sandboxed previews, HTML downloads, and inspectable draft history.'],
        ['Engineering decisions', 'A persistent background-job queue saves outputs between stages. Queued jobs survive restarts; interrupted runs retain drafts. Cancellation is checked between stages.'],
        ['Quality and boundaries', 'Deterministic checks and an evaluation rubric guide iterations. Per-user ownership checks protect project data; versioned profiles support rollback. CI covers Python tests, TypeScript builds, and browser workflows.']
      ],
      note: 'Self-hostable portfolio application. The current worker is single-instance, and static evaluation does not replace rendered browser checks.',
      source: 'https://github.com/JackivGarg/THE-LOOP'
    },
    versity: {
      title: 'VersitySync',
      summary: 'A student career-readiness platform with adaptive interview practice at the center of the experience.',
      stack: 'FastAPI · Supabase · Redis · LangGraph · WebSockets',
      sections: [
        ['Team and role', 'Leading a six-person team building a platform selected for multiple competitions.'],
        ['The experience', 'Real-time interview sessions combine voice transcription, interruption handling, and adaptive follow-up questions.'],
        ['Interview modes', 'General, role-based, company-style, and coding interview practice support different preparation needs.']
      ],
      note: 'Project details are drawn from my résumé. A public project link is not listed.'
    },
    insurance: {
      title: 'Vehicle Insurance Prediction',
      summary: 'A modular machine-learning project connecting a six-stage pipeline to containerized model serving.',
      stack: 'Python · FastAPI · Docker · AWS · Amazon ECR · GitHub Actions',
      sections: [
        ['The build', 'A modular six-stage machine-learning pipeline with a FastAPI service for model inference.'],
        ['Delivery', 'Containerized model serving and GitHub Actions automation for building Docker images and pushing them to Amazon ECR.']
      ],
      source: 'https://github.com/JackivGarg/Vehicle-Insurance-'
    },
    storyseed: {
      title: 'StorySeed',
      summary: 'An experimental small language model built and trained from random initialization for short English story continuation.',
      stack: 'Tokenization · Causal attention · Transformers · Training · Evaluation',
      sections: [
        ['Learning by building', 'The project progresses from a character bigram to tokenization, contextual baselines, causal attention, an explicit decoder, and repeatable training.'],
        ['Evaluation matters', 'Training and evaluation are recorded with artifact identities and observed limitations. The latest recovery improved word formation and readability.'],
        ['An honest boundary', 'Reliable story continuation remains unachieved: reference confusion and weak plot logic remain. Trained weights are local and are not supplied by cloning the repository.']
      ],
      note: 'Experimental learning project. Implementation progress is not a claim of reliable model quality.',
      source: 'https://github.com/JackivGarg/StorySeed'
    }
  };

  function addElement(tag, className, text, parent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    parent.append(element);
    return element;
  }

  function openProject(key, trigger) {
    const project = projects[key];
    if (!project || !dialog || !dialogContent) return;
    dialogContent.replaceChildren();
    const title = addElement('h2', '', project.title, dialogContent);
    title.id = 'dialog-title';
    addElement('p', 'dialog-summary', project.summary, dialogContent);
    addElement('p', 'dialog-stack', project.stack, dialogContent);
    project.sections.forEach(([heading, body]) => {
      const section = addElement('section', 'dialog-section', '', dialogContent);
      addElement('h3', '', heading, section);
      addElement('p', '', body, section);
    });
    if (project.note) addElement('p', 'dialog-note', project.note, dialogContent);
    if (project.source) {
      const link = addElement('a', 'dialog-source button primary', 'Explore the source ↗', dialogContent);
      link.href = project.source;
      link.target = '_blank';
      link.rel = 'noopener';
    }
    returnFocus = trigger;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
  }

  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => openProject(button.dataset.project, button));
  });
  document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog?.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    returnFocus?.focus({ preventScroll: true });
  });
})();

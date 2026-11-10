const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const heroMotionToggle = document.querySelector('.hero-motion-toggle');
const heroFrameGroups = [...document.querySelectorAll('[data-hero-set]')].reduce((groups, image) => {
  const set = image.dataset.heroSet;
  (groups[set] ||= []).push(image);
  return groups;
}, {});

if (heroMotionToggle && Object.keys(heroFrameGroups).length) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let isPaused = reduceMotion;
  const timers = [];

  function advance(group, set) {
    if (isPaused || group.length < 2) return;
    const current = group.findIndex((image) => image.classList.contains('is-active'));
    const next = (current + 1) % group.length;
    group[next].classList.add('is-active');
    group[current].classList.remove('is-active');
    if (set === 'service') {
      const counter = document.querySelector('.hero-slide-counter');
      if (counter) counter.textContent = `${String(next + 1).padStart(2, '0')} / ${String(group.length).padStart(2, '0')}`;
    }
  }

  function setPaused(paused) {
    isPaused = paused;
    heroMotionToggle.setAttribute('aria-pressed', String(paused));
    heroMotionToggle.setAttribute('aria-label', paused ? 'Play image animation' : 'Pause image animation');
    heroMotionToggle.innerHTML = `<span aria-hidden="true">${paused ? '▶' : 'Ⅱ'}</span> ${paused ? 'Play' : 'Pause'}`;
  }

  if (reduceMotion) {
    heroMotionToggle.hidden = true;
  } else {
    timers.push(window.setInterval(() => advance(heroFrameGroups.service || [], 'service'), 7000));
    window.setTimeout(() => timers.push(window.setInterval(() => advance(heroFrameGroups.product || [], 'product'), 6400)), 2800);
    heroMotionToggle.addEventListener('click', () => setPaused(!isPaused));
  }
}

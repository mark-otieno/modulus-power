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

const heroTiles = [...document.querySelectorAll('[data-hero-tile]')];
const heroCatalogIds = [
  ...Array.from({ length: 17 }, (_, index) => `f1-${String(index + 1).padStart(2, '0')}`),
  ...Array.from({ length: 30 }, (_, index) => `f2-${String(index + 1).padStart(2, '0')}`),
  ...['02', '03', '04', '05', '06', '07', '09', '10', '11', '12', '13', '14'].map((id) => `f3-${id}`),
  ...Array.from({ length: 42 }, (_, index) => `new-${String(index + 1).padStart(2, '0')}`).filter((id) => id !== 'new-32'),
  'mix-04', 'mix-14', 'mix-18', 'mix-21'
];
const heroProductPhotos = heroCatalogIds.map((id) => `images/catalog/${id}.jpg`);

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

if (heroTiles.length) {
  const firstPhotos = shuffle(heroProductPhotos);
  heroTiles.forEach((tile, index) => {
    tile.src = firstPhotos[index];
    tile.dataset.heroImage = firstPhotos[index];
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    window.setInterval(() => {
      const tile = heroTiles[Math.floor(Math.random() * heroTiles.length)];
      const visiblePhotos = new Set(heroTiles.map((image) => image.dataset.heroImage));
      const choices = heroProductPhotos.filter((photo) => !visiblePhotos.has(photo));
      if (!choices.length) return;
      const nextPhoto = choices[Math.floor(Math.random() * choices.length)];
      tile.classList.add('is-changing');
      window.setTimeout(() => {
        tile.src = nextPhoto;
        tile.dataset.heroImage = nextPhoto;
        tile.classList.remove('is-changing');
      }, 280);
    }, 6500);
  }
}

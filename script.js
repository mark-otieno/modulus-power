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

const heroSlideshowImage = document.querySelector('[data-hero-slideshow]');
const heroCatalogIds = [
  ...Array.from({ length: 17 }, (_, index) => `f1-${String(index + 1).padStart(2, '0')}`),
  ...Array.from({ length: 30 }, (_, index) => `f2-${String(index + 1).padStart(2, '0')}`),
  ...['02', '03', '04', '05', '06', '07', '09', '10', '11', '12', '13', '14'].map((id) => `f3-${id}`),
  ...Array.from({ length: 42 }, (_, index) => `new-${String(index + 1).padStart(2, '0')}`).filter((id) => id !== 'new-32'),
  'mix-04', 'mix-14', 'mix-18', 'mix-21'
];
const heroProductPhotos = heroCatalogIds.map((id) => `images/catalog/${id}.jpg`);
const heroServicePhotos = [
  'images/services/electrical-installation.jpg',
  'images/services/solar-installation.jpg',
  'images/services/refrigeration-air-conditioning.jpg',
  'images/services/cctv-electric-fencing.jpg',
  'images/services/electrical-sales.jpg',
  'images/installations/project-01.jpg',
  'images/installations/project-03.jpg',
  'images/installations/project-05.jpg',
  'images/installations/project-06.jpg',
  'images/installations/project-07.jpg',
  'images/installations/project-08.jpg',
  'images/installations/project-10.jpg',
  'images/installations/project-13.jpg',
  'images/installations/project-15.jpg',
  'images/installations/project-16.jpg',
  'images/installations/project-17.jpg',
  'images/installations/project-19.jpg'
];
const heroSlideshowPhotos = [...heroProductPhotos, ...heroServicePhotos];

if (heroSlideshowImage) {
  const choosePhoto = (currentPhoto = '') => {
    const choices = heroSlideshowPhotos.filter((photo) => photo !== currentPhoto);
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const initialPhoto = choosePhoto();
  heroSlideshowImage.src = initialPhoto;
  heroSlideshowImage.dataset.heroImage = initialPhoto;

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => {
      const nextPhoto = choosePhoto(heroSlideshowImage.dataset.heroImage);
      heroSlideshowImage.classList.add('is-changing');
      window.setTimeout(() => {
        heroSlideshowImage.src = nextPhoto;
        heroSlideshowImage.dataset.heroImage = nextPhoto;
        heroSlideshowImage.classList.remove('is-changing');
      }, 500);
    }, 6000);
  }
}

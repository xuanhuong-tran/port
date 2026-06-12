const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Lightbox for project images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.project-hero-image img');
  if (!images.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  const img = document.createElement('img');
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  images.forEach(el => {
    el.addEventListener('click', () => {
      img.src = el.src;
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (siteNav.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Placeholder form only. Add backend handling later.');
  });
}

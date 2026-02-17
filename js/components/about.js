import { story, carousel } from '../data/about.js';

export function register(hub) {
  let current = 0;

  hub.on('page:ready', ({ page }) => {
    if (page !== 'about') return;

    const el = document.getElementById('about-content-container');
    if (!el) return;

    el.className = 'section';
    el.innerHTML = `
      <div class="container">
        <div class="about-text" style="max-width: 800px; margin: 0 auto 50px;">
          <h2>${story.title}</h2>
          ${story.paragraphs.map(p => `<p>${p}</p>`).join('\n          ')}
        </div>
        <div class="carousel">
          <div class="carousel-track">
            ${carousel.slides.map((slide, i) => `
              <div class="carousel-slide${i === 0 ? ' active' : ''}">
                <img src="${slide.src}" alt="${slide.alt}">
              </div>
            `).join('')}
          </div>
          <button class="carousel-btn carousel-btn-prev" aria-label="Previous slide">&#10094;</button>
          <button class="carousel-btn carousel-btn-next" aria-label="Next slide">&#10095;</button>
          <div class="carousel-dots">
            ${carousel.slides.map((_, i) => `
              <button class="carousel-dot${i === 0 ? ' active' : ''}" aria-label="Go to slide ${i + 1}"></button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Wire up carousel controls through the hub
    el.querySelector('.carousel-btn-prev').addEventListener('click', () => {
      hub.emit('carousel:goto', current - 1);
    });
    el.querySelector('.carousel-btn-next').addEventListener('click', () => {
      hub.emit('carousel:goto', current + 1);
    });
    el.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.addEventListener('click', () => {
        hub.emit('carousel:goto', i);
      });
    });
  });

  hub.on('carousel:goto', (index) => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    if (!slides.length) return;

    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = ((index % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  });
}

import { hero } from '../data/home.js';
import { aboutHero } from '../data/about.js';

export function register(hub) {
  hub.on('page:ready', ({ page }) => {
    const el = document.getElementById('hero-container');
    if (!el) return;

    if (page === 'home') {
      el.className = 'hero';
      el.innerHTML = `
        <div class="hero-content">
          <h1>${hero.title}</h1>
          <p>${hero.subtitle}</p>
          <div>
            ${hero.ctas.map(cta => `<a href="${cta.href}" class="${cta.className}">${cta.text}</a>`).join('\n            ')}
          </div>
        </div>
      `;
    } else if (page === 'about') {
      el.className = 'about-hero';
      el.innerHTML = `
        <div class="hero-content">
          <h1>${aboutHero.title}</h1>
          <p>${aboutHero.subtitle}</p>
        </div>
      `;
    }
  });
}

import { benefits } from '../data/home.js';

export function register(hub) {
  hub.on('page:ready', () => {
    const el = document.getElementById('benefits-container');
    if (!el) return;

    el.className = 'section';
    el.innerHTML = `
      <div class="container">
        <h2>${benefits.title}</h2>
        <p class="section-subtitle">${benefits.subtitle}</p>
        <div class="benefits-grid">
          ${benefits.cards.map(card => `
            <div class="benefit-card">
              <div class="benefit-icon">${card.icon}</div>
              <h3>${card.title}</h3>
              <p>${card.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
}

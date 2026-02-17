import { nav } from '../data/nav.js';

export function register(hub) {
  hub.on('page:ready', ({ page }) => {
    const el = document.getElementById('nav-container');
    if (!el) return;

    el.className = 'site-nav';
    el.innerHTML = `
      <div class="container nav-container">
        <a href="${nav.logo.href}" class="nav-logo">${nav.logo.text}</a>
        <ul class="nav-links">
          ${nav.links.map(link => `
            <li><a href="${link.href}" class="${link.page === page ? 'active' : ''}">${link.text}</a></li>
          `).join('')}
        </ul>
      </div>
    `;
  });
}

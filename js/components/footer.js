import { footer } from '../data/footer.js';

export function register(hub) {
  hub.on('page:ready', () => {
    const el = document.getElementById('footer-container');
    if (!el) return;

    el.innerHTML = `
      <div class="container">
        <p style="font-size: 1.1rem; margin-bottom: 10px;"><strong>${footer.title}</strong></p>
        <p>${footer.tagline}</p>
      </div>
    `;
  });
}

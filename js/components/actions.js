import { actions } from '../data/home.js';

function renderFooter(footer) {
  if (footer.type === 'text') {
    return `<p>${footer.content}</p>`;
  }
  if (footer.type === 'link') {
    return `<a href="${footer.href}">${footer.text}</a>`;
  }
  if (footer.type === 'share') {
    return `<button class="cta-button share-btn">Copy Link</button>`;
  }
  return '';
}

export function register(hub) {
  hub.on('page:ready', () => {
    const el = document.getElementById('actions-container');
    if (!el) return;

    el.className = 'section action-section';
    el.id = 'take-action';
    el.innerHTML = `
      <div class="container">
        <h2>${actions.title}</h2>
        <p class="section-subtitle">${actions.subtitle}</p>
        <div class="action-cards">
          ${actions.cards.map(card => `
            <div class="action-card">
              <div class="action-number">${card.number}</div>
              <h3>${card.title}</h3>
              ${card.text ? `<p>${card.text}</p>` : ''}
              <div class="card-footer">
                ${renderFooter(card.footer)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Set up share button interactivity
    const btn = el.querySelector('.share-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        hub.emit('share:copy');
      });
    }
  });

  hub.on('share:copy', () => {
    const textarea = document.createElement('textarea');
    textarea.value = window.location.href;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    hub.emit('share:copied');
  });

  hub.on('share:copied', () => {
    const btn = document.querySelector('.share-btn');
    if (!btn) return;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy Link'; }, 2000);
  });
}

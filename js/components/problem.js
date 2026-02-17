import { problem } from '../data/home.js';

function renderSide(side, className) {
  return `
    <div class="comparison-item ${className}">
      <h3>${side.heading}</h3>
      <div class="visual-mockup ${className}-design">
        <img src="${side.image.src}" alt="${side.image.alt}">
      </div>
      <ul style="text-align: left; margin-top: 20px; line-height: 2;">
        ${side.points.map(p => `<li>${p}</li>`).join('\n        ')}
      </ul>
    </div>
  `;
}

export function register(hub) {
  hub.on('page:ready', () => {
    const el = document.getElementById('problem-container');
    if (!el) return;

    el.className = 'section problem-section';
    el.id = 'why';
    el.innerHTML = `
      <div class="container">
        <h2>${problem.title}</h2>
        <div class="comparison">
          ${renderSide(problem.bad, 'bad')}
          ${renderSide(problem.good, 'good')}
        </div>
      </div>
    `;
  });
}

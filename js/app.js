import { EventHub } from './event-hub.js';
import { register as registerNav } from './components/nav.js';
import { register as registerHero } from './components/hero.js';
import { register as registerProblem } from './components/problem.js';
import { register as registerBenefits } from './components/benefits.js';
import { register as registerActions } from './components/actions.js';
import { register as registerAbout } from './components/about.js';
import { register as registerFooter } from './components/footer.js';

const hub = new EventHub();

registerNav(hub);
registerHero(hub);
registerProblem(hub);
registerBenefits(hub);
registerActions(hub);
registerAbout(hub);
registerFooter(hub);

const page = document.body.dataset.page || 'home';
hub.emit('page:ready', { page });

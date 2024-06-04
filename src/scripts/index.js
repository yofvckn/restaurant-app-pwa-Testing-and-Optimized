import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './hamburger';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const skipLinkElem = document.querySelector('.skip-link');
skipLinkElem.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#main').focus();
});

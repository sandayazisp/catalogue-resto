/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import 'regenerator-runtime'; /* for async await transpile */
import './component/skip-content';
import './component/app-bar';
import './component/content-template';
import './component/content-footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

document.querySelector('main').setAttribute('id', 'mainContent');

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
  clsBtn: document.querySelector('.closebtn'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

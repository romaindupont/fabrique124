import './styles/main.scss';
//import { menu, menu1, triangle } from './js/menu.js';

const heading = document.createElement('h1')
heading.textContent = 'Romain Dupont Webpack Config'

// Append heading node to the DOM
const app = document.querySelector('#root')

const disparition = () => {
  const anime = document.querySelector('.menu');
  anime.style.display = 'none';
  const fenetreDisparition = document.querySelector('.disparition');
  //fenetreDisparition.style.transform = "translate(0%, -100%)";
  fenetreDisparition.style.display = 'none';
  const titreApparition = document.querySelector('.Titre');
  titreApparition.style.display = "block";
}

const time = setTimeout(disparition,10000);

const OpenCloseMenu = () => {
  const menuClick = document.querySelector('.menuB');
  menuClick.addEventListener('click', () => {
    const modal = document.querySelector('.menu-modal');
    modal.classList.toggle('menu-modal--open');
    const nav = document.querySelector('.menu-nav');
    nav.classList.toggle('menu-nav--open');
  })
}

app.append(time, OpenCloseMenu())
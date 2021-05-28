import { forEach } from 'lodash';
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
  const titreApparition = document.querySelectorAll('.Titre');
  titreApparition.forEach(element => element.style.display = "block");
}

const AddLogo = () => {
  const premPage = document.querySelector('.disparition');
  const image = document.createElement('IMG')
  image.setAttribute('src', '../src/assets/Logos/La_fabrique_simple.png');
  image.className = "lafabrique-logo";
  premPage.append(image);
}
const time2 = setTimeout(AddLogo,3000)
const time = setTimeout(disparition,8000);

const OpenCloseMenu = () => {
  const menuClick = document.querySelector('.menuB');
  menuClick.addEventListener('click', () => {
    const modal = document.querySelector('.menu-modal');
    modal.classList.toggle('menu-modal--open');
    const nav = document.querySelector('.menu-nav');
    nav.classList.toggle('menu-nav--open');
  })
}

app.append(time, time2, OpenCloseMenu())
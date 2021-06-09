import { forEach } from 'lodash';
import './styles/main.scss';
import { menuComplet } from './js/menu.js';
import { voitureEssai } from './js/voiture';

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
  const titreApparition = document.querySelectorAll('.StartPage');
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

/* const appearImage = () => {
  const link = document.querySelector('.menu-nav--link'); 
  link.addEventListener('mouseover', () => {
    const modalOpen = document.querySelector('.menu-modal--open');
    const img = document.createElement('IMG')
    img.setAttribute('src', '../src/assets/Illustrations/image.png');
    modalOpen.append(img)
  })
  link.addEventListener('mouseout', () => {
    const modalOpenImg = document.querySelector('.menu-modal--open > img');
    modalOpenImg.style.display ='none'
  })
} */
const OpenCloseMenu = () => {
  const menuClick = document.querySelector('.menuB');
  menuClick.addEventListener('click', () => {
    const menu = document.querySelector('.menuB');
    menu.classList.toggle('menuB--open');
    const modal = document.querySelector('.menu-modal');
    modal.classList.toggle('menu-modal--open');
    const nav = document.querySelector('.menu-nav');
    nav.classList.toggle('menu-nav--open');
    
  })
}



app.append(time, time2, OpenCloseMenu(),menuComplet, voitureEssai)
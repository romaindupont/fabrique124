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
  fenetreDisparition.style.transform = "translate(0%, -100%)";
  const titreApparition = document.querySelector('.bg1 > h1');
  titreApparition.style.display = "block";
}

const time = setTimeout(disparition,1000);
app.append(heading, menu, menu1(), triangle(), time)
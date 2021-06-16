import { forEach, initial } from 'lodash';
import './styles/main.scss';
import { menuComplet } from './js/menu.js';
import { voitureEssai } from './js/voiture';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const heading = document.createElement('h1')
heading.textContent = 'Romain Dupont Webpack Config'

// Append heading node to the DOM
const app = document.querySelector('#root')

const disparition = () => {
  const menu = document.querySelector('.app-menu');
  menu.style.display = 'block';
  const anime = document.querySelector('.menu');
  anime.style.display = 'none';
  const fenetreDisparition = document.querySelector('.disparition');
/*   fenetreDisparition.style.transform = "translate(0%, -100%)"; */
  fenetreDisparition.style.display = 'none';
  const titreApparition = document.querySelectorAll('.StartPage');
  titreApparition.forEach(element => element.style.display = "block");
}

const AddLogo = () => {
  const premPage = document.querySelector('.disparition');
  const image = document.createElement('IMG')
  /* image.setAttribute('src', '../src/assets/Logos/La_fabrique_simple.png'); */
  image.setAttribute('src', '../src/assets/Illustrations/logo_profil1.png');
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

const loader = new GLTFLoader();

loader.load( '../src/assets/d/ferrari.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const essai = () => {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  const loader = new GLTFLoader();
  /* dracoLoader.setDecoderPath( 'src/three/examples/js/libs/draco/' ); */
  THREE.DRACOLoader.setDecoderPath('./path/to/decoder/');
  const dracoLoader = new DRACOLoader()
  loader.setDRACOLoader( dracoLoader );
  /* loader.setDRACOLoader( new DRACOLoader() ); */
  loader.load('../src/assets/d/ferrari.glb', function (gltf) {

      scene.add(gltf.scene);
      gltf.animations; 
      gltf.scene;
      gltf.scenes; 
      gltf.cameras; 
      gltf.asset;


  },

  function (xhr) {
      console.log((xhr.loaded / xhr.total * 100 ) + '% loaded' );
  },

  function (error) {
      console.log( 'An error happened = ', error );
  }
);

 /*  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( loader );
  scene.add( cube );

  camera.position.z = 5;

  var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate(); */
}

app.append(time, time2, OpenCloseMenu(),menuComplet, voitureEssai, essai())
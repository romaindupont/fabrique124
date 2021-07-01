import { forEach, initial } from 'lodash';
import './styles/main.scss';
import { menuComplet } from './js/menu.js';
import { voitureEssai } from './js/voiture';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
/* import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'; */

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
/* const essai2 = () => {
  const container = document.getElementById( 'container' );
  const renderer = new THREE.WebGLRenderer( );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );
  // instantiate a loader
const loader = new OBJLoader();

// load a resource
loader.load(
	// resource URL
	'../src/assets/d/spider.glb',
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
} */

const essai = () => {
/*   const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  const container = document.getElementById( 'container' );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement ); */
  const wheels = [];
  const container = document.getElementById( 'container' );
  const renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( render );
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.85;
  container.appendChild( renderer.domElement );

  /* window.addEventListener( 'resize', onWindowResize ); */
  const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.set( -3.25, 8.4, 5.5 );
  const controls = new OrbitControls( camera, container );
  controls.target.set( 0, 0.5, 0 );
  controls.update();

  const pmremGenerator = new THREE.PMREMGenerator( renderer );

  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xeeeeee );
  scene.environment = pmremGenerator.fromScene( new RoomEnvironment() ).texture;
  /* scene.fog = new THREE.Fog( 0xeeeeee, 10, 100 );  */

  const grid = new THREE.GridHelper( 10, 0, 0xeeeeee, 0xeeeeee );
  grid.material.opacity = 0.1;
  grid.material.depthWrite = true;
  grid.material.transparent = true;
  scene.add( grid );
    const bodyMaterial = new THREE.MeshPhysicalMaterial( {
      color: 0x14571D, metalness: 0.6, roughness: 0.4, clearcoat: 0.05, clearcoatRoughness: 0.05
    } );
    const detailsMaterial = new THREE.MeshStandardMaterial( {
      color: 0xffffff, metalness: 1.0, roughness: 0.5
    } );

    const glassMaterial = new THREE.MeshPhysicalMaterial( {
      color: 0xffffff, metalness: 0, roughness: 0.1, transmission: 0.9, transparent: true
    } );

    const bodyColorInput = document.getElementById( 'body-color' );
    bodyColorInput.addEventListener( 'input', function () {

      bodyMaterial.color.set( this.value );

    } );

    const detailsColorInput = document.getElementById( 'details-color' );
    detailsColorInput.addEventListener( 'input', function () {

      detailsMaterial.color.set( this.value );

    } );

    const glassColorInput = document.getElementById( 'glass-color' );
    glassColorInput.addEventListener( 'input', function () {

      glassMaterial.color.set( this.value );

    } );

  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  /* dracoLoader.setDecoderPath( 'src/three/examples/js/libs/draco/' ); */
  dracoLoader.setDecoderPath('../src/assets/gltf/');
  /* const dracoLoader = new DRACOLoader() */
  /* loader.setDRACOLoader( dracoLoader ); */
  loader.setDRACOLoader( dracoLoader );
  loader.load('../src/assets/d/124_spider_1970.glb', function (gltf) {
    const carModel = gltf.scene.children[2];
    console.log(carModel)
     carModel.getObjectByName( 'Fiat70_Spider_body' ).material = bodyMaterial;
     /* carModel.getObjectByName( 'Fiat70_Spider_body1' ).material = bodyMaterial; */
      carModel.getObjectByName( 'Fiat70_Spider_body2' ).material = bodyMaterial;
     carModel.getObjectByName( 'Fiat70_Spider_body3' ).material = bodyMaterial;
     carModel.getObjectByName( 'Fiat70_Spider_body4' ).material = bodyMaterial;
     carModel.getObjectByName( 'Fiat70_Spider_body5' ).material = bodyMaterial;
     carModel.getObjectByName( 'Fiat70_Spider_body6' ).material = bodyMaterial;
    
     carModel.getObjectByName( 'Fiat70_Spider_body7' ).material = bodyMaterial;
      /*carModel.getObjectByName( 'Fiat70_Spider_body8' ).material = bodyMaterial; */

    /* carModel.getObjectByName( 'tyre' ).material = detailsMaterial; */
/*     carModel.getObjectByName( 'rim_fr' ).material = detailsMaterial;
    carModel.getObjectByName( 'rim_rr' ).material = detailsMaterial;

    carModel.getObjectByName( 'rim_rl' ).material = detailsMaterial;
    carModel.getObjectByName( 'trim' ).material = detailsMaterial; */

   /*  carModel.getObjectByName( 'glass' ).material = glassMaterial;
    wheels.push(
      carModel.getObjectByName( 'tyre' )
/*       carModel.getObjectByName( 'wheel_fr' ),
      carModel.getObjectByName( 'wheel_rl' ),
      carModel.getObjectByName( 'wheel_rr' ) */
  /*   ); */
      /* scene.add(gltf.scene);
      /* gltf.animations;  */
     /*  gltf.scene;
      gltf.scenes; 
      gltf.cameras; 
      gltf.asset; */

      scene.add( carModel );
  },

  function (xhr) {
      console.log((xhr.loaded / xhr.total * 100 ) + '% loaded' );
  },

  function (error) {
      console.log( 'An error happened = ', error );
  }
);

const onWindowResize = () => {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}
function render() {

  const time = - performance.now() / 1000;

  for ( let i = 0; i < wheels.length; i ++ ) {

    wheels[ i ].rotation.x = time * Math.PI;

  }

  grid.position.z = - ( time ) % 5;

  renderer.render( scene, camera );
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
}

app.append(time, time2, OpenCloseMenu(),menuComplet, voitureEssai, essai())
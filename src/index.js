import './styles/main.scss';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';


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
  fenetreDisparition.style.display = 'none';
  const titreApparition = document.querySelectorAll('.StartPage');
  titreApparition.forEach(element => element.style.display = "block");
  const scrollToTop = document.querySelector('.scrollToTop');
  scrollToTop.style.display = 'inline-flex';
}
const numberChange = (number) => {
  const percent = document.querySelector('.textChange');
  percent.textContent = number;
}
const AddLogo = () => {
  const patience = document.querySelector('svg');
  patience.style.display = 'block';
  const premPage = document.querySelector('.textChange');
  premPage.style.display = 'block';
  const array = [0,25,50,75, 124]
  let delay = 60
  for (let i=0; i < 125;i++) {
    setTimeout(numberChange, delay, i);
    delay += 60
}
}
const time = setTimeout(disparition,8000);

const CloseMenuOnClick = () => {
  const link = document.querySelectorAll('.menu-nav--link'); 
  link.forEach(lien =>
    lien.addEventListener('click', (e) => {
      const menu = document.querySelector('.menuB--open');
      menu.classList.remove('menuB--open');
      const modal = document.querySelector('.menu-modal--open');
      modal.classList.remove('menu-modal--open');
      const nav = document.querySelector('.menu-nav--open');
      nav.classList.remove('menu-nav--open');
  }))
} 
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
const sendMail = () => {
  const sending = document.querySelector('.form');
  sending.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e)
  })
}

const car = () => {
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
  const camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 0.1, 1000 );
  /* camera.position.set( -3.25, 8.4, 5.5 ); */
  
  camera.position.set( -15, 5, 10 );/* camera.zoom=6.8 */
 /*  camera.maxDistance.set(1) */
  const controls = new OrbitControls( camera, container );
  controls.target.set( 0, 0.5, 0 );
  controls.minDistance = 0.8;
  controls.minZoom = 0.5;
  /* camera.position.set( 100, 60, 50 ); */
  controls.update();

  const pmremGenerator = new THREE.PMREMGenerator( renderer );

  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xeeeeee );
  scene.environment = pmremGenerator.fromScene( new RoomEnvironment() ).texture;
  /* const light = new THREE.AmbientLight( 0x000000, 0.5);
  scene.add( light ); */
  /* scene.fog = new THREE.Fog( 0xeeeeee, 10, 100 );  */
  /* scene.add(new THREE.AmbientLight( 0x666666 )) */
 /*  const light = new THREE.DirectionalLight( 0xdfebff, 1 );
				light.position.set( 50, 200, 100 );
				light.position.multiplyScalar( 1.3 );

				light.castShadow = true;

				light.shadow.mapSize.width = 1024;
				light.shadow.mapSize.height = 1024;

				const d = 300;

				light.shadow.camera.left = - d;
				light.shadow.camera.right = d;
				light.shadow.camera.top = d;
				light.shadow.camera.bottom = - d;

				light.shadow.camera.far = 1000;

				scene.add( light ); */
  const grid = new THREE.GridHelper( 10, 0, 0xeeeeee, 0xeeeeee );
  grid.material.opacity = 0.1;
  grid.material.depthWrite = true;
  grid.material.transparent = true;
  scene.add( grid );
  const texture = new THREE.TextureLoader().load('../src/assets/d/leather.png', function ( map ) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 10;
    map.repeat.set( 34, 34 );
  });
  const bodyMaterial = new THREE.MeshPhysicalMaterial( {
    color: 0x0d1c08, metalness: 0.6, roughness: 1, clearcoat: 0.6, clearcoatRoughness: 0.2
  } );
  const detailsMaterial = new THREE.MeshStandardMaterial( {
    color: 0x4C4C53, metalness: 1.0, roughness: 0.5, emissive: 0x000000
  } );
  
  const glassMaterial = new THREE.MeshPhysicalMaterial( {
    color: 0xffffff, metalness: 0, roughness: 0, transmission: 0.9, transparent: true
  } );
  
  /* const seatMaterial = new THREE.MeshBasicMaterial( { map: texture, color: 0xa97843 } ) */
  /* const seatMaterial = new THREE.MeshPhysicalMaterial( {
    color: 0xa97843, metalness: 0.01, roughness: 0.4, clearcoat: 0.5, clearcoatRoughness: 0.5
    } );/* C29565 */
    const seatMaterial = new THREE.MeshStandardMaterial( {
      color: 0xC2531E, metalness: 0, roughness: 0.9, emissive: 0x000000
    } );
    const bodyColorInput = document.getElementById( 'body-color' );
    bodyColorInput.addEventListener( 'click', function () {

      bodyMaterial.color.set('#541919' );/* B84D4D FF0000*/
      detailsMaterial.color.set( '#535353' );
      seatMaterial.color.set( '#C2531E' );/* C29565 */
      /* seatMaterial = new THREE.MeshBasicMaterial( { map: texture, color: 0xa97843 } ) */
      /* seatMaterial.map.set(texture) */
    } );

    const detailsColorInput = document.getElementById( 'details-color' );
    detailsColorInput.addEventListener( 'click', function () {

      bodyMaterial.color.set('#0d1c08' );
      detailsMaterial.color.set( '#4C4C53' );
      seatMaterial.color.set( '#C2531E' );

    } );

    const glassColorInput = document.getElementById( 'glass-color' );
    glassColorInput.addEventListener( 'input', function () {

      seatMaterial.color.set( this.value );

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
    carModel.getObjectByName( 'Fiat70_Spider_body' ).material = bodyMaterial;
     /* carModel.getObjectByName( 'Fiat70_Spider_body1' ).material = bodyMaterial; */
    carModel.getObjectByName( 'Fiat70_Spider_body2' ).material = bodyMaterial;
    carModel.getObjectByName( 'Fiat70_Spider_body3' ).material = bodyMaterial;
    carModel.getObjectByName( 'Fiat70_Spider_body4' ).material = bodyMaterial;
    carModel.getObjectByName( 'Fiat70_Spider_body5' ).material = bodyMaterial;
     /* carModel.getObjectByName( 'Fiat70_Spider_body6' ).material = bodyMaterial; */
    
    carModel.getObjectByName( 'Fiat70_Spider_body7' ).material = bodyMaterial;
    carModel.getObjectByName( 'Fiat70_Spider_pettycap' ).material = bodyMaterial;

    carModel.getObjectByName( 'Fiat70_Spider_roof' ).material = detailsMaterial;
    carModel.getObjectByName( 'Fiat70_Spider_seats1' ).material = seatMaterial;
    carModel.getObjectByName( 'Fiat70_Spider_seats2' ).material = seatMaterial;
    /* carModel.getObjectByName( 'Fiat70_Spider_interior1' ).material = seatMaterial; */
    carModel.getObjectByName( 'Fiat70_Spider_interior2' ).material = seatMaterial;
    /*carModel.getObjectByName( 'Fiat70_Spider_tyre4' ).material = detailsMaterial; */
/*     carModel.getObjectByName( 'rim_fr' ).material = detailsMaterial;
    carModel.getObjectByName( 'rim_rr' ).material = detailsMaterial;

    carModel.getObjectByName( 'rim_rl' ).material = detailsMaterial;
    carModel.getObjectByName( 'trim' ).material = detailsMaterial; */

     carModel.getObjectByName( 'Fiat70_Spider_glass' ).material = glassMaterial;
/*      wheels.push(
      carModel.getObjectByName( 'Fiat70_Spider_protector1' ),
      carModel.getObjectByName( 'Fiat70_Spider_protector2' ),
      carModel.getObjectByName( 'Fiat70_Spider_protector3' ),
      carModel.getObjectByName( 'Fiat70_Spider_protector4' )
     ); */

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

  grid.position.x = - ( time ) % 5;

  renderer.render( scene, camera );
}
}

app.append(time, AddLogo(), OpenCloseMenu(),CloseMenuOnClick() ,sendMail(), car())
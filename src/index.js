import './styles/main.scss';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
/* import { cookieGoogle } from './js/cookie.js'; */

const app = document.querySelector('#root');

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
  const cookieBanner = document.querySelector('.cookieBanner');
  cookieBanner.style.display = 'block';
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
  let delay = 60;
  for (let i=0; i < 125;i++) {
    setTimeout(numberChange, delay, i);
    delay += 60;
  }
}
const time = setTimeout(disparition, 8000);

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

const AcceptCookiePopup = () => {
  const addButton = document.querySelector('.cookieBanner-button--add');
  addButton.addEventListener('click', () => {
    const cookieBanner = document.querySelector('.cookieBanner');
    cookieBanner.style.display = 'none';
  })
}
const RefuseCookiePopup = () => {
  const RefuseButton = document.querySelector('.cookieBanner-button--close');
  RefuseButton.addEventListener('click', () => {
    const cookieBanner = document.querySelector('.cookieBanner');
    cookieBanner.style.display = 'none';
  })
}
const sendMail = () => {
  const sending = document.querySelector('.form');
  sending.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3slf6uv', 'template_129bneo', e.target, 'user_w101tU28ZhbwEv5HUCLDL')
      .then((result) => {
        const messageSend = document.getElementById('reponse');
        messageSend.style.display='block';
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }) 
}

const car = () => {
  const container = document.getElementById('container');
  const renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(render);

  renderer.outputEncoding = THREE.RGBDEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.85;
  container.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(30, 5, 20);

  const controls = new OrbitControls(camera, container);
  /* controls.addEventListener( 'change', animate ); */
  controls.target.set(0, 0.5, 0);
  controls.minDistance = 0.8;
  controls.minZoom = 0.5;
  /* controls.update(); */

  const pmremGenerator = new THREE.PMREMGenerator(renderer);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xeeeeee);
  scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture;
 
  const grid = new THREE.GridHelper(10, 0, 0xeeeeee, 0xeeeeee);
  grid.material.opacity = 0.1;
  grid.material.depthWrite = true;
  grid.material.transparent = true;
  scene.add(grid);
  const texture = new THREE.TextureLoader().load('../src/assets/d/leather.png', function (map) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 10;
    map.repeat.set(34, 34);
  });
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xd31426, metalness: 0.6, roughness: 1, clearcoat: 0.6, clearcoatRoughness: 0.2
  });
  const detailsMaterial = new THREE.MeshStandardMaterial({
    color: 0x4C4C53, metalness: 1.0, roughness: 0.5, emissive: 0x000000
  });
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: 0, roughness: 0, transmission: 0.9, transparent: true
  });
  const seatMaterial = new THREE.MeshStandardMaterial({
    color: 0xC2531E, metalness: 0, roughness: 0.9, emissive: 0x000000
  });

  const parisCarInput = document.getElementById('parisCar');
  parisCarInput.addEventListener('click', function () {
    bodyMaterial.color.set('#d31426');
    detailsMaterial.color.set('#535353');
    seatMaterial.color.set('#141313');
  });

  const dublinCarInput = document.getElementById('dublinCar');
  dublinCarInput.addEventListener('click', function () {
    bodyMaterial.color.set('#0d1c08');
    detailsMaterial.color.set('#0d1c08');
    seatMaterial.color.set('#C2531E');
  });

  const osloCarInput = document.getElementById('osloCar');
  osloCarInput.addEventListener('click', function () {
    bodyMaterial.color.set('#021250');
    detailsMaterial.color.set('#021250');
    seatMaterial.color.set('#C2531E');
  });

  const casablancaCarInput = document.getElementById('casablancaCar');
  casablancaCarInput.addEventListener('click', function () {
    bodyMaterial.color.set('#fff');
    detailsMaterial.color.set('#4C4C53');
    seatMaterial.color.set('#C2531E');
  });

  const milanCarInput = document.getElementById('milanCar');
  milanCarInput.addEventListener('click', function () {
    bodyMaterial.color.set('#d31426');
    detailsMaterial.color.set('#535353');
    seatMaterial.color.set('#C2531E');
  });

  const moscouCarInput = document.getElementById('moscouCar');
  moscouCarInput.addEventListener('click', function () {
    bodyMaterial.color.set('#fff');
    detailsMaterial.color.set('#fff');
    seatMaterial.color.set('#d31426');
  });

  const lisbonneCarInput = document.getElementById('lisbonneCar');
  lisbonneCarInput.addEventListener('click', function () {
    bodyMaterial.color.set('#b6ab00');
    detailsMaterial.color.set('#b6ab00');
    seatMaterial.color.set('#C2531E');
  });

  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('../src/assets/gltf/');
  loader.setDRACOLoader(dracoLoader);
  loader.load('../src/assets/d/124_spider_1970.glb', function (gltf) {
    const carModel = gltf.scene.children[2];
    carModel.getObjectByName('Fiat70_Spider_body').material = bodyMaterial;
    carModel.getObjectByName('Fiat70_Spider_body2').material = bodyMaterial;
    carModel.getObjectByName('Fiat70_Spider_body3').material = bodyMaterial;
    carModel.getObjectByName('Fiat70_Spider_body4').material = bodyMaterial;
    carModel.getObjectByName('Fiat70_Spider_body5').material = bodyMaterial;
    carModel.getObjectByName('Fiat70_Spider_body7').material = bodyMaterial;
    carModel.getObjectByName('Fiat70_Spider_pettycap').material = bodyMaterial;

    carModel.getObjectByName('Fiat70_Spider_roof').material = detailsMaterial;

    carModel.getObjectByName('Fiat70_Spider_seats1').material = seatMaterial;
    carModel.getObjectByName('Fiat70_Spider_seats2').material = seatMaterial;
    carModel.getObjectByName('Fiat70_Spider_interior2').material = seatMaterial;

    carModel.getObjectByName('Fiat70_Spider_glass').material = glassMaterial;

    scene.add(carModel);
  },

  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },

  function (error) {
    console.log('An error happened = ', error);
  }
);

  function render() {
    /* controls.update();
    requestAnimationFrame( render ); */
    renderer.render(scene, camera);
    
  }
/*   function animate() {
    controls.update();
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    
  }   */
}
app.append(time, AddLogo(), OpenCloseMenu(),CloseMenuOnClick() ,sendMail(), car(), AcceptCookiePopup(), RefuseCookiePopup()/* , cookieGoogle */)
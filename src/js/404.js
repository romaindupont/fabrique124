import '../styles/main.scss';

const app = document.querySelector('#404');

const ClickOnElectricBorne = () => {
  const borneElectrique = document.querySelector('.illustration-borne');
  borneElectrique.addEventListener('click', () => {
    /* location.assign(url); */
    /* définir un setTimeOut pour laisser le temps au svg de s'animer */
  })
}

app.append(ClickOnElectricBorne())
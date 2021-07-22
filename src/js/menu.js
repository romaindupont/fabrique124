const menu = {
  init:function() {
    menu.appearImage();
  },
  appearImage: function(){
    const link = document.querySelectorAll('.menu-nav--link'); 
    link.forEach(lien =>
      lien.addEventListener('click', (e) => {
        const menu = document.querySelector('.menuB--open');
        menu.classList.toggle('menuB');
        const modal = document.querySelector('.menu-modal--open');
        modal.classList.toggle('menu-modal');
        const nav = document.querySelector('.menu-nav--open');
        nav.classList.toggle('menu-nav');
    }))
  }
}

export const menuComplet = document.addEventListener('DOMContentLoaded', menu.init)
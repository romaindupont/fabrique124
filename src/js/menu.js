const menu = {
  init:function() {
    menu.appearImage();
    menu.cacheImage()
  },
  appearImage: function(){
    const link = document.querySelectorAll('.menu-nav--link'); 
    link.forEach(lien =>
      lien.addEventListener('mouseover', (e) => {
        const div = document.createElement('div');
        div.className='imageMove';
        div.style.position ='absolute';
        div.style.top=`${e.pageY+10}px`;
        div.style.left=`${e.pageX+150}px`;
        div.animate([
          {opacity: '0',width:'0px', height:'0px'},
          {opacity: '0.5',width:'50px', height:'70px'},
          {opacity: '1',width:'100px', height:'100px'}
        ],{
          duration: 5000,
        })
        lien.append(div);
    }))
  },
  cacheImage: function(){
    const link = document.querySelectorAll('.menu-nav--link');
    link.forEach(lien => 
      lien.addEventListener('mouseout', (e) => {
        const removeDiv = document.querySelector('.imageMove');
        removeDiv.remove()
    }))
  }
}

export const menuComplet = document.addEventListener('DOMContentLoaded', menu.init)
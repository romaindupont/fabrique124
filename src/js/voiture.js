const voiture = {
  init:function() {
    voiture.appearImage();
    voiture.cacheImage()
  },
  appearImage: function(){
    const link = document.querySelector('.bg1-container-cible'); 
    link.addEventListener('mouseenter', (e) => {
      const image = document.createElement('IMG')
      image.setAttribute('src', '../src/assets/Illustrations/moteur.png');
      image.className = 'image-moteur';
      image.style.position = 'absolute';
      image.style.top=`-250px`;
      image.style.left=`-60px`;
      link.append(image)
    })
    /* link.forEach(lien =>
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
    })) */
  },
  cacheImage: function(){
    const link = document.querySelector('.bg1-container-cible');
    link.addEventListener('mouseleave', (e) => {
      const removeDiv = document.querySelector('.image-moteur');
      removeDiv.remove()
    })
  }
}

export const voitureEssai = document.addEventListener('DOMContentLoaded', voiture.init)
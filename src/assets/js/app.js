const hamburger = document.querySelector('.hamburger')
const hamburgerModal = document.querySelector('.modal')
const catalogMb = document.querySelector('.catalog-mb')
const menu = document.querySelectorAll('.menu__item--mobile')
const menuMb = document.querySelectorAll('.menu__item--mobile__link')
const menuMbLink = document.querySelectorAll('.menu__item-link--mobile')
const arrayElem = []

for (var i = 0; i < menuMb.length; i++){
  arrayElem.push(menuMb[i]);
  console.log(arrayElem.indexOf());
  menuMb[i].addEventListener('click', function(e){
      const id = arrayElem.indexOf(e.target);
      if (menuMb[id].classList.contains('block')) {
          menuMb[id].classList.remove('block')
          menuMbLink[id].classList.remove('block')
      } else {
          menuMb[id].classList.add('block')
          menuMbLink[id].classList.add('block')
      }

      
  });
} 


hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('hamburger-active')) {
    hamburger.classList.remove('hamburger-active')
    hamburgerModal.classList.remove('flex')
    document.getElementsByTagName('body')[0].style.background="#fff";
  } else {
    hamburger.classList.add('hamburger-active')
    hamburgerModal.classList.add('flex')
    document.getElementsByTagName('body')[0].style.background="#0000006e";
  }

})

catalogMb.addEventListener('click', () => {
  if (catalogMb.classList.contains('block')) {
    catalogMb.classList.remove('block')
    menu.forEach((el) => {
      el.classList.remove("block");
    });
  } else {
    catalogMb.classList.add('block')
    menu.forEach((el) => {
      el.classList.add("block");
    });
  }
})



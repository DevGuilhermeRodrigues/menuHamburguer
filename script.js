let btnMenu = document.querySelector(".btn-menu")


btnMenu.addEventListener('click', function(){
  let menuMobile = document.querySelector('.mobile-menu');
  if(menuMobile.classList.contains('open-menu')){
    menuMobile.classList.remove('open-menu')
    document.querySelector('.icon').src = "img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add('open-menu')
    document.querySelector('.icon').src = "img/close_white_36dp.svg";
  }
})
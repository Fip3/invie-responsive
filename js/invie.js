var consulta = window.matchMedia('(max-width: 500px)');
var $burgerButton = document.getElementById('burger-button');
var $menu = document.getElementById('menu');

consulta.addListener(mediaQuery);

$burgerButton.addEventListener('touchstart', toggleMenu);

function mediaQuery(){
  if (consulta.matches) {
    $burgerButton.classList.remove('hidden');
  } else {
    $burgerButton.classList.add('hidden');
  };
}

function toggleMenu() {
  $menu.classList.toggle('active');
  $burgerButton.classList.toggle('icon-close');
}
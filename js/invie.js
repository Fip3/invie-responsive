//funcionalidad y apariencia burger menu

var consulta = window.matchMedia('(max-width: 500px)');
var $burgerButton = document.getElementById('burger-button');
var $menu = document.getElementById('menu');

mediaQuery();
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

function showMenu() {
  if (consulta.matches){
      $menu.classList.add('active');
    if (!$burgerButton.className.includes('icon-close')){
      $burgerButton.classList.toggle('icon-close')
    };
  };
}

function hideMenu() {
  if(consulta.matches){
    $menu.classList.remove('active');
    if ($burgerButton.className.includes('icon-close')){
      $burgerButton.classList.toggle('icon-close')
    };
  };
}



// carga bLazy

var bLazy = new Blazy({
  selector: 'img'
});



// hammer.js

var $body = document.body;

var gestos = new Hammer($body);

gestos.on('swipeleft', function(ev) {
  hideMenu();
});

gestos.on('swiperight', function(ev) {
  showMenu();
});
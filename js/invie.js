var $burgerButton = document.getElementById('burger-button');
var $menu = document.getElementById('menu');
$burgerButton.addEventListener('touchstart', toggleMenu);

function toggleMenu() {
  $menu.classList.toggle('active');
}
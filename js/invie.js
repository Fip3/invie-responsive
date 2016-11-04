var $burgerButton = document.getElementById('burger-button');
var $menu = document.getElementById('menu');
$burgerButton.addEventListener('touchstart', slide);

function slide() {
  $menu.classList.toggle('active');
  console.log($menu.className.includes('active'))
}
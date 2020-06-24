const menu = document.querySelector('.header__menu-cointeiner');
const linksElements = [...document.querySelectorAll('.nav__link')];
const nav = document.querySelector('.nav');

function menuOnOff() {
   document.querySelector('.nav').classList.toggle('nav--active');
   menu.classList.toggle('header__menu-cointeiner--active');
}

menu.addEventListener("click", menuOnOff);
linksElements.forEach(link => link.addEventListener('click', menuOnOff));

document.addEventListener("DOMContentLoaded", () => {
   nav.style.display = "flex";
})
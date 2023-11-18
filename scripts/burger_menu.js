const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuLinks = document.querySelector('.menu_link');

hamburgerMenu.addEventListener('click', () => {
    if (menuLinks.classList.contains('menu_link')) {
        menuLinks.classList.remove('menu_link');
        menuLinks.classList.add('burger_menu');
    } else {
        menuLinks.classList.remove('burger_menu');
        menuLinks.classList.add('menu_link');
    }
});

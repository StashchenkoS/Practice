document.addEventListener('DOMContentLoaded', function (){

    const burger_btns = document.querySelector('.burger_btns');
    const btnMobileMenuOpen = document.querySelector('.open-menu');
    const btnMobileMenuClose = document.querySelector('.close-menu');
    const menu = document.querySelector('menu');
    const logo = document.querySelector('.logo');

    btnMobileMenuOpen.addEventListener('click', function(){
        burger_btns.classList.add('active');
        menu.style.background = "#fff";
    })

    btnMobileMenuClose.addEventListener('click', function(){
        burger_btns.classList.remove('active');
        menu.style.background = "#DF803E";
    })

    



















});

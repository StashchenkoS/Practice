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

    class Popup{
        constructor(selectorBtn, selectorPopup){
            this.btn = document.querySelector(`#${selectorBtn}`)
            this.overlay = document.querySelector(`#${selectorPopup}`)

            this.btn.addEventListener('click', ()=>{
                this.showPopup();
            })

            this.overlay.addEventListener('click',(e)=>{
                if (e.target.className == "overlay active")
                this.hidePopup();
            })
        }
        showPopup(){
            this.overlay.classList.add('active');
        }

        hidePopup(){
            this.overlay.classList.remove('active');

        }
    }

    const consultationPopup = new Popup('btn-consultation', 'consultation');
    const requestPopup = new Popup('btn-request', 'request');



















});

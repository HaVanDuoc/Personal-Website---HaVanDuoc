// "use strict";

window.onload = (

    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $(".hvd__navbar").addClass("sticky");
        } else {
            $(".hvd__navbar").removeClass("sticky");
        }
    }),


    menuToggle = () => {
        const menu = document.getElementById('menu');
        const menuBtn = document.getElementById('menu-btn');

        menuBtn.addEventListener('mouseenter', () => {
            menu.classList.add('active');
            menuBtn.classList.add('active');
        })
        window.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
        })
    }
);



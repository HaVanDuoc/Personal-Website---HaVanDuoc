"use strict";

window.onload = () => { menuToggle(); }

window.onscroll = () => { scrollFunction(); }

// Function Toggle For Button Menu
const menuToggle = () => {
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
};

// Function Scroll For Sticky Navbar
const scrollFunction = () => {

    var navbar = document.querySelector(".hvd__navbar");
    var sticky = navbar.offsetHeight;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};



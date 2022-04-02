"use strict";

window.onload = () => {
    scrollFunction(); // Sau khi Load Page sẽ hiện luôn Navbar
    menuToggle();
    activeItemsMenu();
}

window.onscroll = () => { var scrollY = this.scrollY; scrollFunction(); }

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
}

// Function Scroll For Sticky Navbar
const scrollFunction = () => {

    const navbar = document.querySelector(".hvd__navbar");
    const navbarHeight = navbar.offsetHeight;

    if (scrollY > navbarHeight) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

const activeItemsMenu = () => {
    let menu = document.getElementById('menu');
    let items = menu.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", () => {
            let currentItem = menu.getElementsByClassName("active");
            console.log(currentItem);
            currentItem[0].className = currentItem[0].className.replace(" active", "");
            items[i].className += " active";
        });
    }
}



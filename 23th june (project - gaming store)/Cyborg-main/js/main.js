// Page loading animation
const loaderContainer = document.querySelector('#js-preloader');
window.addEventListener('load', () => {
    loaderContainer.classList.add("loaded");
});

// start header
let header = document.querySelector("header");
// scroll
document.onscroll = () => {
    if (window.scrollY >= 400) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
};

// menu
let buttonMenu = document.querySelector("header .menu");
let mainMenu = document.querySelector("header .linkes ul");

buttonMenu.addEventListener("click", (e) => {
    mainMenu.classList.toggle("open");
    buttonMenu.classList.toggle("cloce");
});

// linkes
let linkes = document.querySelectorAll("header .linkes ul li a");
linkes.forEach((li) => {
    if (li.href === document.location.href) {
        li.classList.add("active");
    } else {
        li.classList.remove("active");
    }
});

// end header

// start swiper
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        765: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    loop: true,
    // Navigation arrows 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
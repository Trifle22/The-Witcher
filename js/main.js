var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
        }
    }
});

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.header');


menuBtn.addEventListener('click', function() {
    menu.classList.toggle('header-active');
    menuBtn.classList.toggle('menu-button-active');
})
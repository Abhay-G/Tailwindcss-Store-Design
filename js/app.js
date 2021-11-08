$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider_dots',
        fade: true,
    });
});

const triggers = document.querySelectorAll('.menu_trigger');
for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('is_open');
    });
}

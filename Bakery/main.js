$(function () {
    $('.hamburger-menu').on('click', function (){
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });

    AOS.init({
        easing:'case',
        duration: 1000,
    });
});
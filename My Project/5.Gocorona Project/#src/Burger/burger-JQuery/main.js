$(document).ready(function() {
    $('.menu__icon').click(function(event) {
        $('.menu__icon,.header__menu').toggleClass('active');
        $('body').toggleclass('lock');
    });
});
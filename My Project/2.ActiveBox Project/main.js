$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleclass('lock');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    function hasTouchDevice() {
      return !!('ontouchstart' in window || navigator.maxTouchPoints);
    }
    if (!hasTouchDevice()) {
      const toUp = document.querySelector('.to-up');
      toUp.onmouseenter = function(){
        this.classList.add('hover');
      }
      toUp.onmouseleave = function() {
        this.classList.remove('hover');
      }
    }
  });
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleclass('lock');
    });
});


window.onload = function(){
  document.body.scrollTop = 0;
}

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

  if (window.location.hash) {
    setTimeout(function(){
      window.scrollTo(0, 0);
    }, 1);
  }



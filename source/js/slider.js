'use strict';

(function () {
  var slider = document.querySelector('.photos');
  var sliderItems = slider.querySelector('.photos__carousel');
  var cursorLeft = document.querySelector('.photos__arrow--left');
  var cursorRight = document.querySelector('.photos__arrow--right');

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 7,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  var onLeftClick = function () {
    swiper.slidePrev();
  };

  var onRightClick = function () {
    swiper.slideNext();
  };

  cursorLeft.addEventListener('click', onLeftClick);
  cursorRight.addEventListener('click', onRightClick);

})();

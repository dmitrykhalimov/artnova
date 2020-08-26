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
      dynamicBullets: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      500: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 5,
      },

      1024: {
        slidesPerView: 7,
      },

      1368: {
        slidesPerView: 9,
      },
      1600: {
        slidesPerView: 10,
      },
      1700: {
        slidesPerView: 11,
      }
    },
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

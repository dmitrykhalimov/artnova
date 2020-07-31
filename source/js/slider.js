'use strict';

(function () {
  var slider = document.querySelector('.photos');
  var sliderItems = slider.querySelector('.photos__carousel');
  var cursorLeft = document.querySelector('.photos__arrow--left');
  var cursorRight = document.querySelector('.photos__arrow--right');

  slide(slider, sliderItems, cursorLeft, cursorRight);

  var slide = function (wrapper, items, prev, next) {

  };

  var onLeftClick = function () {
    alert('Нажат левый скролл');
  };

  var onRightClick = function () {
    alert('Нажат правый кролл');
  };

  cursorLeft.addEventListener('click', onLeftClick);
  cursorRight.addEventListener('click', onRightClick);

})();

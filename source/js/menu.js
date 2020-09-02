'use strict';
var navMain = document.querySelector('.main-nav');

var openedClass = 'main-nav--opened';
var closedClass = 'main-nav--closed';

var onMenuButtonClick = function () {
  if (navMain.classList.contains(closedClass)) {
    navMain.classList.remove(closedClass);
    navMain.classList.add(openedClass);
  } else {
    navMain.classList.add(closedClass);
    navMain.classList.remove(openedClass);
  }
};

var menuButton = document.querySelector('.main-nav__button');

menuButton.addEventListener('click', onMenuButtonClick);

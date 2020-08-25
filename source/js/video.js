'use strict';

var TABLET_BREAKPOINT = 768;
var SHOW_MORE_PER_CLICK = 2;
var videos = document.querySelectorAll('iframe');

var currentShown = null;
var VIDEO_QUANTITY = videos.length - 1;
var VIDEO_MOBILE_DEFAULT = 2;

var isDesktop = true;
var isMobile = true;

var showMoreButton = document.querySelector('.video__show-more');

var hideVideos = function () {
  videos.forEach((video, index) => {
    if (index > 1) {
      video.style.display = 'none';
    }
  });
  showMoreButton.style.display = 'block';
};

var showVideos = function () {
  videos.forEach((video) => {
    video.style.display = 'inline-block';
  });
};

console.log(window.innerWidth);
if (window.innerWidth > TABLET_BREAKPOINT) {
  isDesktop = true;
  isMobile = false;
  currentShown = videos.length;
} else {
  isDesktop = false;
  isMobile = true;
  currentShown = VIDEO_MOBILE_DEFAULT;
  hideVideos();
}

var onChangeSize = function () {
  if (window.innerWidth < TABLET_BREAKPOINT && !isMobile) {
    hideVideos();
    isMobile = true;
    isDesktop = false;
    currentShown = VIDEO_MOBILE_DEFAULT;
  } else if (window.innerWidth >= TABLET_BREAKPOINT && !isDesktop){
    showVideos();
    isDesktop = true;
    isMobile = false;
    currentShown = videos.length;
  }
};

window.addEventListener('resize', onChangeSize);


var showMoreButton = document.querySelector('.video__show-more');
console.log(showMoreButton);

var onShowMoreButtonClick = function() {
  loadMoreFilms();
}

var showMoreFilms = function() {
  currentShown++;
  videos[currentShown].style.display = 'inline-block';
}

var loadMoreFilms = function() {
  if (currentShown <= VIDEO_QUANTITY - 2) {
    showMoreFilms();
    showMoreFilms();
  } else if (currentShown === VIDEO_QUANTITY - 1) {
    showMoreFilms();
  }
  console.log(currentShown);
  console.log(VIDEO_QUANTITY);

  if (currentShown === VIDEO_QUANTITY) {
    showMoreButton.style.display = 'none';
  }
}

showMoreButton.addEventListener('click', onShowMoreButtonClick);

/* eslint-disable no-undef */
'use strict';

(function () {
  var swiperImprove;

  var isDesktop = true;
  var isMobile = true;

  var initalizeImproveSwiper = function () {
    swiperImprove = new Swiper('.improve', {
      direction: 'horizontal',
      wrapperClass: 'improve__list',
      slideClass: 'improve__item',
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  };

  var destroyImproveSwiper = function () {
    swiperImprove.destroy(false, true);
  };

  if (window.innerWidth > 767) {
    isDesktop = true;
    isMobile = false;
  } else {
    isDesktop = false;
    isMobile = true;
    initalizeImproveSwiper();
  }

  function swiperMode() {
    var currentWidth = window.innerWidth;
    if (currentWidth > 767 && !isDesktop) {
      isDesktop = true;
      isMobile = false;
      destroyImproveSwiper();
    } else if (currentWidth <= 767 && !isMobile) {
      isMobile = true;
      isDesktop = false;
      initalizeImproveSwiper();
    }
  }

  window.addEventListener('resize', function () {
    swiperMode();
  });

})();

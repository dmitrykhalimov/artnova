/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable strict */
ymaps.ready(function () {
  // eslint-disable-next-line one-var
  var myMap = new ymaps.Map('page-contacts__map-block', {
          center: [59.878173, 30.263119],
          zoom: 16,
          controls: ['zoomControl', 'searchControl', 'typeSelector']
      }, {
          searchControlProvider: 'yandex#search'
      }),

      /* Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ), */

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Вокальная студия Арт-Нова',
      }, {
          iconLayout: 'default#image',
          iconImageHref: '../img/map-pin.svg',
          iconImageSize: [48, 61],
          iconImageOffset: [-22, -65]
      });

  myMap.geoObjects.add(myPlacemark);
});

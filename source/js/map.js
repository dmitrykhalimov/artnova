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
      myPlacemark = new ymaps.Placemark(myMap.getCenter(),
       {
        balloonContentBody: [
            '<address>',
            '<strong>Вокальная студия Арт Нова</strong>',
            '<br/>',
            'Адрес: Санкт-Петербург, пр. Стачек, д.72, ауд. 258-259',
            '<br/>'
        ].join('')
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin.svg',
      iconImageSize: [48, 61],
      iconImageOffset: [-22, -65]
    });

  myMap.geoObjects.add(myPlacemark);
});

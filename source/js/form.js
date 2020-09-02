/* eslint-disable camelcase */
/* eslint-disable no-undef */
'use strict';

var SUCCESS_TEXT = 'Спасибо, мы свяжемся с Вами в ближайшее время!';
var ERROR_TEXT = 'Произошла непредвиденная ошибка!';

// eslint-disable-next-line space-before-function-paren
$(function() {
  $('#phone').mask('+7(999) 999-99-99');
});


$(document).on('submit', 'form', function (evt) {
  evt.preventDefault();
  var user_name = $('#name').val();
  var user_phone = $('#phone').val();
  var dataString = 'user_name=' + user_name + '&user_phone=' + user_phone;
  $.ajax({
    type: 'POST',
    url: 'mail.php',
    data: dataString,
    success: function () {
      changeForm(SUCCESS_TEXT);
    },
    error: function () {
      changeForm(ERROR_TEXT);
    }
  });
});

var changeForm = function (text) {
  var consultSection = document.querySelector('.consult');
  var heading = consultSection.querySelector('.consult__heading');
  var form = document.querySelector('.consult__form');

  form.remove();

  consultSection.classList.add('consult--submitted');

  heading.textContent = text;
};

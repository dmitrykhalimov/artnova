/* eslint-disable camelcase */
/* eslint-disable no-undef */
'use strict';

var SUCCESS_TEXT = 'Спасибо, мы свяжемся с Вами в ближайшее время!';
var ERROR_TEXT = 'Произошла непредвиденная ошибка!';

// eslint-disable-next-line space-before-function-paren
$(function() {
  $('#phone').mask('+7(999) 999-99-99');
});

// Вешаем событие на кнопку
var form = document.querySelector('.consult__form');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var user_name = $('#name').val();
  var user_phone = $('#phone').val();
  var dataString = 'user_name=' + user_name + '&user_phone=' + user_phone + '&user_key=' + user_name;

  sendToServer(dataString);
});

// Отправка на сервер
var sendToServer = function (dataString) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'mail.php');

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  blockForm();

  xhr.send(dataString);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      changeForm(ERROR_TEXT);
    } else {
      changeForm(SUCCESS_TEXT);
    }
  };

  xhr.onerror = function () {
    changeForm(ERROR_TEXT);
  };
};

var blockForm = function () {
  var inputs = form.querySelectorAll('input');
  var button = form.querySelector('#submit');
  inputs.forEach(function (input) {
    input.disabled = true;
  });
  button.disabled = true;

  var heading = document.querySelector('.consult__heading');
  heading.textContent = 'Идёт отправка...';
};

var changeForm = function (text) {
  var consultSection = document.querySelector('.consult');
  var heading = consultSection.querySelector('.consult__heading');

  form.remove();

  consultSection.classList.add('consult--submitted');

  heading.textContent = text;
};

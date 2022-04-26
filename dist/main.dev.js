"use strict";

//pulsante
var navSlide = function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-links");
  var nalinks = document.querySelector('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
  });
};

navSlide(); //fine pulsante
// Get the offset position of the navbar
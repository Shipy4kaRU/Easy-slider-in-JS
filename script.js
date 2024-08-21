"use strict";

const allSlides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

allSlides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
  slide.style.overflow = "visible";
});

let currentSlide = 0;

const getSlide = function (slide) {
  allSlides.forEach(
    (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
  );
};

btnRight.addEventListener("click", function () {
  if (currentSlide === allSlides.length - 1) currentSlide = 0;
  else currentSlide++;
  getSlide(currentSlide);
});
btnLeft.addEventListener("click", function () {
  if (currentSlide === 0) currentSlide = allSlides.length - 1;
  else currentSlide--;
  getSlide(currentSlide);
});

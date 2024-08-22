"use strict";

const allSlides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let currentSlide = 0;

const getSlide = function (slide) {
  allSlides.forEach(
    (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
  );
};

getSlide(0);

const nextSlide = function () {
  if (currentSlide === allSlides.length - 1) currentSlide = 0;
  else currentSlide++;
  getSlide(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) currentSlide = allSlides.length - 1;
  else currentSlide--;
  getSlide(currentSlide);
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  else if (e.key === "ArrowLeft") previousSlide();
});

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

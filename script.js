"use strict";

const allSlides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;

const getSlide = function (slide) {
  allSlides.forEach(
    (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
  );
};

getSlide(0);

allSlides.forEach((_, index) => {
  const dots = `<button class= 'dots__dot' data-slide='${index}'></button>`;
  dotsContainer.insertAdjacentHTML("beforeend", dots);
});

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide='${slide}']`)
    .classList.add("dots__dot--active");
};

activateDot(0);

dotsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("dots__dot")) return;
  getSlide(e.target.dataset.slide);
  activateDot(e.target.dataset.slide);
});

const nextSlide = function () {
  if (currentSlide === allSlides.length - 1) currentSlide = 0;
  else currentSlide++;
  getSlide(currentSlide);
  activateDot(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) currentSlide = allSlides.length - 1;
  else currentSlide--;
  getSlide(currentSlide);
  activateDot(currentSlide);
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  else if (e.key === "ArrowLeft") previousSlide();
});

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

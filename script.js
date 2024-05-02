"use strict";

const prevButton = document.querySelectorAll(".prev-btn");
const nextButton = document.querySelectorAll(".next-btn");
const container = document.querySelectorAll(".box");
const randomButton = document.querySelector(".random-btn");
let currentBox = 0;
let slide = container.length;

function showSlider(index) {
  container.forEach(function (box, i) {
    if (i === index) {
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }
  });
}
prevButton.forEach(function (button) {
  button.addEventListener("click", function () {
    currentBox = (currentBox - 1 + slide) % slide;
    showSlider(currentBox);
  });
});

nextButton.forEach(function (button) {
  button.addEventListener("click", function () {
    currentBox = (currentBox + 1) % slide;
    showSlider(currentBox);
  });
});

randomButton.addEventListener("click", function () {
  currentBox = Math.floor(Math.random() * slide);
  showSlider(currentBox);
});

// function prevSlide() {
//   currentBox = (currentBox - 1 + slide) % slide;
//   showSlider(currentBox);
// }

// function nextSlide() {
//   currentBox = (currentBox + 1 + slide) % slide;
//   showSlider(currentBox);
// }

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//     const prevButton = document.querySelector(".prev-btn");
//     const nextButton = document.querySelector(".next-btn");
//     const boxes = document.querySelectorAll(".box");
//     let currentIndex = 0;

//     function showBox(index) {
//       boxes.forEach((box, i) => {
//         if (i === index) {
//           box.classList.remove("hidden");
//         } else {
//           box.classList.add("hidden");
//         }
//       });
//     }

//     function prevSlide() {
//       currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
//       showBox(currentIndex);
//     }

//     function nextSlide() {
//       currentIndex = (currentIndex + 1) % boxes.length;
//       showBox(currentIndex);
//     }

//     prevButton.addEventListener("click", prevSlide);
//     nextButton.addEventListener("click", nextSlide);
//   });

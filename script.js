"use strict";

const images = [
  "img/certificate1.jpeg",
  "img/certificate2.jpeg",
  "img/certificate3.jpeg",
  "img/lpic1.png",
];

let next = document.getElementById("nextbtn");
let container = document.getElementById("certification-slider");
let img = document.getElementById("slideshow");

console.log(container.length);

let count = 0;

let swapImage = () => {
  slide.className = "fadeout";
};

next.addEventListener("click", () => {
  if (count >= images.length - 1) {
    count = 0;
  } else {
    count++;
  }
  console.log(count);

  $("#slideshow").fadeOut(2000, function () {
    img.src = images[count];
    $("#slideshow").fadeIn(2000);
  });
  // $("#slideshow").fadeOut(3, function () {
  //   img.src = images[count];
  //   // console.log(img.src);
  //   // $("#slideshow").fadeIn(3);
  // });
});

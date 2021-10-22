"use strict";

const images = [
  "img/certificate1.jpeg",
  "img/certificate2.jpeg",
  "img/certificate3.jpeg",
  "img/lpic1.png",
];

let next = document.getElementById("nextbtn");

let count = 0;

next.addEventListener("click", () => {
  if (count >= images.length) {
    count = 0;
    document.getElementById("slideshow").src = images[count];
  } else {
    count++;
    document.getElementById("slideshow").src = images[count];
    console.log(count);
  }
});

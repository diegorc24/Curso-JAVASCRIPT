"use strict";

const btn = document.querySelector("button"); 
const body = document.querySelector("body");

// btn.addEventListener("click", (event) => {
//   //console.log(event);
//   //console.log(event.clientX, event.clientY);
//   console.log(1);
// });

// btn.addEventListener("click", (event) => {
//   console.log(2);
// });

btn.addEventListener("click", (event) => {
  //document.querySelector("body").style.background = "red";
  body.style.background = "red";
});

// btn.addEventListener("mouseover", (event) => {
//   //console.log(3);
//   //document.querySelector("body").style.background = "#FFF";
//   body.style.background = "#FFF";
// });

btn.addEventListener("mouseleave", (event) => {
  //console.log(3);
  //document.querySelector("body").style.background = "#FFF";
  body.style.background = "#FFF";
});
"use strict";

const form = document.forms.namedItem("registration");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const name = form.name.value;
//   //const password = form.password.value;

//   const newDivElement = document.createElement("div");
//   newDivElement.innerText = name;

//   form.nextElementSibling.remove();
//   form.after(newDivElement);
// });

// form.addEventListener("input", (event) => {
//   event.preventDefault();

//   const name = form.name.value;
//   //const password = form.password.value;

//   const newDivElement = document.createElement("div");
//   newDivElement.innerText = name.toUpperCase();

//   form.nextElementSibling.remove();
//   form.after(newDivElement);
// });

form.addEventListener("change", (event) => {
  event.preventDefault();

  const name = form.name.value;
  //const password = form.password.value;

  const newDivElement = document.createElement("div");
  newDivElement.innerText = name.toUpperCase();

  form.nextElementSibling.remove();
  form.after(newDivElement);
});
"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  //console.log(form);
  const name = form.name.value;
  const password = form.password.value;

  console.log(name, password);
});
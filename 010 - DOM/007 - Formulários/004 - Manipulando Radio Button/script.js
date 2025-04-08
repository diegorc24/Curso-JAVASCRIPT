"use strict";

const form = document.forms.namedItem("select-radio");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const radio = form.radio;
  submit.innerHTML = radio.value;

  //console.log(radio.value);
  // radio.forEach((res) => {
  //   //console.log(res);
  //   if (res.checked) {
  //     console.log(res);
  //   }
  // });
});

form.radio.forEach((res) => {
  res.addEventListener("change", (event) => {
    const { target } = event;
    //console.log(event.target);
    // if (event.target.checked) {
    //   // console.log("checked");
    //   console.log(event.target.value);
    // }

    if (target.checked) {
      // console.log("checked");
      //console.log(target.value);
      change.innerHTML = target.value;
    }
  });
});
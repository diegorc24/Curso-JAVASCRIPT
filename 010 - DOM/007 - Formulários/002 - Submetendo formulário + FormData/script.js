"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  //console.log(form);
  const name = form.name.value;
  const password = form.password.value;

  const formData = new FormData(form);
  //console.log(formData);
  
  // formData.forEach((res) => {
  //   console.log(res);
  // });

  formData.set("name", name);
  formData.set("password", password);

  console.log(formData.has("name"));
  console.log(formData.has("password"));

  console.log(formData.get("name"));
  console.log(formData.get("password"));

  // if (formData.has("name") || formData.has("password")) {
  //   console.log(formData.get("name"));
  //   console.log(formData.get("password"));
  // }

  // if (name && password) {
  //   console.log(name, password);
  //   form.submit();
  // }

  // DELETE

  formData.delete("name");
  console.log(formData.has("name"));
  
});
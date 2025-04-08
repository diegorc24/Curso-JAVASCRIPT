"use strict";

// const home = document.querySelector(".home");
// home.addEventListener("click", () => {
//   console.log("Home");
// });

// const sobre = document.querySelector(".sobre");
// home.addEventListener("click", () => {
//   console.log("sobre");
// });

// const contato = document.querySelector(".contato");
// home.addEventListener("click", () => {
//   console.log("contato");
// });

const menu = document.querySelector("#menu");
//console.log(menu);

menu?.addEventListener("click", (event) => {
  //const { target, currentTarget} = event;
  const { target } = event;

  // console.log(target);
  // console.log(currentTarget);
  //console.log(target.getAttribute("class"));
  //console.log(target.innerText);

  const body = document.querySelector('body');
  switch (target.getAttribute("class")) {
    case "home":
      //console.log("home");
      body.style.background = "blue";
      break;

    case "sobre":
      //console.log("sobre");
      body.style.background = "red";
      break;

    case "contato":
      //console.log("contato");
      body.style.background = "#fff";
      break;

    default:
      break;
  }
});

///ou


if (menu) {
  menu.addEventListener("click", (event) => {
    //const { target, currentTarget} = event;
    const { target } = event;
  
    // console.log(target);
    // console.log(currentTarget);
    //console.log(target.getAttribute("class"));
    //console.log(target.innerText);
  
    const body = document.querySelector('body');
    switch (target.getAttribute("class")) {
      case "home":
        //console.log("home");
        body.style.background = "blue";
        break;
  
      case "sobre":
        //console.log("sobre");
        body.style.background = "red";
        break;
  
      case "contato":
        //console.log("contato");
        body.style.background = "#fff";
        break;
  
      default:
        break;
    }
  });
}

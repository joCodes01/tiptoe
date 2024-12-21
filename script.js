

let hamburgerbutton = document.querySelector(".hamburger-button");
let mobilenavigation = document.querySelector(".mobile-nav");

hamburgerbutton.onclick = () => {
  mobilenavigation.classList.toggle("hidden");
};



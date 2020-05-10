// Your code goes here
const funBus = document.querySelector(".intro img");

const navBar = document.querySelectorAll(".nav-link");

const picContainer = document.querySelector(".img-content img");

const destination = document.querySelector(".content-destination img");

let firstPic = true;

const buttons = document.querySelectorAll(".btn");

const places = [
  "Florida",
  "Hawaii",
  "Japan",
  "Denmark",
  "Korea",
  "Italy",
  "Paris",
  "Spain",
];

funBus.addEventListener("mouseenter", (e) => {
  funBus.style.position = "relative";
  funBus.style.zIndex = "2";
  funBus.style.transform = "scale(1.2)";
  funBus.style.transition = "all .9s";
});

funBus.addEventListener("mouseleave", (e) => {
  funBus.style.position = "relative";
  funBus.style.zIndex = "0";
  funBus.style.transform = "scale(1)";
});

navBar.forEach((x) =>
  x.addEventListener("mouseenter", (e) => {
    x.style.textDecoration = "underline";
    x.style.transitionProperty = "1.3s ease-in-out 0s";
    x.style.color = "red";
  })
);

navBar.forEach((x) =>
  x.addEventListener("mouseleave", (e) => {
    x.style.color = "black";
    x.style.textDecoration = "none";
  })
);

picContainer.addEventListener("dblclick", (e) => {
  if (firstPic) {
    picContainer.src = "img/adventure.jpg";
  } else {
    picContainer.src = "img/ce-travel.jpg";
  }
  firstPic = !firstPic;
});

buttons.forEach((x) =>
  x.addEventListener("click", (e) => {
    let randomPlaces = Math.floor(Math.random() * places.length);
    alert(`You are going to ${places[randomPlaces]}!`);
  })
);

destination.addEventListener("mousedown", (e) => {});

// Your code goes here
const funBus = document.querySelector(".intro img");

const navBar = document.querySelectorAll(".nav-link");

const picContainer = document.querySelector(".img-content img");

const destination = document.querySelector(".content-destination");

const destinationPara = document.querySelector(".content-destination p");

const destinationPic = document.querySelector(".content-destination img");

const funKeyDown = document.querySelector(".img-fluid");

const copyRight = document.querySelector(".footer p");

const buttons = document.querySelectorAll(".btn");

let firstPic = true;

let picChange = false;

let pageBottom = false;

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
    x.style.fontFamily = "Impact,Charcoal,sans-serif";
    x.style.transitionProperty = "1.3s ease-in-out 0s";
    x.style.color = "red";
    x.addEventListener("mouseleave", (e) => {
      x.style.color = "black";
      x.style.fontFamily = "";
      x.style.textDecoration = "none";
    });
    x.addEventListener("click", (e) => {
      e.preventDefault();
    });
  })
);

picContainer.addEventListener("dblclick", (e) => {
  if (firstPic) {
    picContainer.src = "img/adventure.jpg";
  } else {
    picContainer.src = "img/ce-travel.jpg";
  }
  firstPic = !firstPic;
  e.stopPropagation();
});

buttons.forEach((x) =>
  x.addEventListener("click", (e) => {
    let randomPlaces = Math.floor(Math.random() * places.length);
    alert(`You are going to ${places[randomPlaces]}!`);
  })
);

destination.addEventListener("mousedown", (e) => {
  destination.style.fontFamily = "Impact,Charcoal,sans-serif";
  destinationPara.textContent = "Get ready to start your grand new adventure!";
  destinationPic.src = "../img/florida.jpg";
  destinationPara.style.color = "red";

  destination.addEventListener("mouseout", (e) => {
    destination.style.fontFamily = "";
    destinationPara.style.color = "black";
    destinationPara.textContent =
      " Expedition excursion design darn excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.";
    destinationPic.src = "img/destination.jpg";
  });
});

window.addEventListener(
  "keydown",
  (keyPress) => {
    if (keyPress.keyCode == "39") {
      funKeyDown.src = "img/florida.jpg";
    } else if (keyPress.keyCode == "37") {
      funKeyDown.src = "img/fun.jpg";
    }
  },
  false
);

window.addEventListener("scroll", () => {
  const pagePixel = document.documentElement.scrollHeight - window.innerHeight;

  const tooBottom = window.scrollY;

  if (Math.ceil(tooBottom) === pagePixel && pageBottom === false) {
    // alert(`Get all signed up to travel!`);
    copyRight.textContent += "!";
    pageBottom = true;
  }
});

window.addEventListener("load", () => {
  console.log("page has loaded");
});

const newbackgroundColor = document.getElementById("use-me");
const sayHello = document.querySelector(".btnPress");
let colorChange = false;

newbackgroundColor.addEventListener("click", (e) => {
  if (colorChange == false) {
    colorChange = true;
    newbackgroundColor.style.backgroundColor = "red";
  } else {
    newbackgroundColor.style.backgroundColor = "white";
    colorChange = false;
  }
});

sayHello.addEventListener("click", (e) => {
  alert("Hello!!");
  e.stopPropagation();
});

const passwordBox = document.querySelector('input[type="password"]');

passwordBox.addEventListener("focus", (e) => {
  e.target.style.background = "blue";
});

window.addEventListener("resize", (e) => {
  console.log("resized");
});

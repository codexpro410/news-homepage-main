// Toggle nav menu when nav toggle is clicked 
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const elements = document.querySelectorAll("img,div");
const m = document.getElementById("main");
const mediaQueryMax = window.matchMedia("(max-width: 375px)");
const mediaQueryMin = window.matchMedia("(min-width: 376px)");

const updateBackground = () => {
  if (navToggle.classList.contains('clicked') && mediaQueryMax.matches) {
    navMenu.style.display = 'flex';
    m.style.backgroundColor = "#807E89";
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("my-class2");
    }
  } else if (navToggle.classList.contains('clicked') && mediaQueryMin.matches) {
    navMenu.style.display = 'flex';
    m.style.backgroundColor = "white";
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("my-class2");
    }
  } else {
    navMenu.style.display = 'none';
    m.style.backgroundColor = "white";
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("my-class2");
    }
  }
};
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('clicked');
  updateBackground();
});
mediaQueryMax.addListener(updateBackground);
mediaQueryMin.addListener(updateBackground);
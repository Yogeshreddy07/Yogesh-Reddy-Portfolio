const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
const roles = ["Software Engineer","Full Stack Developer", "Cloud Computing Specialist","IoT Enthusiast", "Data Analyst"];
const typedRole = document.querySelector(".typed-role");

let currentRole = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = roles[currentRole];
  let speed = isDeleting ? 60 : 100;

  if (isDeleting) {
    typedRole.innerHTML = currentText.substring(0, charIndex--) + '<span class="cursor">|</span>';
  } else {
    typedRole.innerHTML = currentText.substring(0, charIndex++) + '<span class="cursor">|</span>';
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), 1000); // Hold before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentRole = (currentRole + 1) % roles.length;
    setTimeout(typeEffect, 300);
    return;
  }

  setTimeout(typeEffect, speed + Math.random() * 50); // Slight speed variation
}

document.addEventListener("DOMContentLoaded", () => {
  typedRole.textContent = "";
  typeEffect();
});

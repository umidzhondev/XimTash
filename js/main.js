// * Nabvar
const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".navbar__open-icon");
const navCloseBtn = document.querySelector(".navbar__close-icon");
const navLinks = document.querySelectorAll(".nav__link");

navOpenBtn.addEventListener('click', () => {
  nav.classList.add("open");
});

navCloseBtn.addEventListener('click', () => {
  nav.classList.remove("open");
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove("open");
  });
})



const navSlide = () => {
  const nav_btn = document.querySelector(".nav_btn");
  const nav = document.querySelector(".nav-links");
  const nav1 = document.querySelector(".nav-link2");
  const navLinks = document.querySelectorAll("nav-links li");

  nav_btn.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    nav1.classList.toggle("nav-active");

    nav_btn.classList.toggle(`toggle`);
  });
};

navSlide();

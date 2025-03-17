// Responsive

const menuTrigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu");

const isMobile = () => window.innerWidth <= 750;

const isMobileMenu = () => {
  menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile());
  menu && menu.classList.toggle("hidden", isMobile());
};

isMobileMenu();

menuTrigger &&
  menuTrigger.addEventListener(
    "click",
    () => menu && menu.classList.toggle("hidden")
  );

window.addEventListener("resize", isMobileMenu);

document.querySelector("body").insertAdjacentHTML(
  "beforeend",
  `
  <footer class="footer">
      <div class="footer__inner">
        <div class="footer__content"></div>
      </div>
  </footer>
  `
);



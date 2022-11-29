// Set year
const year = document.querySelector(".year");
const currYear = new Date().getFullYear();
year.textContent = currYear;

// Mobile Navigation
const header = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Same above functinality divided in two parts
// function showMenu() {
//   header.classList.add("nav-open");
// }

// function hideMenu() {
//   header.classList.remove("nav-open");
// }

////////////////////////////////////////////////
// Smooth scroll for Page

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other elements
    if (href != "#" && href.startsWith("#")) {
      const pageSection = document.querySelector(href);
      pageSection.scrollIntoView({ behavior: "smooth" });
    }

    // Hide Nav
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////
// Sticky Header

const heroSection = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const hero = entries[0];

    if (!hero.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (hero.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(heroSection);

////////////////////////////////////////////////
// Bug Fix for some safari versions

function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();
////////////////////////////////////////////////
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

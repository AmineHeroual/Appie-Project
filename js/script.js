const btnNav = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

const heroEl = document.querySelector(".section-hero");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  heroEl.classList.toggle("hiddin-hero");
});

// /////////////////////////////////
// Smooth scrolling Animation//////
///////////////////////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
      heroEl.classList.toggle("hiddin-hero");
    }
  });
});

// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");

const observ = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observ.observe(sectionHeroEl);

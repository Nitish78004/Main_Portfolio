document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile menu
  const menuBtn = document.querySelector(".uil-bars");
  const navMenu = document.getElementById("myNavMenu");

  if (menuBtn && navMenu) {
      menuBtn.addEventListener("click", () => {
          navMenu.classList.toggle("active");
      });
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
      let currentSection = "";

      sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100;
          if (pageYOffset >= sectionTop) {
              currentSection = section.getAttribute("id");
          }
      });

      navLinks.forEach((link) => {
          link.classList.remove("active-link");
          if (link.getAttribute("href").includes(currentSection)) {
              link.classList.add("active-link");
          }
      });
  });

  // Typed.js animation
  if (typeof Typed !== "undefined") {
      new Typed(".typedText", {
          strings: [" Nitish Singh","a Blockchain Developer", "a Web3 Enthusiast"],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 1500,
          loop: true
      });
  }

  // Scroll Reveal
  if (typeof ScrollReveal !== "undefined") {
      const sr = ScrollReveal({
          distance: '60px',
          duration: 1500,
          reset: false
      });

      sr.reveal('.featured-text, .top-header', { origin: 'top' });
      sr.reveal('.featured-image, .about-info, .contact-info', { origin: 'left' });
      sr.reveal('.skills-box, .form-control, .footer-menu', { origin: 'bottom' });
      sr.reveal('.project-container, .social_icons, .footer-social-icons', { origin: 'right' });
  }
});

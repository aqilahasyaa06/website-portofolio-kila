// ================= SELECT =================
const fills = document.querySelectorAll('.skill-fill');
const reveals = document.querySelectorAll('.reveal');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// HAMBURGER
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-links");

// ================= HAMBURGER MENU =================
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// AUTO CLOSE MENU SAAT DIKLIK
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ================= SCROLL FUNCTION =================
function handleScroll() {

  // SKILL ANIMATION (sekali saja)
  fills.forEach(f => {
    const top = f.getBoundingClientRect().top;

    if (top < window.innerHeight - 50 && !f.classList.contains("show")) {
      f.style.width = f.dataset.width;
      f.classList.add("show");
    }
  });

  // REVEAL ANIMATION
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });

  // NAV ACTIVE
  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

// ================= EVENT =================
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

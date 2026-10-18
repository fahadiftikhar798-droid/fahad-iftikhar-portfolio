
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close mobile navigation
menuBtn.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Close menu with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  }
});

// Automatically show the current year
document.getElementById("year").textContent =
  new Date().getFullYear();

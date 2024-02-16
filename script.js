function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var currentYear = new Date().getFullYear();

// Update the content of the span element with id "currentYear" with the current year
document.getElementById("currentYear").textContent = currentYear;

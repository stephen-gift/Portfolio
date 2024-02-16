function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var currentYear = new Date().getFullYear();

// Update the content of the span element with id "currentYear" with the current year
document.getElementById("currentYear").textContent = currentYear;

function goToSection(section) {
  // Get the base URL of the current page
  var baseURL = window.location.protocol + "//" + window.location.host;

  // Construct the URL for the section
  var sectionURL = baseURL + "/" + section;

  // Use pushState to navigate to the section without changing the URL hash
  window.history.pushState({ path: sectionURL }, "", sectionURL);

  // Navigate to the contact section
  window.location.href = sectionURL;

  // Update the href attribute of anchor tags
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = baseURL + "/" + anchors[i].getAttribute("data-section");
  }
}

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

const texts = [
  "Stephen Gift Dada.",
  "Pixel-perfect interfaces.",
  "Bringing designs to life.",
  "Exploring web dev limits.",
];
let textIndex = 0;
let charIndex = 0;
let interval;

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    document.getElementById("typewriter").innerHTML +=
      texts[textIndex].charAt(charIndex);
    charIndex++;
  } else {
    clearInterval(interval);
    setTimeout(resetText, 1000); // Delay before resetting text
  }
}

function resetText() {
  charIndex = 0;
  document.getElementById("typewriter").innerHTML = ""; // Clear the div before typing the next text
  textIndex = (textIndex + 1) % texts.length; // Increment text index and loop back to the beginning if at the end
  interval = setInterval(typeWriter, 100); // Adjust typing speed here (in milliseconds)
}

resetText();

// Function to toggle cursor visibility
function toggleCursor() {
  let cursor = document.getElementById("cursor");
  cursor.style.visibility = cursor.style.visibility === "visible" ? "hidden" : "visible";
}

// Interval to toggle cursor visibility (adjust timing as needed)
setInterval(toggleCursor, 500); // Change cursor visibility every 500 milliseconds
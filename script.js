
// Toggle Button for dark mode
const lightDarkButton = document.getElementById('light-dark');

lightDarkButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// Get all the anchor tags inside the navigation
const navLinks = document.querySelectorAll("nav a");

// Add click event listeners to each anchor tag
navLinks.forEach((link) => {
link.addEventListener("click", smoothScroll);
});

// Smooth scroll function
function smoothScroll(event) {
event.preventDefault();

// Get the target section ID from the href attribute
const targetId = this.getAttribute("href");

// Get the target section element
const targetSection = document.querySelector(targetId);

// Scroll to the target section with smooth behavior
targetSection.scrollIntoView({ behavior: "smooth" });
}
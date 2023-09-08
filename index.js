// Get the navbar element
const navbar = document.querySelector('nav');

// Function to toggle the 'sticky' class based on scroll position
function toggleStickyNavbar() {
  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// Listen for scroll events and call toggleStickyNavbar
window.addEventListener('scroll', toggleStickyNavbar);

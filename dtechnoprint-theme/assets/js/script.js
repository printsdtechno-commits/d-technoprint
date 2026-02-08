document.addEventListener("DOMContentLoaded", function() {
  // Mobile Menu Logic
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  var menuClose = document.querySelector('.menu-close');
  var checkbox = document.getElementById('menu-toggle');

  // Function to open menu
  function openMenu() {
    if (nav) nav.classList.add('open');
    if (checkbox) checkbox.checked = true;
  }

  // Function to close menu
  function closeMenu() {
    if (nav) nav.classList.remove('open');
    if (checkbox) checkbox.checked = false;
  }

  // Toggle button (label) logic is handled by the checkbox hack usually, 
  // but we can add explicit handling if the checkbox is hidden/unreachable.
  // However, since the label is "for" the checkbox, clicking it toggles the checkbox automatically.
  // We just need to ensure the class is synced if we want to use the class-based styling as a backup.
  // Let's listen to the checkbox change instead.
  
  if (checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        if (nav) nav.classList.add('open');
      } else {
        if (nav) nav.classList.remove('open');
      }
    });
  }

  // Close button
  if (menuClose) {
    menuClose.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default if it's a label
      closeMenu();
    });
  }
  
  // Close menu when clicking a link
  var navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });
});

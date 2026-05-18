// ===== HEADER TRANSPARENCY OB SKROLANJU =====
const header = document.querySelector('header');

if (header) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      const opacity = Math.max(0.7, 1 - (scrollY - 50) / 300);
      header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    } else {
      header.style.backgroundColor = 'black';
    }
  });
}

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

if (hamburger && navbar) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  const navLinks = navbar.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navbar.classList.remove('active');
    });
  });
}
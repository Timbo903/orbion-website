
  const form = document.querySelector('form[name="contact"]');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    fetch("/", {
      method: "POST",
      body: formData
    })
    .then(() => {
      form.style.display = 'none';
      const thankYou = document.createElement('div');
      thankYou.className = 'thank-you-message';
      thankYou.innerHTML = `
        <h3>Hvala za vaše povpraševanje!</h3>
        <p>Odgovorili ti bomo v najkrajšem možnem času.</p>
      `;
      form.parentNode.appendChild(thankYou);
    })
    .catch((error) => alert('Oops! Nekaj je šlo narobe: ' + error));
  });

  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

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

  // ===== HEADER TRANSPARENCY OB SKROLANJU =====
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      const opacity = Math.max(0.7, 1 - (scrollY - 50) / 300);
      header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    } else {
      header.style.backgroundColor = 'black';
    }
  });

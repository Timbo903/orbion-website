const form = document.querySelector('form[name="contact"]');

if (form) {
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
}
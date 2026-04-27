
<!-- ===================== style.css ===================== -->



document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name.length < 3) {
    alert('Name must be at least 3 characters');
    return;
  }

  if(!email.includes('@')) {
    alert('Enter valid email');
    return;
  }

  document.getElementById('formMsg').textContent = 'Message sent successfully!';
});

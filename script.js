// Small interaction only; all images are loaded from external URLs.
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});

// Newsletter subscription handling
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const email = input.value.trim();
    
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
      // Valid email, show success message
      const successMsg = form.nextElementSibling;
      if (successMsg && successMsg.classList.contains('success-message')) {
        successMsg.style.display = 'block';
        form.style.display = 'none'; // Hide the form
      }
    } else {
      // Invalid email
      alert("Please enter a valid email address.");
      input.focus();
    }
  });
});

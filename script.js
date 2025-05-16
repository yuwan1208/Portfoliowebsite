document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          formStatus.textContent = 'Message sent successfully!';
          formStatus.style.display = 'block';
          formStatus.style.backgroundColor = '#d4edda';
          formStatus.style.color = '#155724';
          contactForm.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        formStatus.textContent = 'Oops! There was a problem sending your message.';
        formStatus.style.display = 'block';
        formStatus.style.backgroundColor = '#f8d7da';
        formStatus.style.color = '#721c24';
      });
    });
  }

  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission feedback
document.getElementById('contact-form').addEventListener('submit', function(e) {
    // Uncomment the next line to test without a backend
    // e.preventDefault();
    alert('Thank you! Your message has been sent.');
});
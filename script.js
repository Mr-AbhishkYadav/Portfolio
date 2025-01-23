// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submission functionality should be implemented based on your backend requirements.');
});
// Animate sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 3s';
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0;
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = 0;
    observer.observe(section);
});
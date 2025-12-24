// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
});
});

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
    }
});
}, { threshold: 0.1 });

document.querySelectorAll('.manga-border').forEach(el => {
el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
observer.observe(el);
});

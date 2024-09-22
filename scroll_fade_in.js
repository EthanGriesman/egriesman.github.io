document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0;
            }
        });
    };

    // Initial check
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);

    // Check on resize
    window.addEventListener('resize', checkVisibility);
});

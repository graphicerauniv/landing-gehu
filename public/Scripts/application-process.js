document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup the Observer
    const observerOptions = {
        root: null, // Watch the viewport
        threshold: 0.15, // Trigger when 15% of the element is visible
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationClass = element.getAttribute('data-animate');
                const delay = element.style.getPropertyValue('--delay') || '0s';

                // Add Animate.css classes
                element.style.animationDelay = delay;
                element.classList.add('animate__animated', animationClass);
                element.style.opacity = "1";

                // Stop watching this element once it has animated
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // 2. Select elements to watch
    const elementsToAnimate = document.querySelectorAll('[data-animate]');
    elementsToAnimate.forEach(el => animationObserver.observe(el));
});
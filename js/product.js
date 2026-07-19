document.querySelectorAll('.sm-accordion button').forEach(button => {
    button.addEventListener('click', () => {

        const card = button.closest('.sm-accordion');
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        document.querySelectorAll('.sm-accordion button').forEach(item => {
            item.setAttribute('aria-expanded', 'false');
            item.closest('.sm-accordion').classList.remove('is-open');
        });

        if (!isOpen) {
            button.setAttribute('aria-expanded', 'true');
            card.classList.add('is-open');
        }

    });
});


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll('.sm-reveal').forEach(element => {
    observer.observe(element);
});


document.querySelectorAll('.sm-button').forEach(button => {

    button.addEventListener('click', (event) => {

        const ripple = document.createElement('i');
        ripple.className = 'sm-ripple';

        const rect = button.getBoundingClientRect();

        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;

        button.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });

    });

});
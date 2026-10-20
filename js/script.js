// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
});

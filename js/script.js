// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const scrollToTopBtn = document.getElementById('scroll-to-top');

const syncScrollToTopVisibility = () => {
    if (!scrollToTopBtn) return;

    const shouldShow = window.scrollY > 350 && !(mobileMenu && mobileMenu.classList.contains('open'));
    scrollToTopBtn.classList.toggle('visible', shouldShow);
};

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        syncScrollToTopVisibility();
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('open');
        }
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
        syncScrollToTopVisibility();
    });
});

if (scrollToTopBtn) {
    syncScrollToTopVisibility();
    window.addEventListener('scroll', syncScrollToTopVisibility, { passive: true });

    scrollToTopBtn.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

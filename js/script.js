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

const closeMobileMenu = () => {
    if (!mobileMenu || !mobileMenuBtn) return;

    mobileMenu.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('aria-label', 'Otwórz menu');
    syncScrollToTopVisibility();
};

const toggleMobileMenu = () => {
    if (!mobileMenu || !mobileMenuBtn) return;

    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Zamknij menu' : 'Otwórz menu');
    syncScrollToTopVisibility();
};

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

const closeMobileMenuOnGesture = () => {
    if (window.innerWidth >= 768) return;
    if (mobileMenu && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
    }
};

window.addEventListener('scroll', closeMobileMenuOnGesture, { passive: true });
window.addEventListener('wheel', closeMobileMenuOnGesture, { passive: true });
window.addEventListener('touchmove', closeMobileMenuOnGesture, { passive: true });

if (scrollToTopBtn) {
    syncScrollToTopVisibility();
    window.addEventListener('scroll', syncScrollToTopVisibility, { passive: true });

    scrollToTopBtn.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

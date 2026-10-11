// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Form Submit Simulation
function handleFormSubmit(event) {
    event.preventDefault();
    const successBox = document.getElementById('form-success');
    successBox.classList.remove('hidden');
}

function resetForm() {
    const successBox = document.getElementById('form-success');
    const form = document.getElementById('contact-form');
    form.reset();
    successBox.classList.add('hidden');
}

// script.js

document.addEventListener("DOMContentLoaded", function() {

    // Mobile Hamburger Menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Bars icon ko Cross mein change karne ke liye
            const icon = hamburgerBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    console.log("%c Bharat Live 24 Loaded Successfully! ", "color: #e50914; font-size: 16px; font-weight: bold");

});
///////////////////////////////////////////////////
// Get the current year for the copyright of footer
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();

year.textContent = currentYear.toString();

///////////////////////////////////////////////////
// Mobile Navigation
const buttonNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
buttonNav.addEventListener('click', function () {
    header.classList.toggle('nav-open');
});

///////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (href !== '#') {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile navigation
        if (link.classList.contains('main-nav-link')) {
            header.classList.toggle('nav-open');
        }
    });
});
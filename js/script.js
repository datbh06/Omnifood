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





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
                top: 0, behavior: 'smooth'
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

///////////////////////////////////////////////////
// Sticky navigation
const sectionHero = document.querySelector('.section-hero');
const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
        document.body.classList.add('sticky');
    } else {
        document.body.classList.remove('sticky');
    }
}, {
    // In the viewport
    root: null, threshold: 0, rootMargin: '-80px'
});
obs.observe(sectionHero);

///////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    const flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    const isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();
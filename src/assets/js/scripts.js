/* const navLinks = document.querySelectorAll('.nav-link');
const dropdownTogglers = document.querySelectorAll('.dropdown-toggle');
const navbarToggler = document.querySelector('.navbar-toggler');
const fullHeightBanner = document.querySelector('.full-height');


document.addEventListener('click', function (e) {
    dropdownTogglers.forEach(dropdownToggler => {
        dropdownToggler.nextSibling.nextSibling.classList.remove('show');
    });
    navbarToggler.nextSibling.nextSibling.classList.remove('show');
});

navLinks.forEach(navLink => navLink.addEventListener('click', function(e){
    navLinks.forEach (navLink => navLink.classList.remove('active'));
    this.classList.toggle('active');
}));

dropdownTogglers.forEach(dropdownToggler => dropdownToggler.addEventListener('click', function(e){
    dropdownTogglers.forEach(dropdownToggler => dropdownToggler.classList.remove('show'));
    e.stopPropagation();
    this.nextSibling.nextSibling.classList.toggle('show');
}));

navbarToggler.addEventListener('click', function(e) {
    e.stopPropagation();
    navbarToggler.nextSibling.nextSibling.classList.toggle('show');
});

window.onload = function (e) {
    //console.log(this);
    if (fullHeightBanner) {
        if (this.screen.orientation.type.includes('landscape')) {
            fullHeightBanner.style.minHeight = `${this.innerHeight}px`;
        }
        else {
            fullHeightBanner.style.minHeight = `unset`;
        }
    }
}
window.onresize = function (e) {
    if (fullHeightBanner) {
        if (this.screen.orientation.type.includes('landscape')) {
            fullHeightBanner.style.minHeight = `${this.innerHeight}px`;
        }
        else {
            fullHeightBanner.style.minHeight = `unset`;
        }
    }
}


const nav = document.querySelector('.header-nav-section');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

 */
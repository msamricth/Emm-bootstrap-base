const scrollRoot = document.querySelector('[data-scroller]');
const nav_compression = document.body.classList.contains('nav_compression');
var lastScrollTop = 0;
var newScroll;
const main = document.querySelector('main');
const navbarMain = document.getElementById('header');
const navcontainer = document.getElementById('nav-header');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

document.addEventListener('DOMContentLoaded', function () {
    if (nav_compression) {
        const navbarMainHeight = navbarMain.clientHeight;

        window.addEventListener('scroll', function () {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Close any open dropdowns in navbarMain
            const openDropdowns = navbarMain.querySelectorAll('.show');
            openDropdowns.forEach(dropdown => dropdown.classList.remove('show'));

            if (scrollTop < 250) {
                navbarMain.style.top = '0';
            } else {
                if (scrollTop > lastScrollTop) {
                    navbarMain.style.top = `-${navbarMainHeight}px`;
                    newScroll = scrollTop - 2;
                } else {
                    navbarMain.style.top = '0';
                    newScroll = scrollTop + 2;
                }
            }
            lastScrollTop = newScroll;
        });
    }

    function hideNav() {
        navcontainer.classList.remove("is-visible");
    }

    function showNav() {
        navcontainer.classList.remove("is-hidden");
    }

    navbarCollapse.addEventListener('show.bs.collapse', event => {
        setTimeout(
            function () {
                navbarToggler.classList.add('is-active');
                navbarMain.classList.add('mobile-nav-open');
            }, 100);
    });

    navbarCollapse.addEventListener('hide.bs.collapse', event => {
        setTimeout(
            function () {
                navbarToggler.classList.remove('is-active');
                navbarMain.classList.remove('mobile-nav-open');
            }, 100);
    });
});

(function() {
    'use strict';
    var documentIsReady = false;
    var isScrolling = false;
    var timeout = false;

    function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

    function getScrollY() {
        var scrOfY = 0;
        if (typeof(window.pageYOffset) == 'number') {
            //Netscape compliant
            scrOfY = window.pageYOffset;

        } else if (document.body && document.body.scrollTop) {
            //DOM compliant
            scrOfY = document.body.scrollTop;
        }
        return scrOfY;
    }

    function handleScroll(e) {
        var scrollPosition = 0, nav;
        if (isScrolling) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(handleScroll, 50);
            return;
        }
        isScrolling = true;
        nav = document.getElementById('brosa-navbar');


        scrollPosition = getScrollY();
        if (scrollPosition > 60) {
            // need to have inverted className
            if (!hasClass(nav, 'navbar-inverse')) {
                nav.className = nav.className.replace('navbar-default', '');
                nav.classList = nav.className.trim();
                nav.className += ' navbar-inverse';
            }
        } else {
            if (!hasClass(nav, 'navbar-default')) {
                nav.className = nav.className.replace('navbar-inverse', '');
                nav.classList = nav.className.trim();
                nav.className += ' navbar-default';
            }
        }

        isScrolling = false;

    }

    function ready() {
        if (!documentIsReady) {
            console.log('ready');
            document.addEventListener('scroll', handleScroll, false);
            documentIsReady = true;
        }

    }

    document.addEventListener('DOMContentLoaded', ready, false);
    window.addEventListener('load', ready, false);
})();

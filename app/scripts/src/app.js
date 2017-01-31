(function() {
    'use strict';
    var documentIsReady = false;
    var isScrolling = false;
    var timeout = false;

    /**
     * detect if a class is attached to a html element
     * @param  {} element
     * @param  {} cls
     */
    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    /**
     * returns Y scroll position
     */
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
    /**
     * handle scroll event
     * @param  {} e
     */
    function handleScroll(e) {
        var scrollPosition = 0,
            nav;
        //scrolling debounce.
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
    /**
     * executes on document ready
     */
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

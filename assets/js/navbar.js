//menu desplegable en pantallas pequeñas para que se oculten
  $('.navbar-collapse a:not(.dropdown-toggle)').click(function () {
    $(".navbar-collapse").collapse('hide');
});

// Solución para corregir el desfase que provoca el navbar fijo en los nav-link
$('.nav-link').click(function () {
    let divId = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(divId).offset().top - 54
    }, 100);
});

// Navbar
jQuery(document).ready(function ($) {

    moveNavigation();

    $(window).on('resize', function () {
        (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 100) : window
            .requestAnimationFrame(moveNavigation);
    });


    $('.menu-item-has-children ul li a, .menu-item-has-children a').on('click', function (event) {
        event.stopPropagation();
    });

    $('.menu-item-has-children').on('click', function (event) {
        event.preventDefault();
        $('.menu-item-has-children').not(this).not($(this).parent().parent()).find('.sub-menu:visible').slideToggle();
		$(this).find('.sub-menu').first().slideToggle();
        event.stopPropagation();
    });


    $('.site-trigger, .site-overlay').on('click', function (event) {
        event.preventDefault();
        $('.site-navbar, .site-overlay, body, html, .site-trigger').toggleClass('active');
    });

    function moveNavigation() {
        var navbar = $('.site-navbar');
        var screenSize = checkWindowWidth();
        if (screenSize) {
            navbar.detach();
            navbar.insertBefore('.site-trigger');
            $('.site-navbar, .site-overlay').removeClass('active');
        } else {
            navbar.detach();
            navbar.insertAfter('.site-main');
            $('.site-navbar, .site-overlay').removeClass('active');
        }
    }

    function checkWindowWidth() {
        var mq = $(window).width();
        return (mq < 769) ? false : true;
    }
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-scroll");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
    });
});


(function($) {

    // prettyPhoto
    jQuery(document).ready(function() {
        jQuery('a[data-gal]').each(function() {
            jQuery(this).attr('rel', jQuery(this).data('gal'));
        });
        jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({ animationSpeed: 'slow', theme: 'light_square', slideshow: false, overlay_gallery: false, social_tools: false, deeplinking: false });
    });


})(jQuery);

$('#nav').affix({
    offset: {
        top: $('#nav').offset().top
    }
});

function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);

    if (scrollY >= heightFooter) {
        $('footer').css({
            'bottom': '0px'
        });
    } else {
        $('footer').css({
            'bottom': '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function() {
    var windowHeight = $(window).height(),
        footerHeight = $('footer').height(),
        heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height': heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height': windowHeight + 'px',
        'line-height': windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top': windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function() {
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top': '-' + scroll + 'px'
        });

        $('header').css({
            'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});
var myElement = $('.hero-image');

$(window).on('scroll', function() {
    var st = $(this).scrollTop();
    myElement.css({
        'opacity' : 1 - st/600
    });
});
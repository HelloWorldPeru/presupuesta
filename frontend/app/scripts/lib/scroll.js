$(document).on('ready', function () {
    var htmlbody = $('html,body');

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top-120
        }, 2000, 'easeInOutQuint');
    }

    $('.navigation > li').on('click', function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });


});
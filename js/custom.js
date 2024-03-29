$(document).ready(function () {

    // Init Animate on scroll
    AOS.init();

    // Init LightSlider 
    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        auto: true,
        loop: true,
        slideMargin: 0,
        thumbItem: 10
    });
    var slider = $('#lightSlider2').lightSlider({
        gallery: false,
        item: 1,
        pager: false,
        loop: true,
        slideMargin: 0,
        thumbItem: 10,
        adaptiveHeight: true,
    });

    var windowWidth = $(window).outerWidth();
    if(windowWidth <= 768) {
        slider.destroy();
    }   
    

    // Toggle Feature Image on Mouseover
    $('.features-container li').mouseover(function () {
        $('.features-container li').removeClass('active');
        $(this).addClass('active');
        var me = $(this).index();
        $('.platform-images li').removeClass('active');
        $('#' + me).addClass('active');
    })

    // Scroll to Menu link Position
    $('.header li a, .btn').click(function (e) {
        e.preventDefault();
        var Top = $($(this).attr("href")).offset().top - 30;
        $('html,body').animate({ scrollTop: Top }, 1000);
    });

    
})
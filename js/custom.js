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

    // Toggle Feature Image on Mouseover
    $('.features-container li').mouseover(function () {
        $('.features-container li').removeClass('active');
        $(this).addClass('active');
        var me = $(this).index();
        $('.platform-images li').removeClass('active');
        $('#' + me).addClass('active');
    })

    // Scroll to Menu link Position
    $('.header li a').click(function (e) {
        e.preventDefault();
        var Top = $($(this).attr("href")).offset().top - 30;
        $('html,body').animate({ scrollTop: Top }, 1000);
    });
    


})
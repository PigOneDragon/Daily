$(function() {
    // 轮播
    $('.banner').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 960,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });


    // 导航按钮
    var navbarBtn = $('.navbar-btn');
    var nav = $('.nav');

    navbarBtn.click(function() {
        navbarBtn.toggleClass('act');

        var _winw = $(window).width();
        if (navbarBtn.hasClass('act')) {
            if (_winw <= 1200) {
                nav.stop().slideDown();
            }
        } else {
            if (_winw <= 1200) {
                nav.stop().slideUp();
            }
        }

    });

    // 页面>1200隐藏按钮
    $(window).on('resize', function(e) {
        if ($(window).width() > 1200) {
            navbarBtn.removeClass('act');
            nav.css('display', '');
        }
    });


    // 语言下拉菜单
    var lang = $('.lang');
    var arrowLang = $('span',lang);
    var dd = $('dd', lang);
    lang.click(function(event) {
        arrowLang.toggleClass('open');
        if ($('dd:visible', lang).size()) {
            dd.stop().slideUp();
        } else {
            dd.stop().slideDown();
        }
        return false;
    });

    $('a',dd).click(function(event) {
        $('dt a', lang).html($(this).text() + '<span></span>' );
        dd.stop().slideUp();
        return false;
    });

    $('body').click(function () {
        dd.stop().slideUp();
        arrowLang.removeClass('open');
    });

});
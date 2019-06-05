$(function() {
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 8000,
        arrows: true,
        dots: true,
        cssEase: 'linear',
        /*responsive: [{

            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                centerMode: false
            }
        }]*/
    });
    // 名医
    $('.m-doc').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        cssEase: 'linear',
        responsive: [{

            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: false,
  
            }
        }]
    });
     // 资讯
    $('.m-news').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        cssEase: 'linear',
        responsive: [{

            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true            
            }
        }]
    });
    // 头部样式 滚动
     $(document).on('scroll', function(){
        var scrollH = $(this).scrollTop();
        if (scrollH > $('.header').height()){
            if (!$('.header').hasClass('bg')) {
                $('.header').addClass('bg');
            }
        } else {
            $('.header').removeClass('bg');

        }
    })
    // 搜索弹出
    $('.header .so').on('click',function(){
        $('form',this).slideToggle();
        $('.mask',this).slideToggle();
        return false;
    });
    $('.inp').click(function () {
        $(this).show();
        return false;
    });

     // 语言下拉菜单
    var lang = $('.lang');
    var dd = $('dd', lang);
    lang.click(function(event) {
        if ($('dd:visible', lang).size()) {
            dd.stop().slideUp('fast');
        } else {
            dd.stop().slideDown('fast');
        }
        return false;
    });

    $('a',dd).click(function(event) {
        $('dt', lang).html($(this).html());
        dd.stop().slideUp('fast');
        return false;
    });

    $('body').click(function () {
        dd.stop().slideUp('fast');
    });


     // 返回顶部
    $('.backTop').click(function() {
        $('body,html').stop().animate({
            scrollTop: '0'
        }, 500);
        return false;
    });


    // 视频弹框
    $('.js-video-pop').click(function() {
        $('.pop-fixed.video').fadeIn();
        var sSrc = $(this).attr('data-video-src');
        $('.pop-fixed.video #videoBox').attr('src', sSrc);
    });

    $('.pop-fixed.video .close').click(function() {
        $('.pop-fixed.video').fadeOut();
        $('.pop-fixed.video #videoBox').attr('src', '');
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
        return false;
    });


    
})
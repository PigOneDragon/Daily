$(function() {
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        /* responsive: [{
             breakpoint: 1200,
             settings: {
                 arrows: false,
                 dots: true
             }
         }]*/
    });

    // 小程序
    $('.m-chengxu .slide').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '80px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1,
                }
            }
        ]

    });

    // 管理平台
    var pt = $('.h-pt');
    var infoPt = $('.info', pt);
    pt.mouseenter(function() {
        infoPt.stop().slideDown();
    });
    pt.mouseleave(function() {
        infoPt.stop().slideUp();
    });


    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function() {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
        return false;
    });
    // $('.TAB_CLICK').each(function(index, el) {
    //         $(this).children('li').filter(':first').trigger('click');
    //     });
    // 返回顶部
    $('.backTop').click(function() {
        $('body,html').stop().animate({
            scrollTop: '0'
        }, 500);
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

    $(window).on('resize', function(e) {
        if ($(window).width() > 1200) {
            navbarBtn.removeClass('act');
            nav.css('display', '');
        }
        myNav();

    });

    var sub = $('.nav .v1');
    var navLi = $('.nav li');
    function myNav(){
        var _winw = $(window).width();
        if( _winw>1200 ){
            sub.unbind('click');
            navLi.bind('mouseenter',function() {
                $(this).find('dl').stop().slideDown();
                navLi.removeClass('on').eq($(this).index()).addClass('on')
            });
            navLi.bind('mouseleave',function() {
                $(this).removeClass('on');
                $(this).find('dl').stop().slideUp();
            });
        }else{
            navLi.unbind('mouseenter mouseleave');

            sub.bind('click',function(){
                $(this).parent('li').toggleClass('on');
                if( $(this).siblings('dl').length ){
                    $(this).siblings('dl').stop().slideToggle();
                    return false;
                }
            });
        }
    }
    myNav();

    $("body").click(function(event){
        sub.parent().removeClass('on').find('dl').stop().slideUp('fast');
    });

    // 滚动大于页面一半显示侧边
    var $slideRight = $('.slideRight');
    var nowSh = $(document).scrollTop();
    var docH = $(document).height();

    if (nowSh > docH / 2) {
        $slideRight.show();
    } else {
        $slideRight.hide();
    }
    $(window).scroll(function(event) {

        var _sTop = $(window).scrollTop();
        if (_sTop > docH / 2) {
            $slideRight.show();
        } else {
            $slideRight.hide();
        }
    });




})
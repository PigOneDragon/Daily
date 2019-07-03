/* 
 * @Author: anchen
 * @Date:   2019-03-30 16:14:10
 * @Last Modified by:   anchen
 * @Last Modified time: 2019-04-01 17:49:36
 */

$(document).ready(function() {
    //首页banner
    $('.banner .slider').slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        lazyLoad: 'ondemand'
    });

    // 手机导航
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        var _winw = $(window).width();
        var _winh = $(window).height();
        if ($(this).hasClass('open')) {
            $('body').addClass('open');
            if (_winw <= 1200) {
                $('.yunu-nav').stop().slideDown();
            }
        } else {
            $('body').removeClass('open');
            if (_winw <= 1200) {
                $('.yunu-nav').stop().slideUp();
            }
        }
    });

    $(window).on('resize', function(e) {
        if ($(window).width() > 1200) {
            $('.menuBtn').removeClass('open');
            $('.hdr').css('display', '');
        }
    });

    // 导航
    if ($(".yunu-nav li").find('dl').length) {
        // $(".nav li").find("dl").siblings("a").attr("href","javascript:;")
    };

    function myNav() {
        var _winw = $(window).width();
        if (_winw >= 1200) {
            $('.yunu-nav').show().addClass('nav-pc').removeClass('nav-m');
            $('body,.menuBtn').removeClass('open');
        } else {
            $('.yunu-nav').hide().addClass('nav-m').removeClass('nav-pc');
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
        $('.menuBtn').removeClass('open');
    });
    $('.nav-pc li').bind('mouseenter', function() {
        $(this).find('dl').stop().slideDown("fast");
        if ($(this).find('dl').length) {
            $(this).addClass('ok');
        }
    });
    $('.nav-pc li').bind('mouseleave', function() {
        $(this).removeClass('ok');
        $(this).find('dl').stop().slideUp("fast");
    });

    $('.nav-m .v1').click(function() {
        $(this).parents(".yunu-nav").find(".sub").stop().slideUp("fast");
        if ($(this).siblings('.sub').length) {
            $(this).siblings('.sub').stop().slideToggle("fast");
            $(this).toggleClass('on');
            return false;
        }
    });

    // 滚动导航悬浮
    $(document).on('scroll', function() {
        var scrollH = $(this).scrollTop();
        if (scrollH > $('.header').height()) {
            $('.yunu-header').addClass('fixed');
        } else {
            $('.yunu-header').removeClass('fixed');
        }
    })

    //内页左侧二级分类
    $('.ul-txt-ins1 li').click(function() {
        $('.ul-sub').slideToggle();
        return false;
    });

    //pc站下拉菜单
    $('.yunu-nav>.wp>ul>li').hover(function() {
        if ($(window).width() <= 1200) return;
        $(this).find('.sub').slideDown();
    }, function() {
        if ($(window).width() <= 1200) return;
        $('.sub').slideUp();
    });

    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        //document.title=winTop;
        if (winTop >= 151) {
            if ($(window).width() <= 1200) return;
            $('.yunu-nav').addClass('fixed');
        } else {
            if ($(window).width() <= 1200) return;
            $('.yunu-nav').removeClass('fixed');
        }
    });


  // 客服
    $('.kf ul li').mouseenter(function() {
        $(this).children().not('.icon').addClass('on').animate({ right: "50px", opacity: 1 }, "slow");
    });
    $('.kf ul li').mouseleave(function() {
        $(this).children().not('.icon').removeClass('on').animate({ right: "0", opacity: 0 }, "slow");
    });
    $('.qrcode .tit span').click(function() {
        //$('.qrcode').remove();
         $(this).closest('.qrcode').animate({ right: "0", opacity: 0 }, "slow");;
    });
    //返回顶部
    $('.kf ul li.backTop').click(function() {
        $("html,body").stop().animate({ scrollTop: '0' }, 500);
    });


});
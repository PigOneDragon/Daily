$(function() {
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
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
        slidesToShow: 3

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
    var nav = $('.hdr');

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
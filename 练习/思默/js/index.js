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
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });

    // 优势轮播
    $('.ul-list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 769,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 421,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // 多选框
    $('[role=checkbox]').each(function() {
        var input = $(this).find('input[type="checkbox"]');
        // console.log(input);
        input.each(function() {
            if ($(this).attr('checked')) {
                $(this).parents('label').addClass('checked');
                $(this).prop("checked", true)
            }
        })

        input.change(function() {
            $(this).parents('label').toggleClass('checked');
        });
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
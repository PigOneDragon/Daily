$(function() {
    // 轮播
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });
    // 资质
    /*    $('.ul-pic').on("mouseenter",".ul-pic.UL-PIC",function(){
            $('.ul-pic.UL-PIC').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            arrows: false,
            });
        });*/


    $('.UL-PIC').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        // centerMode: true,
        // centerPadding: '0px',
        // speed: 500,
        // cssEase: 'linear',
         responsive: [{

             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 arrows: false,
                 dots: true,
                 centerMode: false
             }
         }]
    });
    // 宣传视频
    $('.m-ban').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        speed: 500,
        cssEase: 'linear',

    });
    // 合作伙伴
    $('.m-ban1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        speed: 500,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1552,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });


    // 滚动达到某一高度给head添加阴影效果
    var $head = $('.header');
    var nowSh = $(document).scrollTop();
    var headHeight = $head.height();
    var Width = $(window).width();
    // 页面初始化判断
    /*if (nowSh > headHeight && w > 1200) {
        $head.addClass('fixed');
    }
    $(window).scroll(function(event) {
        var _sTop = $(window).scrollTop();

        if (_sTop > headHeight && w > 1200) {
            $head.addClass('fixed');
        } else {
            $head.removeClass('fixed');
        }
    });*/

    function navBar(w) {
        if (nowSh > headHeight && w > 1200) {
            $head.addClass('fixed');
            $('.banner').css('margin-top', '60');
        }
        $(window).scroll(function(event) {
            var _sTop = $(window).scrollTop();
            if (_sTop > headHeight && w > 1200) {
                $head.addClass('fixed');
                $('.banner').css('margin-top', '60');
            } else {
                $head.removeClass('fixed');
                $('.banner').css('margin-top', '78');
            }
        });
    }

    navBar(Width);
    // 初始化判断
    function ulPic(Width) {
        if (Width < 960) {
            $('.ul-pic').css('display', 'none');
            $('.UL-PIC').css('display', 'block');
        } else {
            $('.ul-pic').css('display', 'block');
            $('.UL-PIC').css('display', 'none');
        }
    }
    ulPic(Width);
    $(window).resize(function(event) {
        var _width = $(window).width();
        navBar(_width);
        if (_width > 1200) {
            nav.show();
            navbarBtn.removeClass('act');

        } else {
            nav.hide();
        }
        // 二维码事件 bug 页面改变后显示一下就隐藏了
        qrDown(_width);
        // 资质荣誉在手机页面开始轮播 添加一个类
        ulPic(_width);
    });

    // 搜索按钮
    var btn = $('.soBtn');
    var inp = $('.so form');
    btn.click(function(e) {
        inp.toggleClass('open');
        inp.click(function() {
            $(this).addClass('open');
            return false; //影响了submit的默认事件
        });
        return false;
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

    /*// 二维码展开效果
        var down = $('.down');
        down.hover(function(event) {
            $(this).addClass('act');
            $('.ma', $(this)).stop().slideDown();
        }, function() {
            $(this).removeClass('act');
            $('.ma', $(this)).stop().slideUp();
        });*/

    var down = $('.down');

    function qrDown(_winw) {
        if (_winw > 1200) {
            // down.unbind('click');
            down.bind('mouseenter', function() {
                $(this).addClass('act');
                $('.ma', $(this)).stop().slideDown();
            });
            down.bind('mouseleave', function() {
                $(this).removeClass('act');
                $('.ma', $(this)).stop().slideUp();

            });
        } else {
            down.unbind('mouseenter mouseleave');

            //     down.bind('click', function() {
            //         console.log('被点击了');
            //     $('.ma').slideUp();
            //     down.removeClass('act');
            //     if ($('.ma:visible', $(this)).size()) {
            //         $('.ma', $(this)).slideUp();
            //         $(this).removeClass('act');
            //     } else {
            //         $('.ma', $(this)).slideDown();
            //         $(this).addClass('act');
            //     }
            //     return false;
            // });


        }
    }
    down.on('click', function() {
        console.log('被点击了');
        $('.ma').slideUp();
        down.removeClass('act');
        if ($('.ma:visible', $(this)).size()) {
            $('.ma', $(this)).slideUp();
            $(this).removeClass('act');
        } else {
            $('.ma', $(this)).slideDown();
            $(this).addClass('act');
        }
        return false;
    });
    qrDown(Width);
    //迁西网站的二级菜单事件点击下拉文本水平居中
    /*            $(".f-link li span").click(function(event) {
                    $(this).parent(".f-link li").siblings("li").find("dl").hide();
                    $(this).parent(".f-link li").siblings("li").find("span").removeClass('open');
                    $(this).parent(".f-link li").find("dl").stop().slideToggle("fast");
                    $(this).toggleClass('open');
                    event.stopPropagation();
                    
                });
                $(document).click(function(event){
                    $(".f-link li dl").slideUp();
                    event.stopPropagation();
                })*/

    // 返回顶部
    $('.backTop').click(function() {
        $('body,html').stop().animate({
            scrollTop: '0'
        }, 500);
        return false;
    });
    $('body').click(function() {
        inp.removeClass('open');
        down.removeClass('act');
        $('.ma', down).stop().slideUp();
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
    })

});
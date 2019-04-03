$(function() {
    $('.banner').slick({
        dots: true,
        slidesToShow: 1,
        // autoplay:true,
        autoplaySpeed: 3000,
        // fade:true,
        arrows: true,
        speed: 500,
        cssEase: 'linear'
    });

    /*    // 定义一个参数控制页面的页数
        
        $(window).resize(function(event) {
            var Width = $(this).width();
            // console.log(Width);
            var pageIndex = 4;
            if(Width < 957){
                pageIndex = 3;
                // alert("ok");
                console.log(pageIndex);
            }
            $('.row-2 .ul-pic').slick({

                slidesToShow: pageIndex
        });
        });
    */
    // news轮播  轮播后怎么控制列数？  已解决 responsive方法
    $('.row-1 .ul-pic').slick({
        // dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed: 3000,
        arrows: true,
        speed: 500,
        // 插件的响应式布局
        responsive: [

            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
    $('.row-2 .ul-pic').slick({
        // dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed: 3000,
        arrows: true,
        speed: 500,
        responsive: [

            {
                breakpoint: 1198,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    jQuery(".m-pic2 li").each(function(i){ jQuery(".m-pic2 li").slice(i*12,i*12+12).wrapAll("<ul class='ul-pic1'></ul>");});
    $('.m-pic2').slick({
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed: 3000,
        arrows: true,
        speed: 500,
        /*responsive: [
            
            {
            breakpoint: 1198,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 969,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            }
        ]*/
    });

    /*$('.nav li').hover(function() {
        $('dl', this).stop().slideDown();
        $('.nav li').removeClass('on');
        $(this).addClass('on');
    }, function() {
        $('dl', this).stop().slideUp();
        $(this).removeClass('on');
    });*/
// 项目给的
  /*function myNav(){
      var _winw = $(window).width();
      if( _winw>767 ){
          $('.nav').show();
          $('.nav li').bind('mouseenter',function() {
              $(this).find('dl').stop().slideDown();
              $('.nav-sub').stop().slideDown();
              if( $(this).find('dl').length ){
                  $(this).addClass('ok');
              }
          });
          $('.nav li').bind('mouseleave',function() {
              $(this).removeClass('ok');
              $(this).find('dl').stop().slideUp();
              $('.nav-sub').stop().slideUp();

          });
          $('body').removeClass('open');
      }else{
          $('.nav').hide();
          $('.nav li').unbind('mouseenter mouseleave');
          $('.nav .v1').click(function(){
              if( $(this).siblings('dl').length ){
                  $(this).siblings('dl').stop().slideToggle();
                  return false;
              }
          });
      }
  }
  myNav();
  $(window).resize(function(event) {
      myNav();
  });  */
// 二级菜单item状态转换
    $('.nav dd').hover(function() {
        $('.nav dd').removeClass('ok');
        $(this).addClass('ok');

    }, function() {
        $(this).removeClass('ok');

    });

// 二级菜单
var navLi = $('.nav li');
var navSub = $('.nav-sub');

    navLi.mouseenter(function() {
        var index = $(this).index();
        $('dl', this).stop().slideDown();
        navSub.stop().slideDown();
        navLi.removeClass('on').eq(index).addClass('on');
    });
    navLi.mouseleave(function() {
        $('dl', this).stop().slideUp();
        navSub.stop().slideUp();

        $(this).removeClass('on');
    });

    // navSub.hover(function() {
    //     $(this).stop().slideDown();
    // }, function() {
    //     $(this).stop().slideUp();
    // });

    // 侧边栏
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.snv').fadeIn();
        } else {
            $('.snv').fadeOut();
        }
        // 头部背景
        var Height = $(this).scrollTop();
        // console.log(Height);
        if (Height > 200) {
            $('.header').css('backgroundColor', '#010508');
        } else {
            $('.header').css('backgroundColor', 'transparent');
        }
    });
    // 侧边二级菜单效果不好、用css控制宽度实现
    /*$('.icon').hover(function() {
            $('.item1', $(this)).fadeIn(300);
            return false;
        },
        function() {
            $('.item1', $(this)).fadeOut();
            return false;
        }
    );*/
    // 返回顶部
    $('.backTop').click(function() {
        $('body,html').stop().animate({
            scrollTop: '0'
        }, 500);
    });


    // 页面变化去除隐藏的效果
    $(window).resize(function(event) {
        var Width = $(this).width();
        // console.log(Width);
        if (Width > 1198) {
            nav.removeClass('show');
            inp1.removeClass('show');
        }
    });
    /* 输入框 导航条的淡入淡出  太麻烦~ 修改class试试*/
    /*var f1 = false;
    var f2 = false;
    $('.btn1').click(function(){
        f1 = !f1;
        $('.nav').fadeOut();
        if(f1){
            $('.inp1').fadeIn();
        }else{
            $('.inp1').fadeOut();
        }
        return false;
    });
    $('.menubtn').click(function(){
        f2 = !f2;
        $('.inp1').fadeOut();
        if(f2){
            $('.nav').fadeIn();
        }else{
            $('.nav').fadeOut();
        };
        return false;
    });*/
    var nav = $('.nav');
    var inp1 = $('.inp1');
    // 改变类名
    function changeClass(obj1, obj2, cls) {
        obj1.removeClass(cls);
        obj2.toggleClass(cls);
    }
    $('.btn1').click(function(){
        changeClass(nav, inp1, 'show');
        return false;
    });
    $('.menubtn').click(function(){
        changeClass( inp1,nav, 'show');
        return false;
    });
    $('body , html').click(function() {
        nav.removeClass('show');
        inp1.removeClass('show');
    });

    nav.click(function() {
        $(this).addClass('show');
        return false;
    }); 
    inp1.click(function() {
        $(this).addClass('show');
        return false;
    });

});
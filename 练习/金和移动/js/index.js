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
                breakpoint: 1371,
                settings: {
                    arrows: false,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                    // arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
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
                breakpoint: 1371,
                settings: {
                    arrows: false,
                    dots: true
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },

        ]
    });
    // 控制小图标列表的个数
    jQuery(".m-pic2 li").each(function(i) {
        jQuery(".m-pic2 li").slice(i * 12, i * 12 + 12).wrapAll("<ul class='ul-pic1'></ul>");
    });


    $('.m-pic2').slick({
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed: 3000,
        arrows: true,
        speed: 500,
         responsive: [
            {
                breakpoint: 1371,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
            ]

    });


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

    function myNav() {
        // var _winw = $(window).width();
        var _winw = window.innerWidth;
        /*console.log(_winw);
        console.log(winw);*/
        if (_winw > 1199) {

            $('.inp1').removeClass('show');
            $('.nav').removeAttr('id');

            $('.nav').show();
            $('.nav li').bind('mouseenter', function() {
                $(this).find('dl').stop().slideDown();
                $('.nav-sub').stop().slideDown();
                if ($(this).find('dl').length) {
                    $(this).addClass('on');
                }
            });
            $('.nav li').bind('mouseleave', function() {
                $(this).removeClass('on');
                $(this).find('dl').stop().slideUp();
                $('.nav-sub').stop().slideUp();

            });
            // 二级菜单的箭头
            $('.nav dd').hover(function() {
                $('.nav dd').removeClass('ok');
                $(this).addClass('ok');

            }, function() {
                $(this).removeClass('ok');

            });

        } else {
            $('.nav').hide();
            $('.nav').attr('id', 'nav-w');
            // $('.nav').stop().slideUp();
            $('.nav li').unbind('mouseenter mouseleave');
            /*$('.nav .v1').click(function() {
                if ($(this).siblings('dl').length) {
                    $(this).siblings('dl').stop().slideToggle();
                    return false;
                }
            });*/
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
        // myFdnav();
    });


    // navSub.hover(function() {
    //     $(this).stop().slideDown();
    // }, function() {
    //     $(this).stop().slideUp();
    // });

    // 侧边栏
    $(window).scroll(function() {
        var Height = $(this).scrollTop();
        if (Height > 700) {
            $('.m-slidebarR').fadeIn();
        } else {
            $('.m-slidebarR').fadeOut();
        }
        // 头部背景

        // console.log(Height);
        if (Height > 100) {
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


    // 二级菜单
    var navLi = $('.nav li');
    var navSub = $('.nav-sub');
    /*navLi.mouseenter(function() {
                var index = $(this).index();
                $('dl', this).stop().slideDown();
                navSub.stop().slideDown();
                navLi.removeClass('on').eq(index).addClass('on');
            });
            navLi.mouseleave(function() {
                $('dl', this).stop().slideUp();
                navSub.stop().slideUp();

                $(this).removeClass('on');


                $('.nav dd').hover(function() {
                    $('.nav dd').removeClass('ok');
                    $(this).addClass('ok');

                }, function() {
                    $(this).removeClass('ok');

                });
            });*/
    // 页面变化去除隐藏的效果
    /*    $(window).resize(function(event) {
            var Width = $(this).width();
            // console.log(Width);
            if (Width > 1050) {
     
                inp1.removeClass('show');
            }

        });*/
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
    var flag = false;
    // 改变类名
    function changeClass(obj1, obj2, cls) {
        obj1.removeClass(cls);
        obj2.toggleClass(cls);
    }
    $('.btn1').click(function() {

        flag = false;
        nav.stop().slideUp();
        inp1.toggleClass('show');
        /*var r = inp1.hasClass('show');
        // alert(r);
        if(r){
           $('.header').height('100px'); 
       }else{
            $('.header').height('50px');
       }*/

        return false;
    });
    $('.menubtn').click(function() {
        // changeClass(inp1, nav, 'show');
        flag = !flag;
        if (flag) {
            nav.stop().slideDown();
        } else {
            nav.stop().slideUp();
        }
        inp1.removeClass('show');
        return false;
    });

    $('body , html').click(function() {
        // nav.removeClass('show');
        flag = false;
        // 去除跟nav状态的冲突
        $('#nav-w').stop().slideUp();
        inp1.removeClass('show');
        // $('.fd-nav dd').slideUp();
        // $('.nav dl').slideUp();
        return false;
    });

    /*nav.click(function() {
        $(this).addClass('show');
        return false;
    });*/
    inp1.click(function() {
        $(this).addClass('show');
        return false;
    });
    /* // 导航
     $('.nav li').click(function() {
         // 隐藏所有二级菜单
         $('.nav dl').slideUp();
         if ($('dl:visible', $(this)).size()) {
             $('dl', $(this)).slideUp();
             // $(this).removeClass('click');
         } else {
             $('dl', $(this)).slideDown();
             // $(this).addClass('click');
         }
         return false;
     });*/


$(window).resize(function(event) {
    var Width = $(window).width();
    if (Width < 967) {
        $('body').data('open','open');
        console.log($('body').data('open'));
        if($('body').data('open')){
            /*$('.fd-nav dt a').click(function () {
            // console.log('aa');
            if($(this).parent('dt').siblings('dd').length){
                $(this).parent('dt').siblings('dd').stop().slideToggle();
            }
            return false;
            });*/
            $('.fd-nav').click(function() {
                // console.log(Width);
                // alert('www');
                // 隐藏所有二级菜单
                $('.fd-nav dd').slideUp();
                if ($('dd:visible', $(this)).size()) {
                    $('dd', $(this)).slideUp();
                    // $(this).removeClass('click');
                } else {
                    $('dd', $(this)).slideDown();
                    // $(this).addClass('click');
                }
                return false;
            });
            $('.fd-nav dd').click(function() {
                $(this).css('display', 'block');
                return false;
            });
       }

    }else{
        $('body').removeData('open');
        $('.fd-nav').unbind("click");
    }
});
    
   /* function myFdnav() {
        var Width = $(window).width();
        if (Width < 967) {
            $('.fd-nav').click(function() {
                console.log(Width);
                alert('www');
                // 隐藏所有二级菜单
                $('.fd-nav dd').slideUp();
                if ($('dd:visible', $(this)).size()) {
                    $('dd', $(this)).slideUp();
                    // $(this).removeClass('click');
                } else {
                    $('dd', $(this)).slideDown();
                    // $(this).addClass('click');
                }
                return false;
            });
            $('.fd-nav dd').click(function() {
                $(this).css('display', 'block');
                return false;
            });
        } else {
            $('.fd-nav').unbind("click");
            // $('.fd-nav dd').slideDown();
        }
    }
    myFdnav();*/
    // 底部链接
    /* $(window).resize(function(event) {
         var Width = $(window).width();
         if (Width < 967) {
             $('.fd-nav').click(function() {
                 console.log(Width);
                 alert('www');
                 // 隐藏所有二级菜单
                 $('.fd-nav dd').slideUp();
                 if ($('dd:visible', $(this)).size()) {
                     $('dd', $(this)).slideUp();
                     // $(this).removeClass('click');
                 } else {
                     $('dd', $(this)).slideDown();
                     // $(this).addClass('click');
                 }
                 return false;
             });
             $('.fd-nav dd').click(function() {
                 $(this).css('display', 'block');
                 return false;
             });
         } else {
             $('.fd-nav').unbind("click");
         }
     });*/
   // 菜单效果
     $('.menubtn').click(function() {
        $(this).toggleClass('act');
    });

    $('.nav dl').click(function() {
        $(this).css('display', 'block');
        return false;
    });

    /*     ********************************************************   */
    // 百度地图API功能

    var map = new BMap.Map("allmap"); // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.309584, 40.060497), 15); // 初始化地图,设置中心点坐标和地图级别

    map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    // 定位的图标

    var point = new BMap.Point(116.309584, 40.060497);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画


    //点击弹出标注

    //var marker = new BMap.Marker(point);  // 创建标注
    //map.addOverlay(marker);              // 将标注添加到地图中
    //map.centerAndZoom(point, 15);
    var opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "北京总部", // 信息窗口标题
        enableMessage: true, //设置允许信息窗发送短息
        message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
    }
    var infoWindow = new BMap.InfoWindow("上地东路1号盈创动力大厦A座北区401", opts); // 创建信息窗口对象 
    marker.addEventListener("click", function() {
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    });

});
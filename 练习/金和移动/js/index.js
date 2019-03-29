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
    // news轮播
    $('.row-1 .ul-pic').slick({
        // dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed: 3000,
        arrows: true,
        speed: 500,
        cssEase: 'linear'
    });
    $('.row-2 .ul-pic').slick({
        // dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay:true,
        autoplaySpeed: 3000,
        arrows: true,
        speed: 500,
        cssEase: 'linear'
    });

    //tab页切换
    /*
     *tabItem 切换的top页
     *see 控制tab显示的类
     *cls 当前导航的类
     */
    // $.fn.Uitab = function(tabItem,see,cls){
    //     var ui = this;
    //     ui.on('mouseenter',function(){
    //         var index = $(this).index();
    //         // console.log(index);
    //         ui.removeClass(cls).eq(index).addClass(cls);
    //         tabItem.removeClass(see).eq(index).addClass(see);

    //     });

    // };

    // $('.nav li').Uitab($('.nav dl'),'show','on');


    $('.nav li').hover(function() {
        $('dl', $(this)).stop().slideDown();
        $('.nav li').removeClass('on');
        $(this).addClass('on');
    }, function() {
        $('dl', $(this)).stop().slideUp();
        $(this).removeClass('on');
    });

    $('.nav dd').hover(function() {
        $('.nav dd').removeClass('ok');
        $(this).addClass('ok');
    }, function() {
        $(this).removeClass('ok');
    });

    $('.nav').hover(function() {
        $('.nav-sub').stop().slideDown();
    }, function() {
        $('.nav-sub').stop().slideUp();
    });

    $('.nav-sub').hover(function() {
        $('.nav-sub').stop().slideDown();
    }, function() {
        $('.nav-sub').stop().slideUp();
    });


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
        if(Height > 200){
            $('.header').css('backgroundColor','#010508');
        }else{
            $('.header').css('backgroundColor','transparent');
        }
    });
    // 菜单二级菜单效果不好
    $('.icon').mouseenter(function() {
        $('.item1', $(this)).fadeIn(300);
    });
    $('.icon').mouseleave(function() {
        $('.item1', $(this)).fadeOut();
    });

    $('.backTop').click(function() {
        $('body,html').stop().animate({
            scrollTop: '0'
        }, 500);
    });
    // $('.nav li').click(function(){
    //     $('.link').slideUp();
    //     if($('.link:visible',$(this)).size()){
    //         $('.link',$(this)).slideUp();
    //         $(this).removeClass('click');
    //     }else{
    //         $('.link',$(this)).slideDown();
    //         $(this).addClass('click');
    //     }
    // });

// 页面变化去除隐藏的效果
    $(window).resize(function(event) {
        var Width = $(this).width();
        // console.log(Width);
        if(Width > 1198){
            $('.inp1').css('display','block');
            $('.nav').css('display','block');

        }else{
            $('.inp1').css('display','none');
            $('.nav').css('display','none');
        }
    });
    // 输入框 导航条的淡入淡出  太麻烦~ 修改class试试
    var f1 = false;
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
    });
    
});
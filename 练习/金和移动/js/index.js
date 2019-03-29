$(function(){
     $('.banner').slick({
        dots: true,
        slidesToShow:1,
        // autoplay:true,
        autoplaySpeed:3000,
        // fade:true,
        arrows:true,
        speed:500,
        cssEase: 'linear'
    });
     // news轮播
    $('.row-1 .ul-pic').slick({
        // dots: true,
        slidesToShow:3,
        slidesToScroll:1,
        // autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        speed:500,
        cssEase: 'linear'
    });
    $('.row-2 .ul-pic').slick({
        // dots: true,
        slidesToShow:3,
        slidesToScroll:1,
        // autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        speed:500,
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


    $('.nav li').hover(function(){
        $('.nav-sub').stop().slideDown();
        $('dl',$(this)).stop().slideDown();

    },function(){
        $('.nav-sub').stop().slideUp();
        $('dl',$(this)).stop().slideUp();
    });
    

    $('.nav li').click(function(){
        $('.link').slideUp();
        if($('.link:visible',$(this)).size()){
            $('.link',$(this)).slideUp();
            $(this).removeClass('click');
        }else{
            $('.link',$(this)).slideDown();
            $(this).addClass('click');
        }
    });
});
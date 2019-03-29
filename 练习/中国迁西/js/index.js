$(function(){
    $('.slide').slick({
        dots: true,
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:3000,
        fade:true,
        arrows:false,
        speed:500,
        cssEase: 'linear'
    });

    // 迁西快讯的轮播
    $('.m-slide').slick({
        dots: true,
        slidesToShow:1,
        // autoplay:true,
        autoplaySpeed:3000,
        // 淡入淡出效果
        fade:true,
        arrows:false,
        speed:500,
        cssEase: 'linear'
    });
     // 窄轮播1
    $('.m-slide1').slick({
        dots: true,
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
        speed:500,
        cssEase: 'linear'
    });
    // 窄轮播2
    $('.m-slide2').slick({
        dots: true,
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
        speed:500,
        cssEase: 'linear'
    });

    // tab标签切换
    /*
        *tabItem 切换的top页
        *see 控制tab显示的类
        *cls 当前导航的类
    */
    $.fn.Uitab = function(tabItem,see,cls){
        var ui = this;
        ui.on('mouseenter',function(){
            var index = $(this).index();
            console.log(index);
            ui.removeClass(cls).eq(index).addClass(cls);
            tabItem.removeClass(see).eq(index).addClass(see);

        });

    };

    $('.ul-tab li').Uitab($('.tab-items .g-list'),'show','on');
    // 底部 二级菜单
   
    var ulTab1 = $('.ul-tab1 li');
    var dropMenu = $('.g-dropmenu');
    
    ulTab1.click(function () {
        var dropMenuItem = $('.g-dropmenu',$(this));        
        var state = dropMenuItem.css('display');
        var arrows = $('.item',$(this));
        dropMenu.stop().slideUp();
        if(state == 'none'){
            arrows.css(
                'background',"url('images/up.png') center right  no-repeat"
            );
            dropMenuItem.stop().slideDown();
        }else{
            arrows.css(
                'background',"url('images/down.png') center right  no-repeat"
            );
            dropMenuItem.stop().slideUp();
        }
        return false;
    });

    $('body').click(function(){
        dropMenu.stop().slideUp();
        $('.item',ulTab1).css(
                'background',"url('images/down.png') center right  no-repeat"
        );
    });

    dropMenu.click(function(){
        $(this).css('display','block');
        return false;
    });

    
});



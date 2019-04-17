$(function() {
    // 轮播
    $('.banner').slick({
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 960,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });

// 滚动达到某一高度给head添加阴影效果
var $head = $('.header'); 
var headHeight = $head.height();
    $(window).scroll(function(event) {
        var _sTop = $(window).scrollTop();

        if(_sTop > headHeight){
            $head.addClass('fixed');
        }else{
            $head.removeClass('fixed'); 
        }
    });


    // 二维码展开效果
    var down = $('.down');
    down.hover(function(event) {
        $(this).addClass('act');
        $('.ma',$(this)).stop().slideDown();
    },function(){
        $(this).removeClass('act');
        $('.ma',$(this)).stop().slideUp();
    });
});
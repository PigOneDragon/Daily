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
        /*responsive: [{
            breakpoint: 960,
            settings: {
                arrows: false,
                dots: true
            }
        }]*/
    });
    // 资质
    $('.ul-pic').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        // dots: true,
        centerMode: true,
        centerPadding: '0px',
        // speed: 500,
        // cssEase: 'linear',
        /* responsive: [{
             breakpoint: 960,
             settings: {
                 arrows: false,
                 dots: true
             }
         }]*/
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
        /* responsive: [{
             breakpoint: 960,
             settings: {
                 arrows: false,
                 dots: true
             }
         }]*/
    });
    // 合作伙伴
    $('.m-ban1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        speed: 500,
        cssEase: 'linear',
    });


    // 滚动达到某一高度给head添加阴影效果
    var $head = $('.header');
    var nowSh = $(document).scrollTop();
    var headHeight = $head.height();
    // 页面初始化判断
    if(nowSh > headHeight){
        $head.addClass('fixed');
    }
    $(window).scroll(function(event) {
        var _sTop = $(window).scrollTop();

        if (_sTop > headHeight) {
            $head.addClass('fixed');
        } else {
            $head.removeClass('fixed');
        }
    });

    // 搜索按钮
    var btn = $('#soBtn');
    var inp = $('.hdr form');
    btn.click(function(e){
        inp.toggleClass('open');
        inp.click(function(){
            $(this).addClass('open');
            return false;//bug影响了submit的默认事件
        });
        return false;
    });

    // 二维码展开效果
    var down = $('.down');
    down.hover(function(event) {
        $(this).addClass('act');
        $('.ma', $(this)).stop().slideDown();
    }, function() {
        $(this).removeClass('act');
        $('.ma', $(this)).stop().slideUp();
    });
    // 返回顶部
    $('.backTop').click(function() {
        $('body,html').stop().animate({
            scrollTop: '0'
        }, 500);
        return false;
    });
    $('body').click(function(){
        inp.removeClass('open');
    });

});
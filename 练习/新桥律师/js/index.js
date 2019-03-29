$(function(){
    $('.banner').slick({
        dots: true,
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:3000,
        // fade:true,
        arrows:false,
        speed:500,
        // customPagimg:function(){
       	// 	return ' ';
        // },
        cssEase: 'linear'
    });
    var icon = $('li','#icons');
    icon.mouseenter(function(event) {
        icon.removeClass('on').eq($(this).index()).addClass('on');
    });

});
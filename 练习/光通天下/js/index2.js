$(function(){
	// 轮播
    $('.banner-pics').slick({
        dots: true,
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        speed:500,
        cssEase: 'linear'
    });
    $('.ul-pic1').slick({
        dots: false,
        slidesToShow:4,
        slidesToScroll:4,
        // autoplay:true,
        autoplaySpeed:3000,
        // arrows:true,
        speed:500,
        cssEase: 'linear'
    });
    // 导航栏的二级菜单
    var headLinks = $('.nav li');
    var	subLink = $('.nav-link-item');
    var box = $('.box');
    
    headLinks.mouseenter(function() {
        subLink.stop().slideDown();
        box.stop().slideDown();
    });
    headLinks.mouseleave(function() {
        subLink.stop().slideUp();
        box.stop().slideUp();
    });


   // 案例部分
   var cases = $('.case-item');
   var caseItem = $('.item',cases);
   cases.mouseover(function(){
   		cases.removeClass('open').eq($(this).index()).addClass('open');
   });

   // 图片切换
   $.fn.Pichover = function() {
      var ui = $(this);
      var imgs =null;
      ui.hover(function(){
        imgs = $('img',$(this));
        imgs.toggleClass('hide');
      },function(){
        imgs = $('img',$(this));
        imgs.toggleClass('hide');
      });
   }
   $('.item-pic').Pichover();

   // alert($(window).width());
   //案例图片宽度固定
   $('img','.item-col-l').width($(window).width()*.4);

});
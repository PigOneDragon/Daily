$(document).ready(function($) {

    // PC导航
    $('.nav .hasub').mouseenter(function(event) {
        /* Act on the event */
        $('.nav_sub').slideDown(200);
    });
    $('.header').mouseleave(function(event) {
        /* Act on the event */
        $('.nav_sub').slideUp(200);
    });

    var _winw = $(window).width();
    var _winh = $(window).height();
    // 手机导航
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        
        if( $(this).hasClass('open') ){
            if( _winw<=1199 ){
                $('.nav').animate({
                    right: '0'
                }, 200);
            }
        }else{
            if( _winw<=1199 ){
                $('.nav').animate({
                    right: '-360px'
                }, 200);
            }
        }
    });
    $(window).on('resize', function (e) {
        if(_winw > 1200) {
            $('.menuBtn').removeClass('open');
            $('.nav').css('right', '-360px');
        }
    });

    // if(_winw < 1200){
    //     if ($(".nav li").find('dl').length) {
    //         $(".nav li").find("dl").siblings("a").attr("href","javascript:;")
    //     } ;
    // }



    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function(){
      var tab=$(this).parent(".TAB_CLICK");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });
    $('.TAB_CLICK').each(function(index, el) {
        $(this).children('li').filter(':first').trigger('click');
    });



    $(".TAB_CLICK-a .team").click(function(){
      var tab=$(this).parent(".TAB_CLICK-a");
      var con=tab.attr("id");
      var on=tab.find(".team").index(this);
      $(this).addClass('on').siblings(tab.find(".team")).removeClass('on');
      $(con).eq(on).addClass('show').siblings(con).removeClass('show')
    });
    
    $('.TAB_CLICK-a').each(function(index, el) {
        $(this).children('.team').filter(':first').trigger('click');
    });



      $(".TAB_CLICK-01 li").mousemove(function(){
        var tab=$(this).parent(".TAB_CLICK-01");
        var con=tab.attr("id");
        var on=tab.find("li").index(this);
        $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
        $(con).eq(on).show().siblings(con).hide();
    });

    $('.TAB_CLICK-01').each(function(index, el) {
        $(this).find("li").filter(':first').trigger('click');
    });
    
    $(".TAB_CLICK1 li").click(function(){
      var tab=$(this).parent(".TAB_CLICK1");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).addClass('show').siblings(con).removeClass('show');
    });
    $('.TAB_CLICK1').each(function(index, el) {
        $(this).children('li').filter(':first').trigger('click');
    });
})
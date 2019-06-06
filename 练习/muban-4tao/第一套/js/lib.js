$(document).ready(function($) {

  
    //pc站下拉菜单
    $('.nav > li').hover(function() {
        if ($(window).width() <= 768) return;
        // $(this).find('.sub').slideDown(200);
        $(this).find('.sub').show().addClass('ani');

    }, function() {
        if ($(window).width() <= 768) return;
        $('.sub').removeClass('ani').stop();
    });



    var _winw = $(window).width();
    var _winh = $(window).height();
    // 手机导航
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        
        if( $(this).hasClass('open') ){
            if( _winw<=767 ){
                $('.nav').slideDown();
            }
        }else{
            if( _winw<=767 ){ 
                $('.nav').slideUp();
            }
        }
    });
    // 二级菜单
    var sub =$('.nav .sub');
   

    $('.nav .v1').click(function(){
        sub.stop().slideUp("fast");
        // 捕获当前对象判断其下的二级是否隐藏
        if($(this).siblings('.sub').css('display') == 'none'){
            $(this).siblings('.sub').stop().slideDown("fast");
      
        }else{
            $(this).siblings('.sub').stop().slideUp("fast");      
        }
        return false;
    });

    $(window).on('resize', function (e) {
        var _winw =$(window).width();
        if(_winw > 767) {
            $('.menuBtn').removeClass('open');
            $('.nav').css('display', 'block');
            sub.css('display', 'none');
        }else{
            $('.nav').css('display', 'none');
        }
    });



    
    // logo动画
    $('.logo').hover(function(){
        $(this).addClass('tada');
    },
    function(){
        $(this).removeClass('tada');
    });

    // 选项卡 鼠标点击
    
    $(".TAB_CLICK-a li").click(function(){
      var tab=$(this).parent(".TAB_CLICK-a");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });
    
    $('.TAB_CLICK-a').each(function(index, el) {
        $(this).children('li').filter(':first').trigger('click');
    });


    // 滚动大于页面一半显示返回顶部按钮
    var $backTop = $('.backTop');
    var nowSh = $(document).scrollTop();
    var docH = $(document).height();
    // 返回顶部的闲事隐藏
    function backTopShow(nowSh,docH) {
        if (nowSh > docH / 2) {
            $backTop.show();
        } else {
            $backTop.hide();
        }
    }
    // 刷新时判断
    backTopShow(nowSh,docH);
    
    $(window).scroll(function(event) {

        var _sTop = $(window).scrollTop();
        var header = $('.header');
        var _winw =$(window).width();
        backTopShow(_sTop,docH);
     
        // 导航条脱离文档流
        if( _winw<=767 ){
            if(_sTop > 50){
                header.css('position','fixed');
                header.addClass('fixed'); 
                $('.nav').addClass('fixed');
                $('.logo').addClass('fixed'); 
            }else{
                header.css('position','static');
                 header.removeClass('fixed');
                $('.nav').removeClass('fixed');
                $('.logo').removeClass('fixed'); 
            }
        }

    });
    // 点击侧边显示二维码
    var qr = $('.m-qr'),
        closeBtn =$('.close'),
        rightIcon = $('.rightIcon');

    if( _winw > 767){
        qr.show();
    }
    rightIcon.on('click',function(){
        qr.slideDown();
        $(this).hide();
        return false;
    });
    closeBtn.on('click',function(){
        qr.slideUp();
        rightIcon.show();
        return false;

    });

    // 招聘信息列表点击展开
    var zpLi = $('.m-zpinfo li');
   /* console.log(zpLi);
    zpLi.on('click',function(){
        zpLi.removeClass('on').eq($(this).index()).addClass('on');
        $('.con',this).slideToggle();
        return false;
    });*/

    zpLi.click(function(){
        $('.con',zpLi).stop().slideUp("fast");
        zpLi.removeClass('on');
        var con = $('.con',this);
        if(con.css('display') == 'none'){
            con.stop().slideDown("fast");
            con.parent("li").addClass('on');       
        }else{
            con.stop().slideUp("fast");
            con.parent("li").removeClass('on');       
        }
        return false;
    });
    
    zpLi.filter(':first').trigger('click');
     // 返回顶部
    $('.backTop').click(function() {
        $('body,html').stop().animate({
            scrollTop: '0'
        }, 500);
        return false;
    });
})
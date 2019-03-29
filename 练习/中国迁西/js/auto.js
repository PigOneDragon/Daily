// 监听屏幕尺寸变化
window.onresize=function(){  
     var width = $(window).width();  
     console.log(width);
     if(width > 1150){
        $('.nav').removeClass('open');
        $('.navbar-btn').removeClass('act');
     };
    }  



// 响应式
    // $('.menubtn').click(function() {
    //     $('.nav').toggleClass('open');

    //     $('i',this).toggleClass('show');
    // });

    $('.navbar-btn').click(function(){
            $('.nav').toggleClass('open');
            $(this).toggleClass('act');
       });


$(function(){
	var navList = $('.nav li');
	navList.mouseenter(
		function(){
			navList.removeClass('on').eq($(this).index()).addClass('on');
		},
	);
	// 轮播
	$('.slide').slick({
        dots: true,
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        speed:500,
        cssEase: 'linear',
    });
    // 底部轮播
    $('.fd-slide').slick({
        dots: false,
        slidesToShow:1,
        // autoplay:true,
        autoplaySpeed:3000,
        // arrows:false,
        speed:500,
        cssEase: 'linear'
    });
    //tab页切换
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

    $('.ul-tab li').Uitab($('.ul-tab-item'),'show','tab');

    // 专业服务的tab页
    $('.ul-pic1 li').Uitab($('.row-s1'),'show','ck');


    // 侧边栏
    var telList = $('.m-tellist');
    $('#tel').hover(function(){
    	telList.css('display','block');
    },
    	function(){
    		telList.css('display','none');
    	}
    );
    telList.hover(function(){
    	telList.css('display','block');
    },
    	function(){
    		telList.css('display','none');
    	}
    );
    // 返回顶部
    $('#top').click(function(){
    	 $('html,body').animate({
            'scrollTop': 0
        }, 300);
    });

})
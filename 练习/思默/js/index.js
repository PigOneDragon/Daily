$(function() {
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });


    // 多选框
    $('[role=checkbox]').each(function() {
        var input = $(this).find('input[type="checkbox"]');
        // console.log(input);
        input.each(function() {
            if ($(this).attr('checked')) {
                $(this).parents('label').addClass('checked');
                $(this).prop("checked", true)
            }
        })
       
        input.change(function() {
            $(this).parents('label').toggleClass('checked');
        });
    });


    // 管理平台
    var pt = $('.h-pt');
    var infoPt = $('.info', pt);
    pt.mouseenter(function() {
        infoPt.stop().slideDown();
    });
    pt.mouseleave(function() {
        infoPt.stop().slideUp();
    });


 // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function() {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
        return false;
    });
// $('.TAB_CLICK').each(function(index, el) {
//         $(this).children('li').filter(':first').trigger('click');
//     });

})
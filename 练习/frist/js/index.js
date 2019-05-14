$(function() {
    //底部切换
    var fdNav = $('.m-fd li');
    fdNav.on('click', function(event) {
        fdNav.removeClass('on').eq($(this).index()).addClass('on');
    });


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
})
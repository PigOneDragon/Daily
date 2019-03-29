function isScrolledIntoView(elem) {
    elem = $(elem);
    var win = $(window);
    var docViewTop = win.scrollTop();
    var docViewBottom = docViewTop + win.height();
    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();
    var a = (elemTop > docViewBottom);
    if (a) { return false; } //还没到
    var b = (elemBottom > docViewTop); //超过了
    if (!b) { return false; } //没超过
    return !(a && b);
}

$(document).ready(function() {
    
    $(window).scroll(function(event) {
        $('[rel*="animated"]').css('opacity', 0);
        $('.js-box').each(function(index, el) {
            if( isScrolledIntoView($(this)) ){
                $(this).addClass('animated fadeInLeft').css('opacity', 1);
                $(this).find('[rel*="animated"]').each(function(i) {
                    var _this = $(this);
                    var _class = _this.attr('rel');
                    setTimeout(function(){
                        _this.addClass(_class).css('opacity', 1);
                    },i*1000);
                });
            // }else{
            //     $(this).removeClass('animated fadeInLeft');
            //     $(this).find('[rel*="animated"]').each(function(i) {
            //         var _this = $(this);
            //         var _class = _this.attr('rel');
            //         _this.removeClass(_class);
            //         _this.css('opacity', 0);
            //     });
            }
        });
    });

    $('.goTop').click(function(){
        $('body,html').stop().animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('.m-trigger').click(function(e){            
        $('.m-nav').stop().slideToggle(400);
        e.stopPropagation();
    });


});
   


$(window).load(function(){

});

jQuery(document).ready(function($) {

	// 菜单
	$('.menu-btn').click(function(e){
		$('#pop-menu').stop().slideToggle(400);
		e.stopPropagation();
	});
	$('#pop-menu').click(function(e){
		e.stopPropagation();
	});
	$('body').click(function(){
		$('#pop-menu').slideUp(400);
	});

	$('.a-weix').hover(function() {
		$(this).find('.pop-con').stop().slideToggle('fast');
	});

	// 右侧通栏
	$('#sideKefu li').hover(function(){
		$(this).toggleClass('ok');
	});

	$('#sideKefu .toTop').click(function(){
		$('body,html').animate({
			scrollTop:0
		},500);
	});

	// 选项卡 鼠标点击
	$(".TAB li").click(function(){
		var $vv=$(this).parent(".TAB").attr("id");
		$($vv).hide();
		$(this).parent(".TAB").find("li").removeClass("on");
		var xx=$(this).parent(".TAB").find("li").index(this);
		$($vv).eq(xx).show();
		$(this).addClass("on");
	});


	// 自定义单选按钮
	$('.label-radio').click(function(){
		var _name = $(this).find('input').attr('name');
		$('input[name='+_name+']').parents('.label-radio').removeClass('checked');
		$(this).addClass('checked');
	});

   // 自定义文件上传样式
   $(".img-file .file-label input").on("change", function(){
       var files = !!this.files ? this.files : [];
       if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
       var myid = $(this).parents('.file-label');
       var myspan = $(this).prev('span');

       if (/^image/.test( files[0].type)){ // only image file
           var reader = new FileReader(); // instance of the FileReader
           reader.readAsDataURL(files[0]); // read the local file

           reader.onloadend = function(){ // set image data as background of div
               myid.css({
	               	"background-image":"url("+this.result+")",
	               	'background-repeat':'no-repeat'
	           });
	           myspan.hide();
           }
       }
   });

   $('.nice-file :file').on('change',function(){
	   	var $_inp = $(this).parents('.file-label').find('.file-inp');
	   	if( $_inp.is('input') ){
		   	$(this).parents('.file-label').find('.file-inp').val($(this).val());
	   	}else{
		   	$(this).parents('.file-label').find('.file-inp').text($(this).val());
	   	};
   });
   

});


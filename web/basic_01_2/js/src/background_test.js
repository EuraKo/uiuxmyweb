(function($){
$('html,body').css({height:'100%'});

var attOffset_3=$('.at_3').offset().top;
var bH=$('body').height();
var customOffset_3= attOffset_3 - bH;
console.log(customOffset_3);

$(window).on('scroll',function(){
	var scrollOffset = $(this).scrollTop();
$('.at_1').css({backgroundPosition:'center '+ -scrollOffset+'px'})
	
 //첫면에 보일때부터 내려가게

	if(customOffset_3<=scrollOffset){
		var gap=scrollOffset -customOffset_3;
		$('.at_3').css({backgroundPosition:'center '+ -gap/3+'px'})
	}
});


})(this.jQuery);
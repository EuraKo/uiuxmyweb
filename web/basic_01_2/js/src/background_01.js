(function($){

$('html,body').css({height:'100%'});
	//.attachment 의 위치가 상단에서 얼마나떨어져있는지 확인 100%를 주는건 도큐먼트내가보는 화면비율상이 100%가 된다
var attOffset=$('.attachment').offset().top;
// console.log(attOffset);

// + 브라우져 내부의 높이값 확인
// var dH=$('body').height();
//height()에 수치를 주면 바디의 높이값이 바뀜 안쓰면 높이값을 가져오는것임 너값이 얼마니?
/* 주어진 크기 값을 가져오는 방법
* width,height모두 메소드에서 값을 입력하지않고 처리하면 파악하는 기능
* width(),innerWidth(),outerWidth(),outetWidth(true)
* height(),innerHeight(),outerHeight(),outerHeight(true)

width() : 가로값 파악(그냥 가로값)
innerWidth() ; 가로값 파악(padding값을 포함한)
outerWidth() ; 가로값 파악(margin을 제외한 나머지,border값을 포함)
outetWidth(true) ; 가로값 파악(margin까지 포함)
*/
// console.log(dH);

//offset().top값 변경
// var customOffset=attOffset - dH;
// console.log(customOffset);

//브라우져 상에서 스크롤바가 움직였을때 이벤트처리
$(window).on('scroll',function(){
	//스크롤으 ㅣ위치가 어디에 있는지 파악
	var scrollOffset = $(this).scrollTop();
	//이것(원도우)값의스크롤탑의 값을 가져와라 이것을 스크롤 옵셋이라고 하곘다.
	// console.log(scrollOffset);

//attOffset변수값과 scrollOffser변수값이 일치하거나 스크롤이 그 이상처리되면 효과를 발휘
	if(attOffset<=scrollOffset){
		// console.log(scrollOffset - customOffset);
		var gap=scrollOffset - attOffset;
		$('.attachment').children('div').css({backgroundPosition:'center '+ -gap/3+'px'}) //center gappx +이어붙히는것 -수치에대한것 이미지가 위로올라가야하기떄문에 -주는것
	}
});


})(this.jQuery);
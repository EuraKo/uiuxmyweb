//rwd.js
(function($){

// $('#headBox').css({'backgroundColor':'#aff'});


// max 480
// max 767
// max 1366
// min 1367~
var rwd = function(){
	var rwdW = parseInt($(window).width());
	var mob = 480;
	var tab=768;
	var pc = 1366;

	if(rwdW <= mob){
		$('#headBox').css({'backgroundColor':'#aff'});
		$('#bannerBox').css({'backgroundColor':'#9a0','borderBottom':'1px solid #333'});
		$('#contentBox').css({'backgroundColor':'#9a0','borderBottom':'1px solid #333'});
		$('#footBox').css({'backgroundColor':'#9a0','borderBottom':'1px solid #333'});
		//객체안에는 따옴표안붙혀도 무상관 백그라운드컬러

	}else if( mob < rwdW && rwdW < tab){
	// &&둘다 참일때 라는 뜻 mob<rwdW<tab은 안먹음 
			$('#headBox').css({'backgroundColor':'#a4f'});
		$('#bannerBox').css({'backgroundColor':'#a90','borderBottom':'1px solid #333'});
		$('#contentBox').css({'backgroundColor':'#a90','borderBottom':'1px solid #333'});
		$('#footBox').css({'backgroundColor':'#a90','borderBottom':'1px solid #333'});
}else if(rwdW >= tab && rwdW <= pc){
		$('#headBox').css({'backgroundColor':'#677'});
		$('#bannerBox').css({'backgroundColor':'#0af','borderBottom':'1px solid #333'});
		$('#contentBox').css({'backgroundColor':'#0af','borderBottom':'1px solid #333'});
		$('#footBox').css({'backgroundColor':'#0af','borderBottom':'1px solid #333'});
}else{
		$('#headBox').css({'backgroundColor':'#afd'});
		$('#bannerBox').css({'backgroundColor':'#ccc','borderBottom':'1px solid #333'});
		$('#contentBox').css({'backgroundColor':'#aaa','borderBottom':'1px solid #333'});
		$('#footBox').css({'backgroundColor':'#ddd','borderBottom':'1px solid #333'});
}
};
rwd();
// 함수를 호출하여 뜨자마자 적용시키위해적는것  최초에 떳을때 반응하게하는것


// parseInt() 주어진 값을 정수형 숫자로 변환처리
// 예 : 40px -> parseInt(40px) -> 40
//  예 :43.3 -> parseInt(43.3) -> 43

var $w = parseInt($(window).width());
$(window).on('resize',function(){
var nowW = parseInt($(window).width());
// width를 두번쓰는 이유는 변경전과 변경후의 값을 비교하기위해
if($w != nowW){
	//location.reload();
	rwd();//비동식처럼적용시키는것
}
});



})(this.jQuery);
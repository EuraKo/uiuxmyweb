(function($){
// 각 영역에따른 함수이름 지정
// var basic = function() {}; //ie 기준으로 동작되게 처리!
//var Device = function(){

var mob    = function() {
	var menuBtn = $('.menu_btn');
	menuBtn.on('click',function(e){
		e.preventDefault();
		var gnb = $('#gnb');
		var gnbView = gnb.hasClass('view'); //뷰가 있다면 참이고 없다면 거짓이야
		if(gnbView){
			gnb.removeClass('view');
		}else{
			gnb.addClass('view');
		}//있으면 더하고 없으면 뺴버려라
		// $('#gnb').toggleClass('view');
	});
};
var tabV   = function() {};
var tabPc  = function() {};
var pcFull = function() {};

// var deviceVal = {
// 	mob    :mob(),
// 	tabV   :tabV(),
// 	tabPc  :tabPc(),
// 	pcFull :pcFull()
// };
// return deviceVal; 
//};


// var mob = function() {$('body').animate({'backgroundColor':'#1a9'},100);};
// var tabV = function() {$('body').animate({'backgroundColor':'#2b5'},100);};
// var tabPc = function() {$('body').animate({'backgroundColor':'#3c3'},100);};
// var pcFull = function() {$('body').animate({'backgroundColor':'#4d1'},100);};
// 쿼리가 css보다 딜레이가느려서 애니메이션안줄꺼면 css로 하는거 좋음
//-----------------------------------------------------

//반응형웹 사이즈 고려한 기준 작업 설정하기
var Rwd = function(){
	var winW = $(window).width();
var rwdSize = [480, 768, 1366];
if (winW <= rwdSize[0]){
	mob(); //각 영역 기능 함수로 호출 mob();
}else if(rwdSize[0] < winW && winW < rwdSize[1]){
	tabV(); //각 영역 기능 함수로 호출 tabV();
}else if(rwdSize[1] <= winW && winW <= rwdSize[2]){
	tabPc(); //각 영역 기능 함수로 호출 tabPc();
}else{
	pcFull(); //각 영역 기능 함수로 호출 pcFull();
}
};//Rwd
Rwd();
//-----------------------------------------
//브라우저 가로사이즈 변경시 정해진 함수 재실행
var $w = $(window).width();
$(window).on('resize',function(){
var $nw = $(window).width();
if($w !== $nw){
	 location.reload();
	//Rwd();
}

});
// ----------------------------------------------

})(this.jQuery);



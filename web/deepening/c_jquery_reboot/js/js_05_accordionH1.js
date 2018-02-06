// js_05_accordionH1.js
(function($){
  // 1.show(),hide() method 이용
  // keyboard focus 기능도 같이 처리
  var bannerDt = $('#bannerBox').find('dt');
var myfocus = 'focus';//addClass이름을 줄떄의 값을 넣으면 된다.
$('dt').eq(0).addClass(myfocus);

/*
//스텝_01
var myFocus = function(){

  $('.focus').next('dd').siblings('dd').hide();
  $('.focus').next('dd').show();
};//함수쓸떄 규칙 항사 변수써라 펑션뒤에 중괄호가 시작하면 줄바꿈하기
myFocus();
//dt에 키보드 포커스가 잡히면
bannerDt.find('a').on('focus',function(e){
  e.preventDefault();
  var _this = $(this).parent();
  _this.siblings('dt').removeClass('focus');
  _this.addClass('focus');
  myFocus();

});
*/
var banner = $('#bannerBox');
var bannerDd = banner.find('dd');
var bannerBlink = [
                parseInt(bannerDd.css('paddingLeft')),
                parseInt(bannerDd.css('paddingRight')),
                parseInt(bannerDd.css('width'))
                ];
  console.log(bannerBlink);
var myShow = function(result){
  var focusNext = $('.'+result).next('dd'); //.result=.myfocus
  var focusSiblings = focusNext.siblings('dd');

focusSiblings.find('.shot').stop().fadeOut(100,function(){
focusSiblings.stop().animate({width:0,paddingLeft:0,paddingRight:0},function(){
focusSiblings.css({display:'none'});

});
});

focusNext.css({display:'block'});
focusNext.stop().animate({paddingLeft:bannerBlink[0],
                  paddingRight:bannerBlink[1],
                  width:bannerBlink[2]},function(){
   focusNext.find('.shot').fadeIn();               
    });
};//myShow();
myShow(myfocus);

//dt에 키보드 포커스가 잡히면
bannerDt.find('a').on('focus',function(e){
  e.preventDefault();
  var _this = $(this).parent();
  _this.siblings('dt').removeClass('focus');
  _this.addClass('focus');
  //myFocus(); //step1기능
  myShow(myfocus); //step2기능
});
})(this.jQuery);


















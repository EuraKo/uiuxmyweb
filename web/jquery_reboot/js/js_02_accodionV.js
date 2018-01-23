// js_02_accodionV.js
(function($){
// $('dd').hide();//켜질때 약간딜레이되서 켜짐
//slideDown(), slidUp()
//next();,siblings()
// $(this)
/* 선택자.on('click',function(){});
  선택한것.바로뒤.보이기;
  $(this).next(); 
  선택한것의 형제중 동요소.사라지기
*/

var accDt = $('.accordion').find('dt');

accDt.on('click',['button'],function(e){
  e.preventDefault();
  var _this = $(this);
  // console.log(_this.index());

  // _this.next('dd').siblings('dd').stop().slideUp();//stop은 애니메이션들어가면 넣어줘야하는것임
  // _this.next('dd').stop().slideToggle();


_this.next('dd').siblings('dd').stop().slideUp();

var ddView = _this.next('dd');
var ddBlock = ddView.css('display') == 'block';
if(!ddBlock){
  // 보이지 않으면 -> 나타나기!
  ddView.slideDown();
}else{
  //보이면 -> 숨기고
  ddView.slideUp();
}



});
})(this.jQuery);



















// js_01_showHide.js
(function($){

// show(),hide(),toggle()
// fadeIn(),fadeOut(),fadeToggle()
// slideDown(),slideUp,slideToggle()
// addClass(),removeClass(),toggleClass()

// 선택자.on('click',콜백함수(인수){인자.prevrntDefault(); });

// 1.
// 선택자 가져오기
var btn = $('#navigation').find('li');
var par = $('p');
var timed = 500;
var easing = 'easeInBounce';
var myindex = function(i){
switch(i){
  //if문은 단수분기라고해서 이거아님 저거 ,범위값을지정
  //switch는 딱하나만 지정하는것 일치하면 이렇게 하세요.예)전화번호단축키
  case 0:
  par.show(timed); break;

  case 1:
  par.hide(timed,easing); break;

  case 2:
  par.toggle(timed,easing); break;

  case 3:
  par.fadeIn(timed,easing); break;

  case 4:
  par.fadeOut(timed,easing); break;

  case 5:
  par.fadeToggle(timed,easing); break;

  case 6:
  par.slideDown(timed,easing); break;

  case 7:
  par.slideUp(timed,easing); break;

  case 8:
  par.slideToggle(timed,easing); break;

  case 9:
  par.removeAttr('style');
  // par.addClass('show',1000);//여기는delay값으로 먹음
  par.delay(timed).addClass('show');//이것이더좋은식
  break;

  case 10:
  par.removeAttr('style');
  par.removeClass('show'); break;

  default:
  par.removeAttr('style');
  par.toggleClass('show');//이중에없다면 어떤 것이든 관계없이 토글클래스로하겠다
  
}

};


// btn.on('click',['a'],function(e){
// //['a']를 한번더 다는게 좋은표햔 왜냐면 정확히 a라고 지정해주는것 안써도 상관없음
//   e.preventDefault();
// // console.log($(this).index() );
// var i = $(this).index();
// myindex(i);
// }); //눌러야 순서파악

//$.each([배열], 함수(순서,값){});

// $.each(btn,function(index,value){
//   console.log(index,value);
// });
btn.each(function(i){//갯수를 먼저파악하고 재생하겠다. i(=index)는 던져들어가는 값임
  $(this).on('click', function(e){
    //console.log(i); //이거찍으면 0부터 쭉11까지나옴
    e.preventDefault();
console.log(i);
myindex(i);//클릭하면 몇번째값이니 
  });
});

})(this.jQuery);
  



























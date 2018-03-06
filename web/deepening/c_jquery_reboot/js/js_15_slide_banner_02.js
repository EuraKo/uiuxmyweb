// js_15_slide_banner_02.js
(function($){
  /* step1 ------------------------------------------------*/
// 1. tebindex
// 2. 인디케이터 클릭시 처리
// 3. 좌우 버튼을 클릭
// 4. 자동 슬라이드 기능(setInterval(), clearInterval())
// ----------------------------------------------------------
// 변수지정
var bannerBox = $('#bannerBox');
// banner이미지영역
var bannerWrap = bannerBox.find('.banner_wrap');
var bannerLi = bannerWrap.find('li');
// 인디케이트 영역
var indi = bannerBox.find('.indicator');
var indiLi = indi.find('li');
var indiP = indi.find('p');
var indiNow = indi.find('.now');
var indiTotal = indi.find('.total');
// 좌,우 버튼 영역
var btn = bannerBox.find('.btn');
var lbtn = btn.find('.lbtn');
var rbtn = btn.find('.rbtn');
// 자동스라이드에 대한 변수지정
var myAutoSlide,startSlide,stopSlide; //start와 stop은 호이스팅현상으로 끌어올려짐
var timed = 3000;

// -----------------------------------------------------------

//  - tabindex 제거(첫번째 배너의링크는 tabindex를 0으로 처리하여 사용)
var myTab = function(i){
bannerLi.find('a').attr('tabindex','-1');
bannerLi.eq(i).find('a').attr('tabindex','0');
};
myTab(0);

var bannerSlideI = function(i){
 if(i < 0){i = bannerLi.length-1}
 if(i>=bannerLi.length){i = 0}
      console.log(i);
      //myIndex>bannerLi.length -1과 같음


  indiLi.removeClass('focus');
  indiLi.eq(i).addClass('focus');
  bannerLi.eq(i).prevAll().fadeOut();
  bannerLi.eq(i).fadeIn();
  bannerLi.eq(i).nextAll().fadeIn();
  myTab(i);
  indiNow.text(i+1);

  myIndex =i;
  return myIndex;
};

// indicator 배너갯수파악(배너숫자표기)
indiNow.text('1');
indiTotal.text(bannerLi.length);

//  - 1.인디케이터 클릭시 fade효과
// .첫 인디케이트, (.focus)
indiLi.eq(0).addClass('focus');

var myIndex = 0;

indiLi.on('click',['a'],function(e){
  e.preventDefault();
  var _this = $(this);
  myIndex = _this.index();
  // var를 안쓰는건 위에 변수를 지정해서 여기에서 눌러서 숫자를 가져와 밑에 btn에 같이 값을 주기위해
  // return이 값을 반환해 위(변수)로 올려주는것 

/*1차로 사용했던 흔적 변수로 지정해 밑으로 불러옴
//   indiLi.removeClass('focus');
//   indiLi.eq(_thisI).addClass('focus');
//   bannerLi.eq(_thisI).prevAll().fadeOut();
//   bannerLi.eq(_thisI).fadeIn();
//   bannerLi.eq(_thisI).nextAll().fadeIn();

// myTab(_thisI);
// // 배너위치에 따른 tabindex 변경
// //   bannerLi.find('a').attr('tabindex','-1');
// // bannerLi.find('a').eq(0).attr('tabindex','0');
// // 배너 위치에 따른 배너 숫자변경
// indiNow.text(_thisI+1);
*/
bannerSlideI(myIndex);
});

//  -  선택의 index값을 가져와서 해당 배너의 링크를 tabindex를 0으로 변경


//  - 2. 좌,우 버튼을 클리기시 배너의 내용이 나타나게 만들기
btn.find('button').on('click',function(e){
  e.preventDefault();
  var _this = $(this);
  // if(_this[0]==lbtn[0]){myIndex--}else{myIndex++;}
  (_this[0] == lbtn[0]) ? myIndex-- : myIndex++;
console.log(myIndex);

/*1차로 사용했던 흔적 변수로 지정해 밑으로 불러옴
//   indiLi.removeClass('focus');
//   indiLi.eq(myIndex).addClass('focus');
//   bannerLi.eq(myIndex).prevAll().fadeOut();
//   bannerLi.eq(myIndex).fadeIn();
//   bannerLi.eq(myIndex).nextAll().fadeIn();

// myTab(myIndex);
// // 배너위치에 따른 tabindex 변경
// //   bannerLi.find('a').attr('tabindex','-1');
// // bannerLi.find('a').eq(0).attr('tabindex','0');
// // 배너 위치에 따른 배너 숫자변경
// indiNow.text(myIndex+1);
*/
bannerSlideI(myIndex);
 });
//  - indicator 위치까지 변경 (.focus)
//  - 처음과, 마지막위치에서 어떻게 할 것인가?

//  자동 슬라이드 기능처리 
/*
setInterval() :일정 시간 마다 수행하는 기능 
clearInterval() : stInternal() 메소드를 삭제하는 기능 
setTimeout() : 일정시간이 흐른뒤에 수행 (delay()기능과 약~~~간 비스무리하다.)
*/

var startSlide = function(){
  myAutoSlide = setInterval(function(){ 
    // rbtn.unbind('click');//버블링현상을 막기위함 버블링현상이란?3초마다 클릭하게했는데 달라지는 시간으로 인해 초수가 늘어나게 된다. 여기선 clearInterval 때문에 안씀 쓰면 안됨.
    rbtn.trigger('click'); 
  },timed);};

var stopSlide = function(){ clearInterval(myAutoSlide);}

startSlide();
// bannerBox.on('mouseenter',function(){stopSlide()});
//          .on('mouseleave',function(){startSlide()});
bannerBox.on({'mouseenter':stopSlide, 'mouseleave':startSlide});

bannerBox.find('a').on('focus',function() { stopSlide() });
bannerBox.find('button').on('focus',function() { stopSlide() });

bannerBox.find('a').last().on('blur',function() { startSlide() });
// bannerBox.find('a').off('focus',function() { startSlide() });
// bannerBox.find('button').off('focus',function() { startSlide() });


})(this.jQuery);





















// js_08_onepageScroll_01.js

(function($) {
/* onepage scroll
  1. html문서에서 미리 indicator기능을 생성하여 스크롤 처리
  2.동일한 class이름을 사용할 경우 쉽게 data를 가져와서 '.indicator'기능을 생성

*/
// 2.html문서에서 동일한 class이름을 사용할 경우 쉽게 data를 가져와서 '.indicator'기능을 생성
var page =  $('.page');
console.log(page.length); //답 : 9
var headBox = $('#headBox');
headBox.append('<div class="indicator"><ul></ul></div>');
var indi    = $('.indicator');
var indiUl = indi.children('ul');
// li를 .page만큰큼 생성
// indicator 생성시, 내부에 h1또는 h2가 존재한다는 조건에서 사용
var i = 0;
var pageAttr, text;
for(;i < page.length; i++){
  // page의 내부의 id값을 변수로 저장
pageAttr = page.eq(i).attr('id');

  // text = page.eq(i).children('h1' | 'h2').text(); 이것된당.밑에식으로 풀어요
// page자식중 제목요소가 h1이나 h2를 구분하여 처리
  if(page.eq(i).children('h1').length > 0){
  text = page.eq(i).children('h1').text();

  }else if(page.children('h2').length > 0){
  text = page.eq(i).children('h2').text();

  }else{
  text = page.eq(i).children('h3').text();

  }

  indiUl.append('<li><a href="#'+ pageAttr +'"><span>'+ text +'</span></a></li>');
  
}



// 1. '.indicator' html문서를 만들어 놓았을 경우 처리할 수 있는 기능
  var indiLi  = indi.find('li');
  var timed  = 800;

  var navTop = indi.offset().top;
  // console.log(navTop);


  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    var _thisAttr = $(this).find('a').attr('href');
    console.log(_thisAttr);
    var offsetTest = $(_thisAttr).offset().top;
    console.log(offsetTest);
    $('html, body').stop().animate({scrollTop:offsetTest}, timed, 'easeOutBack');
    // 스크롤 기능이 먹었다면은 주로 윈도우에서 정의함 명령을 던져줄때는 html body/익스는 html인지 body는 나머지 브라우저가 인식하기에 둘다 쓰는것임
    //움직이는 상태를 파악하는 것이 윈도우 (이벤트 기능 click대신 scroll쓰는 경우),어떤 기능을 줬을때 던져줘라는 body html로 잡아서 파악해야함(scrolltop으로 움직이세요)

  });


// 3.top버튼 생성하기
// 4.nav이동하여 상단고정
var wrap=$('#wrap');
wrap.append('<div class="top"><a href="#">top</a></div>');
var top = $('.top');
var style = $('head').append('<style>\n.top{width:3rem; height:auto;color:#fff;font-size:1.3rem;position:fixed;bottom:1rem;right:0.2rem;border-radius:0.3rem;overflow:hidden;display:none;}\n .top>a{display:block;width:100%;height:auto;text-transform:uppercase;color:inherit;font-weight:bold;background-color:#333;padding:.5rem 0.2rem;}\n</style>');


// top btn 생성
// 기준 3번째 상자가 상단에 위치하면


var nav =$('#nav');
var navTop = nav.offset().top;
console.log(navTop);
var topView = page.eq(2).offset().top;
// console.log(topView);

// 5.h1 값 설정
var h1A = $('h1').find('a');
//  h1>a의 margin-left값을 가져오기
var h1AMarginLeft = parseInt(h1A.css('marginLeft'));
console.log('h1>a의 margin-left값 :',h1AMarginLeft);
// 브라우저 왼쪽에서 떨어진 값 찾기
var h1ALeftOrigin = h1A.offset().left;
console.log(h1ALeftOrigin);
// ------------------------------------------------------

// 6.scroll처리시, 해당위치에 맞는 indicator addClass('focus')처리
var pageArr = [];
var j = 0;
for(;j< page.length;j++){
  pageArr[j] = page.eq(j).offset().top;
}
console.log(pageArr); //값은 (9)[배열]

// ------------------------------------------------------
$(window).on('scroll',function(){
var h1ALeft = h1A.offset().left;
console.log('h1>a의 브라우저 왼쪽에서 부터 : ',h1ALeft+'px');

  var docScroll = $('html,body').scrollTop();
  //console.log(docScroll);

  // 3.top버튼 위치고정
if(topView <= docScroll){
  top.slideDown();
}else{
  top.slideUp();
}
/*
// 삼항연산자로 식쓰기
(topView <= docScroll) ? top.slideDown() : top.slideUp();
*/

  //4. nav위치고정
  if(navTop<=docScroll+20){//+20은 css에 .fixed에 top20이있기떄문에 싫으면 둘다지웡
    nav.addClass('fixed');
    
  }else{
    nav.removeClass('fixed');
  }
/*
// 삼항연산자로 식쓰기
  (navTop<=docScroll+20) ? nav.addClass('fixed') : nav.removeClass('fixed');
*/

// 5.스크롤시, h1이 왼쪽 상단으로 위치이동
if(h1ALeftOrigin <= docScroll){
  console.log('ok');
h1A.css({marginLeft:h1AMarginLeft - h1ALeftOrigin});
}else{
h1A.css({marginLeft:h1AMarginLeft - docScroll});

}

// 6.docScroll값과, pageArr 값이 일치할때 처리
// if(pageArr[1]>=docScroll){
//   indiLi.removeClass('focus');
//   indiLi.eq(0).addClass('focus');
// }else if(pageArr[2]>=docScroll){
//   indiLi.removeClass('focus');
//   indiLi.eq(0).addClass('focus');
// }else if(pageArr[3]>=docScroll){
//   indiLi.removeClass('focus');
//   indiLi.eq(0).addClass('focus');
// }else if(pageArr[4]>=docScroll){
//   indiLi.removeClass('focus');
//   indiLi.eq(0).addClass('focus');
// }

var focus = function(k){
  indiLi.removeClass('focus');
  indiLi.eq(k).addClass('focus');
};

var wh = page.outerHeight(true);
var myCount = parseInt(docScroll / wh);
// console.log(myCount);
if(pageArr[myCount] <= docScroll){
  focus(myCount);
}
});



})(this.jQuery);


























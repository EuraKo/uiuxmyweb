// js_08_onepageScroll_01.js

(function($) {
  var nav = $('#nav');
  var navLi = nav.find('li');
  var timed = 800;
/*
//1.가장 간단한방법
  navLi.on('click', ['a'], function(e) {
    e.preventDefault();
    var _thisAttr = $(this).find('a').attr('href');
    console.log(_thisAttr);
    //문자로 가져옴 그래서 밑에 $()를 써서 정확히 지정을 해야한다.->$(#headBox); ''는 변수로 선언해서 이미 문자로 선언해서 안써도된다.
    var offsetTest = $(_thisAttr).offset().top;
    console.log(offsetTest);
    $('html, body').stop().animate({scrollTop:offsetTest},timed,'easeOutBack');
  });
  */

  //class page가 있는 것 만큼 인디케이터 생성하기
var linkPage=[
{text : "headBox",link : "#headBox"},
{text : "bannerBox",link : "#bannerBox_0"},
{text : "bannerBox",link : "#bannerBox_1"},
{text : "bannerBox",link : "#bannerBox_2"},
{text : "bannerBox",link : "#bannerBox_3"},
{text : "bestBox",link : "#bestBox"},
{text : "contentBox",link : "#contentBox"},
{text : "infoBox",link : "#infoBox"},
{text : "footBox",link : "#footBox"}
];

var i=0;
var linkPageLength = linkPage.length;
var nav = $('#wrap').append('<nav id="nav"></nav>');
var navUl = $('#nav').append('<ul>');

for (;i<linkPageLength;i++){
  $('ul').append('<li><a><span>');

  navUl.children('li').eq(i).text(linkPage[i].text);
}
var a = $('a');
a.on()



})(this.jQuery);


























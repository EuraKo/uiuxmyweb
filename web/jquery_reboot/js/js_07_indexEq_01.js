// js_07_indexEq_01.js
(function($){
  // 1.선택한 순서에 맞는 .box내의 div를 addClass적용하기
  // 2.선택한 버튼이 몇번째인지 체크하고 해당 .show내부의 p에 선택한 버튼의 순서를 알려주기
  // 3.선택한 버튼 내부에 별도의 속성값을 사용하여 이동할 링크를 저장하고,
  // 3-1.클릭시 .show>p에 링크태그를 생성하여 해당 값을 대입하여 이동버튼으로 변경처리
  // 4. 3번의 속성값(링크할 위치)를 객체형식으로 처리하여 사용.
  // 4-1.해당하는 버튼태그를 개수만큼 생성해라.

  // 1.
  var btnBox = $('.btn');
// var btn= $('.btn').children('button'); 4-1의 경우 button을 생성해야하므로 후에 지정
var box= $('.box').children('div');
var p= box.find('p');
var show = $('.show').children('p');

// btn.on('click',function(e){
//   e.preventDefault();
// var _this = $(this);
// // console.log(_this.index());
// var _thisI =_this.index();

// box.eq(_thisI).addClass('active');
// box.eq(_thisI).siblings('div').removeClass('active');

// // 2.
// // $('.show').children('p').text((_thisI+1)+'번째 버튼을 선택했습니다.');

// // 3.내가한거 된당.
// // var http = _this.attr('data-link');
// // console.log(http);
// // show.append('<a href="'+ http+ '">');
// // var a = show.children('a');
// // a.html('이동하기');
// });
// 2.each문
// $.each(btn,function(index,value){
//   $(this).on('click',function(){
//     console.log(index);
//     $('.show').children('p').text((index+1)+'번째 버튼을 선택했습니다.');
//   });
// });

// 3.

var showA = show.find('a').length;
console.log(showA);

// btn.on('click',function(e){
//   e.preventDefault();
// var _this = $(this);
// console.log(_this.index());
// var _thisI =_this.index();
// show.text('링크탄생');//야매코딩임....버튼이여러개생기는걸방지함.
// 존재유무를 판단하는 메소드
// hasClass(), is()



/*
// var myLink = _this.attr('data-link');
var myLink =  dataList[i];
console.log(myLink);
  
var showA = show.find('a').length;
// console.log(showA);
if(showA > 0){
show.find('a').attr({href:myLink, title:myLink, target:'_blank'});
}else{
  // show.append('a'); //show내부의 뒤에 a요소를 삽입해라!(다른 곳에 있는 a요소를 끌어옴) 밑에아이들과 다른뜻!
  // show.append().html('<a>이동하기</a>'); //show내부의 뒤에 a요소를 삽입해라!(생성)
show.append('<a>이동하기</a>'); //show내부의 뒤에 a요소를 삽입해라!(생성)
show.find('a').attr({href:myLink, title:myLink, target:'_blank'});
}
});
*/

//4.data-link를 html에서 삭제후 js로 생성하기
var linkPage=[
{text :'naver' , link : "http://naver.com"},
{text :'google' , link : "http://google.com"},
{text :'daum' , link : "http://daum.net"},
{text :'w3school' , link : "http://w3school.com"},
{text :'codepen' , link : "http://codepen.io"},
{text :'cssawards' , link : "http://cssawards.com"},
{text :'pinterest' , link : "http://pinterest.com"},
{text :'behance' , link : "http://behance.com"},
{text :'jquery' , link : "http://jquery.com"},
{text :'sass' , link : "http://sass-lang.com"}
];

var i=0;
var linkPageLength = linkPage.length;
for(;i<linkPageLength; i++){
btnBox.append('<button type="button"></button>');
btnBox.children('button').eq(i).text(linkPage[i].text);
}

var btn = btnBox.children('button');
btn.on('click',['button'],function(e){
  e.preventDefault();

  var _this = $(this);
  var _thisI =_this.index();
  console.log(_thisI);
  var showA = show.find('a').length;
  if(!showA>0){ show.append('<a target="_blank"></a>')};
  //하나의 조건(a의 존재유무)만 판단하므로 else는 필요없다.
  show.find('a').text(linkPage[_thisI].text+' 이동하기');
  show.find('a').attr({href:linkPage[_thisI].link, title:linkPage[_thisI].link});
});


// 4-1.









})(this.jQuery);
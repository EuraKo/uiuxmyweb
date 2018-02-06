// test_03_animate.js callback함수
(function($){
var btn = $('.btn').children('button');
// console.log(btn);
var color1 = ['#fff', '#f06', '#f80', '#ff0', '#5f3', '#0ac','#74a', '#a7a'];
var color2 = ['#a7a', '#74a', '#0ac', '#5f3', '#ff0', '#f80','#f06', '#fff'];

var parFirst = $('.par').children('div').first();//.eq(0).text();
var parLast = $('.par').children('div').last();//.eq(-1).text();//text()는 글자를 쓰지않으면 안에있는 내용이 콘솔로 확인된다.
var timed = 400;
var turn = 0;
console.log(parFirst);
console.log(parLast);

// 1.배경색:파랑, 2.글씨색:흰색
//step_01
// btn.eq(0).on('click',function(e){
//   e.preventDefault();
// // parFirst.css({backgroundColor:'#07c',color:'#fff',transition:'all 500ms'});동시에발생함
// // parFirst.animate({backgroundColor:'#07c',color:'#fff'});//위와동일
// parFirst.animate({backgroundColor:'#07c'},timed,function(){
//   parFirst.animate({color:'#fff'},timed);//시간차에 의해변함
// });
// parLast.animate({backgroundColor:'#fff'},timed,function(){
//   parLast.animate({color:'#07c',borderRadius:'10px'},timed);
//   parLast.css({transform:'rotateZ(180deg)'});
// });
// });

//step_02
btn.on('click',function(e){
  e.preventDefault();
  var _thisI = $(this).index();
  console.log(_thisI);
//first p-------------------------------
parFirst.animate({backgroundColor:color1[_thisI]},timed,function(){
  parFirst.animate({color:color2[_thisI]});
});
//last p------------------------
parLast.stop().animate({backgroundColor:color2[_thisI]},timed,function(){
  parLast.stop().animate({clolr:color1[_thisI]},timed,function(){
    var size = (_thisI + 1)*16;
    console.log('size: '+size);
    parLast.stop().animate({borderRadius:size + 'px'},timed,function(){
    //0rem 1rem 2rem 이렇게감.왜냐면 _this가 인덱스값이라서
      turn += 180;
      parLast.css({transform:'rotateY(' + turn + 'deg)',transition:'all '+timed +'ms ease'});
    });
  });
});
});//btn.on('click')
//새로고침 버튼(reload())
var reload = $('.reset').find('button');
reload.on('click',function(e){
  e.preventDefault();
  window.location.reload();
});


})(this.jQuery);





















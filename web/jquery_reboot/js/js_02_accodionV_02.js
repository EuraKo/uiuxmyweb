// js_02_accodionV_02.js
(function($){
var accDt = $('.accordion').find('dt');
var accDd = $('.accordion').find('dd');

var ddHeight = [];
var i = 0;//최초의 값을 기록하기위해서
// console.log(accDd.length);

for (;i< accDd.length; i++){
ddHeight[i] = accDd.eq(i).innerHeight();
}
console.log(ddHeight);//높이값


//1번기능시 주석풀기
// $('dd').show(); 
//2번기능시 주석풀기
$('dd').hide();


// accDt.on('click',['button'],function(e){
//   e.preventDefault();
//   var _this=$(this);
//   var _thisI = $(this).index() / 2;// /2를 해줘야 밑에 _thisI를 줄때 0123...나온다.콘솔로 다찍어봐염
// // //1.선택된 바로 뒤의 dd 를 사라지게 만들기
// // _this.next('dd').animate({height:0,paddingTop:0,paddingBottom:0},function(){
// // var _$this = $(this);
// // _$this.css({display:'none'});
// // });

// //2.선택된 바로뒤의 dd를 나타나게 만들기
// console.log(_thisI);
// _this.next('dd').css({display:'block',paddingTop:0,paddingBottom:0,height:0});
// //css함수자체는 콜백기능을 가질수가없다
// _this.next('dd').animate({paddingTop:'2rem',paddingBottom:'2rem',height:ddHeight[_thisI]});
// });

//1번기능 함수화처리
var myHide = function(select){
  var _this = select; //위의 select랑 동일하게가야함 $this 개념임
  var _thisI = select.index()/2;
  _this.next('dd').siblings('dd').animate({height:0,paddingTop:0,paddingBottom:0},
    function(){
      var _$this = $(this);
      _$this.css({display:'none'});
    });
};
//2번기능 함수화처리
var myShow = function(select){
   var _this = select;
  var _thisI = select.index()/2;
  _this.next('dd').css({display:'block',paddingTop:0,paddingBottom:0,height:0});
  _this.next('dd').animate({paddingTop:'2rem',paddingBottom:'2rem',height:ddHeight[_thisI]}) ;
}
//선택된 다음 dd를 숨김처리하기 위한 함수
var mySelHide = function(select){
  var _this = select;
  var _thisI = select.index()/2;
   _this.next('dd').animate({height:0,paddingTop:0,paddingBottom:0},
    function(){
    _this.next('dd').css({display:'none'});
    });
};

accDt.on('click',['button'],function(e){
  e.preventDefault();
  var sel = $(this);
  var ddView = sel.next('dd').css('display')=='block';
  if(ddView){
  mySelHide(sel);

  }else{
  myShow(sel);
  myHide(sel);

  }
});

})(this.jQuery);






















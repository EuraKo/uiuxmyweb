//jquery_base_method_04.js
(function($){
// jquery start------------------------------------------------

var ani=$('.ani');
//버튼 설정
var aniBtn=$('#aniBtn');
var btn_01= aniBtn.children('button').eq(0);
var btn_02= aniBtn.children('button').eq(1);
var btn_03= aniBtn.children('button').eq(2);
var btn_04= aniBtn.children('button').eq(3);

btn_01.on('click',function(e){
  e.preventDefault();

//ani.css({backgroundColor:'#afa',color:'#555'});
ani.animate({backgroundColor:'#afa',color:'#555'});
});

btn_02.on('click',function(e){
  e.preventDefault();

ani.animate({marginLeft:'+=50px'},1000,'easeOutElastic'); 
//ani.css({marginLeft:'+=50px',transform:'rotate(180deg)'});
});
btn_02.on('mouseleave',function () {
ani.animate({marginLeft:0});
});

btn_03.on('click',function(e){
  e.preventDefault();
ani.animate({right:0},function(){
  ani.animate({bottom:0},function(){
    ani.animate({right:'auto',left:0},function(){//auto를 줘서 위에들어가있는 값을 없애줘야함
      ani.animate({top:0},function(){
        ani.removeAttr('style');//한번클릭하면 그버튼이 새로고침해야하지만 removeAttr(속성지우기)주면 버튼을 계속눌러도됨.다다다다누르면 딜레이먹어서 느려짐('style')는 속성값(value)가 지워지는 것임
      });
    });
  });
});
});//갇힌상태에서 다른 함수를 재호출하는걸(함수안에 함수) 클로즈함수라고 한당.

btn_04.on('click',function(evt){
  evt.preventDefault();
ani.animate({width:'+=100px',height:'+=100px'},300,'easeOutBounce',function(){
  var aniW=ani.width();
if(aniW>=500){ //widht라는 method는 그냥 숫자값만 가져와도 px로 인지함
alert('stop!!!!!!');
}//if자체가 끝나는 곳에는 ;안찍어도됨
});
});
btn_04.on('mouseleave',function(){
  ani.animate({width:'-=100px',height:'-=100px'});


});
// jquery end------------------------------------------------
})(this.jQuery);
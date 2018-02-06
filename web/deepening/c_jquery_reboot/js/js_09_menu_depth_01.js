// js_09_menu_depth_01.js
(function($){

  // 1번째 메뉴 만들기 형태
var gnb = $('#gnb');
var gnbDl = gnb.children('dl');
var gnbDt = gnbDl.children('dt');
var gnbDd = gnbDl.children('dd');
var timed =800;
gnbDd.hide();

gnbDt.css({position:'relative',zIndex:100});
  gnb.css({height:'30rem'});
gnbDt.on('click',function(e){
  e.preventDefault();
  var nextDd = $(this).next('dd');
  //1-1 한개씩 떨어지게하기
  // nextDd.siblings('dd').slideUp();
  // nextDd.slideDown();

// 1-2 전부다 떨어지게하기
gnbDd.slideDown();
});
gnbDl.on('mouseleave',function(){
  gnbDd.delay(timed/2).slideUp();
});

gnbDd.last().find('a').last().on('blur',function(){//a의 마지막 포커스를 벗어나면
  gnbDd.delay(timed/2).slideUp();
});
// -----------------------------------------------------
// 2번째 메뉴 만들기
var lnb         = $('.lnb');
var lnbList     = lnb.children('li');
var lnbTitle    = lnbList.children('a');
var lnbOl       = lnbList.children('ol');
var lnbLinkList = lnbOl.children('li'); 
lnb.css({height:'30rem'});
lnbOl.hide();
var lnbTitleFn = function(){
  // 2-1 부분 보이게 하기
  $(this).parent().siblings('li').children('ol').stop().slideUp();
  $(this).next('ol').slideDown();

  // 2-2 전체보이게 만들기
// lnbOl.slideDown();
};

// lnbTitle.on({'mouseenter':lnbTitleFn,'focus':lnbTitleFn}); 
//함수안의 함수이기에 겉에 함수가 별의미가 없어서 지워버림 :는 on이라는 형식은 객체형식으로 써도됨
lnbTitle.on({'mouseenter':lnbTitleFn}); 
lnbTitle.on('keydown',function(e){
  var evt = e.which; //키보드컨트롤
  console.log(e.which);
  //e만찍으면 쭉나옴  왼쪽 37, 위 38, 오른쪽 39, 아래 40, 엔터 9, 스페이스 32, esc 27
// if(evt == 39){}else if(evt == 37){}else if(evt == 9){}
switch(evt){
  case 39:
    $(this).parent().next('li').children('a').focus();
  break;

  case 37:
    $(this).parent().prev('li').children('a').focus();

  break;

  case 40 :
    $(this).next('ol').stop().slideDown();
  break;

  case 38 :
    $(this).next('ol').stop().slideUp();
  break;

  case 27:
    $(this).blur();
  lnbOl.hide();
  break;
}



});
lnbList.on('mouseleave',function(){
lnbOl.slideUp();});
lnbLinkList.last().children('a').on('blur',function(){
lnbOl.slideUp();

});

// -----------------------------------------------------

var openBtn = $('.open_btn');
var cnbBox = $('.cnb_box');
var bodyW = $('body').width();

// 1.
// cnbBox.hide();

// 2.
cnbBox.css({transform:'translateX(' + bodyW + 'px)',transition:'all '+ timed +'ms ease'});
//animate안됨
var active=function(){$('.active').css({transform:'translate(0)'});};

openBtn.on('click',function(e){
  e.preventDefault();
  // 1.slide기능으로 사라지거나 나타나게 만들기.
  // cnbBox.slideToggle();

  // 2.transform 기능으로 움직여서 처리하기
var cnbtr = cnbBox.hasClass('active'); //있니없니?
console.log(cnbtr); //값 false true
// cnbBox.toggleClass('active');
if(!cnbtr){
  cnbBox.addClass('active');
  openBtn.addClass('active');
  cnbBox.css({transform:'translate(0)'});
  active();
}else{
cnbBox.removeClass('active');
  openBtn.removeClass('active');
  cnbBox.css({transform:'translateX('+ bodyW +'px)'});

}

});










})(this.jQuery);



























// slide_banner_01.js
(function($) {
  // banner 1번째 항목가능==================================================
   // banner 첫번째 항목에대해...
  var banner1 = $('#bannerBox');
  var oneWrap = banner1.find('.banner_wrap');
  var oneList = oneWrap.children('li');
  var oneBtn  = banner1.find('button');
  var lbtn    = $('.lbtn');
  var rbtn    = $('.rbtn');

  var oneHeight = oneWrap.height();

  //* 1. banner1 내부의 링크기능을 해제(tabindex="-1");

  // oneList.children('a').attr('tabindex', '-1');
  // oneList.eq(0).children('a').removeAttr('tabindex');
  
  $.each(oneList,function(index, value) {  $(this).children('a').attr('tabindex', '-1');  });
  oneList.eq(0).children('a').removeAttr('tabindex');

  var bannerMv = 0,eqi = 0;
   lbtn.hide();

   oneBtn.on('focus',function(){
    $(this).addClass('focus');
    $(this).siblings().removeClass('focus');
   });//시프트탭했을때 검정 버튼 오류수정

  oneBtn.on('click',function(e) {
    e.preventDefault();
    var _this     = $(this);
    var oneMargin = parseInt(oneWrap.css('marginTop'));
    var oneCut    = oneHeight / 5;
    // var oneCut    = oneHeight / oneList.length;

    oneBtn.hide();

    //왼쪽버튼을 클릭할 수 있는 상황
    if(_this[0] == lbtn[0] &&  oneMargin < 0 ){
// [0]을 다는거는 콘솔(_this)로 찍어보면 버튼자체는 배열이 2개이기떄문에 0번째 배열을 가져와야하기때문이다. 
      // (-oneMargin < 0) ? bannerMv = 0  : bannerMv += oneCut; 
      // if(-oneMargin < 0){bannerMv = 0}else{bannerMv += oneCut;}//첫이미지위로 올라가는 것을 방지 위와 같은식
      bannerMv += oneCut; 
      lbtn.addClass('focus');
      rbtn.removeClass('focus');
      eqi--;
    }else if(_this[0] == rbtn[0]){
      // (-oneMargin > oneCut*3) ? bannerMv = -oneCut*4 : bannerMv -= oneCut; 
      bannerMv -= oneCut;
      rbtn.addClass('focus');
      lbtn.removeClass('focus');
      eqi++;
    }
    // console.log(-bannerMv, oneCut*4);
    oneWrap.stop().animate({marginTop:bannerMv},function() {
      // 버튼이 모두 나타나게만들기
      // oneBtn.show();
      // 한쪽에서 버튼이 사라지게 만들기
      if(-bannerMv <= 0){
        lbtn.hide(); rbtn.show();
      }else if(-bannerMv >= oneCut*(oneList.length-1)){ 
      //oneList.length-1 = 4임 mt이 *4만큼올라와야 마지막아이가 보여서
        rbtn.hide(); lbtn.show(); 
      }else{
        lbtn.show(); rbtn.show();
      }
      $('.focus').focus();
console.log(eqi);
oneList.eq(eqi).children('a').attr('tabindex','0');
oneList.eq(eqi).siblings('li').children('a').attr('tabindex','-1');
    });
  });
  // ------------------------------------------
  // banner 2번째 항목기능 =======================
  var twoBanner = $('#bannerBox_02');
  var twoIndi =twoBanner.children('.indicator');
  var twoIndiList =twoIndi.children('li');
  var twoWrap =twoBanner.children('.banner_wrap');
  var twoWrapList =twoWrap.children('li');
/* //2-1
twoWrap.wrap($('<div>',{class:'banner_more_wrap'}));
// twoWrap.wrap('<div class="banner_more_wrap"></div>');

var twoWrapH = twoWrap.outerHeight();
$('.banner_more_wrap').css({overflow:'hidden',height:twoWrapH});

  // var twoi = 0;
  twoIndiList.on('click',function(e){
    e.preventDefault();
    var _thisI = $(this).index();
twoIndiList.eq(_thisI).addClass('active');
twoIndiList.eq(_thisI).siblings().removeClass('active');

    twoWrap.animate({marginTop:-twoWrapH * _thisI});
  });
*/
  // -------------------------------------
  // 두번쨰 배너를 동일한 위치에서 fadeOut기능으로 만들어보자!
twoWrapList.css({position:'absolute',top:0,left:0});
twoWrapList.parent().css({position:'relative'});
var i = twoWrapList.length;
// li:(1) z-index :100 ...가니껜 300이젤앞이니깐 li:(1)이 zindex가 300이되야함.
var j = 0;
for(; j < i;j ++){
  twoWrapList.eq(j).css({zIndex:(i-j)*100})
}
twoWrapList.hide();
twoWrapList.eq(0).show();
twoIndi.css({zIndex:(i+1)*100}); //indicator가 무조건 앞에 오게끔.
twoIndiList.on('click',function(e){
  e.preventDefault();
  var _thisI = $(this).index();
  // twoWrapList.eq(_thisI).fadeIn();
  // twoWrapList.eq(_thisI).prevAll().fadeOut();
  // twoWrapList.eq(_thisI).nextAll().fadeIn();
  var eqi = twoWrapList.eq(_thisI);
    eqi.fadeIn()
    eqi.prevAll().fadeOut()
    eqi.nextAll().fadeIn();
    

})

})(this.jQuery);



















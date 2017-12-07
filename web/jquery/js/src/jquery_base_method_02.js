// jquery_base_method_02.js

(function($){
var gnbBtn=$('.gnb_btn');
var gnbUl=$('#gnb').children('ul');


gnbBtn.on('click',function(e){
  e.preventDefault();

//gnbUl.toggle();//딱딱 끊겼다들어가게
gnbUl.slideToggle();//스르륵나옴
//gnbUl.fadeToggle();//안개처럼
})

var view=$('.view');
var viewLi1=view.children('.view_1');//('li:nth(1)') | ('li:nth-child(1)) | ('li:eq(0)') | ('li').eq(0)
var viewLi2=view.children('.view_2');//('li:nth(2)') | ('li:nth-child(2)) | ('li:eq(1)') | ('li').eq(1)
var viewLi3=view.children('.view_3');//('li:nth(3)') | ('li:nth-child(3)) | ('li:eq(2)') | ('li').eq(2)
var viewLi4=view.children('.view_4');//('li:nth(4)') | ('li:nth-child(4)) | ('li:eq(3)') | ('li').eq(3)
var viewLi5=view.children('.view_5');//('li:nth(5)') | ('li:nth-child(5)) | ('li:eq(4)') | ('li').eq(4)
var viewLi6=view.children('.view_6');//('li:nth(6)') | ('li:nth-child(6)) | ('li:eq(5)') | ('li').eq(5)
var viewLi7=view.children('.view_7');//('li:nth(7)') | ('li:nth-child(7)) | ('li:eq(6)') | ('li').eq(6)
var viewLi8=view.children('.view_8');//('li:nth(8)') | ('li:nth-child(8)) | ('li:eq(7)') | ('li').eq(7)

var banBtn=$('.btn');

var banLi01=banBtn.find('.ban_btn_1');
var banLi02=banBtn.find('.ban_btn_2');
var banLi03=banBtn.find('.ban_btn_3');
var banLi04=banBtn.find('.ban_btn_4');
var banLi05=banBtn.find('.ban_btn_5');
var banLi06=banBtn.find('.ban_btn_6');
var banLi07=banBtn.find('.ban_btn_7');
var banLi08=banBtn.find('.ban_btn_8');
var banLi09=banBtn.find('.ban_btn_9');
var banLi10=banBtn.find('.ban_btn_10');
var banLi11=banBtn.find('.ban_btn_11');
var banLi12=banBtn.find('.ban_btn_12');

banLi01.on('click',['button'],function(e){
  e.preventDefault(); //선행자는 이벤트기능을 막아라. 버튼만누르게해죵
  viewLi1.hide();
});

banLi02.on('click',function(e){
  e.preventDefault();
  viewLi1.show();
});
//hide,show
banLi03.on('click',function(e){
  e.preventDefault();
  viewLi2.fadeOut();
});
banLi04.on('click',function(e){
  e.preventDefault();
  viewLi2.fadeIn();
});
//fade
banLi05.on('click',function(e){
  e.preventDefault();
  viewLi3.slideUp();
});

banLi06.on('click',function(e){
  e.preventDefault();
  viewLi3.slideDown();
});
//slide
banLi07.on('click',function(e){
  e.preventDefault();
  viewLi4.addClass('fixed');
});
banLi08.on('click',function(e){
  e.preventDefault();
  viewLi4.removeClass('fixed');
});
//class

banLi09.on('click',function(e){
  e.preventDefault();
  viewLi5.toggle();
});
banLi10.on('click',function(e){
  e.preventDefault();
  viewLi6.fadeToggle();
});
banLi11.on('click',function(e){
  e.preventDefault();
  viewLi7.slideToggle();
});
banLi12.on('click',function(e){
  e.preventDefault();
  viewLi8.toggleClass('fixed');
});
//toggle

$('.btn').children('li').on('click',function(e){
  e.preventDefault();
  var i=$(this).index();
  console.log(i);
});
//index

var tab=$('.tabs');

var tabLi=tab.children('li');
var tabLi_01=tab.children('li').eq(0);


var tabContent=$('.tab_content');
var tabContentLi=tabContent.children('li');

//tab li 를 클릭
tabLi.on('click',function(e){
  e.preventDefault();
  var myBtn=$(this).index();//그것(몇번째니의개념)을 찾아와 그것의 이름은 myBtn이야 

  console.log(myBtn);
  //tab메뉴버튼에 지정한 class이름 'select'를 일단 삭제
  tabLi.removeClass('select');
  //선택된 (몇번째?)li에 class이름 'select'를 지정
  tabLi.eq(myBtn).addClass('select');

tabContentLi.removeClass('select');
tabContentLi.eq(myBtn).addClass('select');


});
//해당하는 탭메뉴의 내용이 순서에 맞게 나오게 만들어라!!





})(this.jQuery);
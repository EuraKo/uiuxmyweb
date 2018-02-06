(function($){
var head = $('#headBox');
var btn_01 = head.children('button').eq(0);
var btn_02 = head.children('button').eq(1);
var btn_03 = head.children('button').eq(2);
var btn_04 = head.children('button').eq(3);
var btn_05 = head.children('button').eq(4);
var btn_06 = head.children('button').eq(5);
var btn_07 = head.children('button').eq(6);
var btn_08 = head.children('button').eq(7);
var btn_09 = head.children('button').eq(8);
var btn_10 = head.children('button').eq(9);
var btn_11 = head.children('button').eq(10);
var btn_12 = head.children('button').eq(11);

var back = head.siblings('.back');
var ani = head.siblings('.ani');

btn_01.on('click',function(e){
  e.preventDefault();
  back.show();
});

btn_02.on('click',function(e){
  e.preventDefault();
  back.hide();
});

btn_03.on('click',function(e){
  e.preventDefault();
  back.toggle();
});

btn_04.on('click',function(e){
  e.preventDefault();
  back.fadeIn();
});
btn_05.on('click',function(e){
  e.preventDefault();
  back.fadeOut();
});
btn_06.on('click',function(e){
  e.preventDefault();
  back.fadeToggle();
});

btn_07.on('click',function(e){
  e.preventDefault();
  back.slideDown();
});
btn_08.on('click',function(e){
  e.preventDefault();
  back.slideUp();
});
btn_09.on('click',function(e){
  e.preventDefault();
  back.slideToggle();
});

btn_10.on('click',function(e){
  e.preventDefault();
  ani.show();
  ani.css({'transform':'skew(45deg)'},1000,'ease');
});

btn_11.on('click',function(e){
  e.preventDefault();
  ani.hide();
  ani.css({'transform':'skew(45deg)'},1000,'ease');
});

btn_12.on('click',function(e){
  e.preventDefault();
  ani.toggle();
  ani.css({'transform':'skew(45deg)'},1000,'ease');
});
})(this.jQuery);
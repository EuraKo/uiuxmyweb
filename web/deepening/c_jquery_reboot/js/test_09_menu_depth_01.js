// test_09_menu_depth_01.js
(function($){
var gnbBox=$('#gnbBox');
var dl =  $('dl');
var dt = dl.children('dt');
var dd = dl.children('dd');
// hover시 dd 보이게만들기

dt.on('mouseenter',['button'],function(e){
  e.preventDefault();
//$(this).next(dd).slideDown();
 dd.stop().slideDown();

});
gnbBox.on('mouseleave',['button'],function(e){
  e.preventDefault();

dd.stop().slideUp();
})

})(this.jQuery);

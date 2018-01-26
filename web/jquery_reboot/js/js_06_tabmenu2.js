// js_06_tabmenu2.js
(function($){
var tabMenu = $('#tabMenu');
var tabUl = tabMenu.children('ul');
var tabLi = tabUl.children('li');
var content = $('.menu_content');

tabLi.on('click',['button'],function(e){
  e.preventDefault();
  var index = $(this).index();
  console.log(index);
  var myIndex = content.children('div').eq(index);
  myIndex.stop().slideDown();
  myIndex.siblings('div').stop().slideUp();

})


})(this.jQuery);
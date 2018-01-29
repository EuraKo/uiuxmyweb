// js_08_onescroll.js
(function($){
var indicator=$('.indicator');
var li = indicator.find('li');
var content = $('.content').children('div');
var offset = content.offset().top;
console.log(content);

var contentLength = content.length;
console.log(contentLength);
var i=0;
var conArr =[];
for(;i<contentLength;i++){
conArr[i] = content.eq(i).offset().top;
console.log(conArr[i]);
}

li.on('click',['a'],function(e){
  e.preventDefault();
  var j = $(this).index();
  $(window).scrollTop(conArr[j]);

console.log(conArr[j]);
});


})(this.jQuery);
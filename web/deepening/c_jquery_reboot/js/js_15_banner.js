// js_15_banner.js
(function($){
var bannerBox=$('#bannerBox');
var banUl=bannerBox.find('ul');
var banLi=bannerBox.find('li');

var btn=$('.btn');
var left=btn.children('.left');
var right=btn.children('.right');

banLi.last().prependTo(banUl);
banUl.css({marginTop:'-62.5%'});
bannerBox.css({overflowY:'hidden'});

    var banLast = banLi.last();

left.on('click',['button'],function(e){
  e.preventDefault();
  banUl.stop().animate({marginTop:0},function(){

    banLast.prependTo(banUl);
    // banUl.css({marginTop:'-62.5%'});
  })
})

right.on('click',['button'],function(e){
  e.preventDefault();
  banUl.stop().animate({marginTop:'-62.5%'},function(){
    banLast.appendTo(banUl);
    banUl.css({marginTop:''})

  })
})
})(this.jQuery);
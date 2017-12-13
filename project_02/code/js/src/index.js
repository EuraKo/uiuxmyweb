// index.js-----------
(function($){
// gnb toggle
var gnbBox=$('#gnbBox');
var gnbDt=gnbBox.find('dt');
var gnbDd=gnbDt.siblings('dd');

gnbDt.on('click',function(e){
  e.preventDefault();
  gnbDd.slideToggle();
});
// slide banner
var bannerBox=$('#bannerBox');
var banner=bannerBox.children('.banner');
var banUl=banner.children('ul');
var banLi=banUl.children('li');

banLi.last().prependTo(banUl);
banUl.css({marginLeft:'-100%'});
banner.css({overflow:'hidden'});

// btn
var bannerBtn=bannerBox.children('.btn');
var rightBtn=bannerBtn.children('button').first();
var leftBtn=bannerBtn.children('button').last();

// leftBtn
leftBtn.on('click',function(e){
  e.preventDefault();
  banUl.stop(false,true).animate({marginLeft:'0'},
    function(){banLi=banUl.children('li').last();
    banLi.prependTo(banUl);
    banUl.css({marginLeft:'-100%'});
  });
});
//rightBtn
rightBtn.on('click',function(e){
  e.preventDefault();
  banUl.stop(false,true).animate({marginLeft:'-200%'},
    function(){banLi=banUl.children('li').first();
    banLi.appendTo(banUl);
    banUl.css({marginLeft:'-100%'});
  });
});

//sideBox
var sideBox=$('#sideBox');
var sideBtn=sideBox.children('button');

sideBtn.on('click',function(e){
  e.preventDefault();
  sideBox.css({right:'0'},function(){
    sideBox.removeAttr('style');
  });
  
});







})(this.jQuery);
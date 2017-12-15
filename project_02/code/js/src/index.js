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
var rightBtn=bannerBtn.children('button').last();
var leftBtn=bannerBtn.children('button').first();

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
  // sideBox.css({right:'0'},function(){
  //   sideBox.removeAttr('style');
  // });
     var style = parseInt(sideBox.css('right'));
   console.log(style);

  //if ( parseInt(sideBox.css('right')) == 0) { //'0px'로 안쓸거면 정수로 치환시켜야지만됨parseInt(sideBox.css('right') == '0px')
    if (style == 0){
    // sideBox.removeClass('style');
     sideBox.removeAttr('style');
    
  }else{
    // sideBox.addClass('style');
     sideBox.css({right:'0'});
  }
});







})(this.jQuery);
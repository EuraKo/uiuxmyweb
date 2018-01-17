//winter bannerBox.js

(function($){
var banner=$('.banner_area');
var bannerUl= banner.children('ul'); 

var bannerLast =bannerUl.children('li');

bannerLast.last().prependTo(bannerUl); 
bannerUl.css({marginLeft:'-100%'}); 
banner.css({overflow:'hidden'}); 

var leftBtn=$('.banner_btn').children('button').first();
var rightBtn=$('.banner_btn').children('button').last();

leftBtn.on('click',function(e){
  e.preventDefault();
  bannerUl.stop(false,true).animate({marginLeft:0},function(){
    bannerLast=bannerUl.children('li').last();
    bannerLast.prependTo(bannerUl);
    bannerUl.css({marginLeft:'-100%'});
  });
});

rightBtn.on('click',function(e){
  e.preventDefault();
  bannerUl.stop(false,true).animate({marginLeft:'-200%'},function(){
    bannerLast=bannerUl.children('li').first();
    bannerLast.appendTo(bannerUl);
    bannerUl.css({marginLeft:'-100%'});
  });
});

// indicator
var indi=$('.indicator');

var indiUl=indi.children('ul');
var indiLi=indi.children('li');
var indiLi_01=indi.children('li').eq(0);
var indiLi_02=indi.children('li').eq(1);
var indiLi_03=indi.children('li').eq(2);
var indiLi_04=indi.children('li').eq(3);

var bannerLi_01=bannerUl.children('li').eq(0);
var bannerLi_02=bannerUl.children('li').eq(1);
var bannerLi_03=bannerUl.children('li').eq(2);
var bannerLi_04=bannerUl.children('li').eq(3);


indiLi.on('click',function(e){
  e.preventDefault();
  var myBanner=$(this).index();
  console.log(myBanner);
})

})(this.jQuery);



























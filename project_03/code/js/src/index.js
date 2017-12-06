(function($){

  //슬라이스배너
  var ban=$('.banner');
  var banUl=ban.children('ul');
  var banLi=banUl.children('li');
  banLi.last().prependTo(banUl);

  banUl.css({marginLeft:'-100%'});

  ban.css({overflow:'hidden'});

  var leftBtn=$('.btn').children('bttton').first();
  var rightBtn=$('.btn').children('button').last();

  leftBtn.on('click',function(e){
    e.preventDefault();
    banUl.stop(false,true).animate({marginLeft:0},function(){
    banLast=banUl.children('li').last();
    banLast.prependTo(banUl);
    banUl.css({marginLeft:'-100%'});
});
  });//leftBtn

rightBtn.on('click',function(e){
  e.preventDefault();
  banUl.stop(false,true).animate({marginLeft:'-200%'},function(){
    banLast=banUl.children('li').first();
    banLast.appendTo(banUl);
    banUl.css({marginLeft:'-100%'});
  });
});


})(this.jQuery);
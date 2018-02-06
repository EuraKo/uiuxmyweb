// 
(function($){
// #gnb -------------------------
var gnbShowBtn=$('.gnb_show');
var gnb = $('#gnb');
var gnbBtn = gnb.children('.gnb_btn');
gnbShowBtn.on('click',function(e){
  e.preventDefault();
  gnb.addClass('active');
  gnb.after('<div class="blind"></div>');
  $('.blind').css({position:'fixed',width:'100%',height:'100%',zIndex:400,backgroundColor:'rgba(0,0,0,0.5)',top:0,right:0});
});


gnbBtn.on('click',['button'],function(e){
  e.preventDefault();
  gnb.removeClass('active');
  $('.blind').remove();
});




  // sideBox menu----------------------
  var sideBox=$('#sideBox');
  var sideBtn=$('.side_btn');
var sideBtnIn= sideBtn.find('button');
var sideText = sideBtnIn.text();
var rightBtn = parseInt(sideBtn.css('right'));
var widthBtn = parseInt(sideBtn.css('width'));

  sideBtn.on('click',['button'],function(e){
    e.preventDefault();
// sideBox.toggleClass('active');
var sideActive = sideBox.hasClass('active');
if(!sideActive){
  sideBox.addClass('active');
  sideBtnIn.text('닫기');
  $(this).css({right:'0',width:'200px'});

}else{
  sideBox.removeClass('active');
  sideBtnIn.text(sideText);
  $(this).css({right:rightBtn, width:widthBtn});
  
}
  });



})(this.jQuery);
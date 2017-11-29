//position_02.js

(function($){
    // $('#popupBox>button').on('click', function(){
    //     $('#popupBox').hide();
//})  1번째원칙
        // var popupBox = $('#popupBox');
        // popupBox.children('button').on('click',function(){
        //     popupBox.hide();
        // });
   var popupBox = $('#popupBox');
  popupBox.children('button').on('click',function(){
   popupBox.slideUp(1000);}  );


$('h1').on('click',function(){
$('#popupBox').fadeIn();
});
 

//일정스크롤 이상 위치에서 부분 나타나게 만들기
var sideBox = $('.side_box');
var topBtn = $('.top_btn');

sideBox.delay(500).fadeOut();
var content = $('#contentBox').offset().top;
console.log(content);
$(window).on('scroll',function(){
    popupBox.fadeOut();

    var scroll_top = $(this).scrollTop();
    console.log(scroll_top);
    if(scroll_top >= content){
        sideBox.fadeIn();
        topBtn.fadeIn();

    }else{
        sideBox.fadeOut();
        topBtn.fadeOut();
    }
});
})(this.jQuery);
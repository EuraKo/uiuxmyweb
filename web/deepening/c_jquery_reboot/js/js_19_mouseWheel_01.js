// js_19_mouseWheel_01.js
(function($){
  //mousewheel, DOMMouseScroll
  var headBox = $('#headBox');

  var scrollEvent = true;

  $(window).on('mousewheel DOMMouseScroll',function(e){
    //둘중의 하나의 기능으로만 하는것이라서 콤바안쓰고 띄어쓰기임
    // console.log(e);
    var E = e.originalEvent; //둘다 동일한 originalEvent프로퍼티가들어감
    var delta = 0; //DOMMouseScroll에 있는값
    // console.log(E);
    //console.log(E.detail); //firefox에만 존재(3의 수치)
    // console.log(E.wheelDelta); //other에 존재 (120의 수치)

if(scrollEvent){
  scrollEvent = false;
    if(E.detail){ //존재하면 참이고 존재하지 않으면 거짓이다라는 뜻
      // delta =1;
delta = E.detail * -40;
    }else{
      // delta = -1;
      delta = -E.wheelDelta;
    }
  }

    console.log(delta);
    if(delta > 0){
      headBox.stop().animate({top:-100},300,function(){
      scrollEvent = true;
    });
  }else if(delta < 0){
    headBox.stop().animate({top:0},300,function(){
      scrollEvent = true;
    });
}
  });

})(this.jQuery);
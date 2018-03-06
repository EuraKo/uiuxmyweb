// mousewheel_02-2.js
(function($) {
  var arr = [];
  var scrollView = $('.scroll_view');
  var i = 0;
  var sLength = scrollView.length;
  for(; i < sLength; i++){ arr[i] = scrollView.eq(i).offset().top; }
  console.log(arr);
  var body = $("html, body"); // 브라우저 별로 다르기 때문에 둘다 쓴다.
  // body.scrollTop(0);
  body.stop().animate({scrollTop:0}, 500, 'swing'); 
  // 처음부터 가장 최 상단에 유지하게 하기

  var viewEq = 0, delta = 0,nowScrollTop = 0;


  // scrollView.on('mouseenter', function() {
  //   console.log($(this).index()); // header가 있어서 1부터 뜬다.
  // });
var nowScrollTop = 0;
  scrollView.on('mousewheel DOMMouseScroll',function(e) {
    var E = e.originalEvent;
    var _thisI = $(this).index()-1; // header가 있어서 1부터이므로 -1로 해준다.
    // console.log(_thisI);
    var _thisTop = $(this).offset().top;
// 화면의 스크롤이 얼마큼 됐을때 넘어가겠다.

    var viewH = scrollView.first().height();
    var viewCut = viewH / 20;
    // console.log(viewCut)

    // console.log(_thisI + '번째 위치'); // header가 있어서 1부터 뜬다.
    // console.log('위치값 현재:'+arr[_thisI], '위치값 다음:'+arr[_thisI+1]);
    // console.log('화면높이'+scrollView.first().height());
    // console.log('화면에서 이동위치'+_thisTop);
    // console.log('scrollTop: '+body.scrollTop() );

    if( body.is(':animated') ){ return; }
      // is : animate가 수행/진행 되고 있는지 아닌지 확인
      // hasClass :  해당 class가 있는지 없는기 확인

      // 스크롤 후에 높이값 파악하기 (일정시간 뒤에 파악 500)
      
      setTimeout(function(){
        // console.log('스크롤 후 scrollTop: '+body.scrollTop() );
        nowScrollTop = body.scrollTop();
        return nowScrollTop;
      },500);
// console.log(nowScrollTop);//현재스크롤 위치파악
/*----------------------
// 현재 위치에서 (_thisI),
// 마우스 스크롤의 위치파악하고 (nowScrollTop),
// 해당 위치의 값의 기준 arr[thisI]+ 1/3(viewCut) 지점의 위치를 넘어가지 못하면,
// 원래 있던 위치로 이동 (arr[thisI])
// 해당하는 지점에서 1/3을 넘어가는 시점에서는 다음 위치로 이동(arr[_thisI+1])
----------------------------*/
var baseCutScroll = arr[_thisI] + viewCut;
var minCutScroll = arr[_thisI] - viewCut;

  (E.detail) ? delta = E.detail * 40 : delta = -E.wheelDelta; 

// 조건비교
  var bodyAni = function(count) {
    body.stop().animate({scrollTop:arr[count]},400,'swing');
  };
  // console.log(delta, baseCutScroll);

  setTimeout(function() {
    console.log(nowScrollTop, baseCutScroll); //해당이치의 값의 기준 검증
    if(delta > 0){
      (nowScrollTop < baseCutScroll) ? bodyAni(_thisI) : bodyAni(_thisI+1);
    }else{
      (nowScrollTop > minCutScroll) ? bodyAni(_thisI) : bodyAni(_thisI-1);
    }
  },400);
    

    // (delta > 0) ? viewEq++: viewEq--;
    // if(viewEq < 0){viewEq = 0;}else if(viewEq > sLength){viewEq = sLength;}
    // console.log(viewEq);
    // body.stop().animate({scrollTop:arr[viewEq]}, 500, 'swing');
  }); // scrollView.on()


})(this.jQuery);
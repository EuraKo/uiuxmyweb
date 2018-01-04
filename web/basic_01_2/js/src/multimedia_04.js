(function($){

var baseUrl="../multi/video/";
var videoList =[
                {title:'wannaOne',singTit:'ㅎㅅㅎ', singer:'워너원'},
                {title:'btob',singTit:'웃긴동영상', singer:'비투비'},
                {title:'iu',singTit:'제제', singer:'아이유'},
                {title:'redVelvet ',singTit:'피카부', singer:'레드벨벳'},
                {title:'twice',singTit:'하트셰이커', singer:'트와이스'}
                ];

var videoListLength = videoList.length;
//console.log(videoListLength);
// ---------------------------------------------------
//video태그의 첫번쨰 곡담기

var video = $('.video_player').find('video');
var i = 0;
//baseUrl + videoList[0].title + '.mp4';
video.append('<source src="'+baseUrl + videoList[i].title+'.mp4'+'" type="video/mp4">');
//videoSrc.attr({'src':baseUrl + videoList[i].title + '.mp4','type':'video/mp4'});//attr표현방식
var videoSource = video.find('source');
// -------------------------------------
//버튼생성해서 기능 부여하기

//var videoSrc = video.find('source');
var play,pause,next,prev;

 var play = $('.play'); //재생버튼
 var pause = $('.pause');//일시정지버튼
 var prev = $('.prev');//다음영상 재생버튼
 var next = $('.next');//이전영상 재생버튼

play.on('click',function(e){
  e.preventDefault();
  //video[0].load();//무조건 처음으로 되돌아가라는 뜻이므로 일시정지하려면 load쓰면안됨
  video[0].play();
});
 pause.on('click',function(e){
  e.preventDefault();
  //video[0].load();
  video[0].pause();
 });


prev.on('click',function(e){
   e.preventDefault();
   i--;
   if(i<0){
    i = videoListLength - 1;}
   videoSource.attr({'src':baseUrl + videoList[i].title + '.mp4'});
  // i--;
  // if(i < 0){
  //   i = videoListLength -1;
  //  videoSrc.attr({'src':baseUrl + videoList[i].title + '.mp4','type':'video/mp4'});
  // }else{
  //    videoSrc.attr({'src':baseUrl + videoList[i].title + '.mp4','type':'video/mp4'});
  // }

  video[0].load();
  video[0].play();
});

 next.on('click',function(e){
  e.preventDefault();
  i++;
  if(!(i < videoListLength)){ i=0; }
  //(i==videoListLength)(i>=videoListLength)와 동일하며 !의뜻은 참을 거짓으로 만드는것느낌표넣는게 속도가더빠름
  //만약 아이가 랭스보다 작은게 아니라면(크거나같다면) 아이는 0이다.

    videoSource.attr({'src':baseUrl + videoList[i].title + '.mp4'});
  video[0].load();
  video[0].play();
 });
 //목록만들기------------------------------
var content = $('.contentList');
content.append('<ul></ul>');
var contentBox = content.find('ul');
for(var j =0;j<videoListLength;j++){
contentBox.append('<li><button type="button"><strong>제목 :</strong>'+videoList[j].singTit+' '+

                    '<strong>가수명 : </strong>'+videoList[j].singer+ '</button></li>');
}
content.css({width:'30%', float:'left'});
contentBox.css({color:'#09a'});
contentBox.find('button').css({backgroundColor:'transparent',color:'inherit',padding:'0.1rem'});
contentBox.find('strong').css({fontWeight:'bold'});

//li 클릭하여 순서체크하기----------------------------
contentBox.children('li').on('click',function(e){
  e.preventDefault();
  i = $(this).index(); //var를 안쓰는건 기존 인수값을 가져오겠다.
  videoSource.attr({'src':baseUrl + videoList[i].title + '.mp4'});
  video[0].load();
  video[0].play();
});
//-------------------------
contentBox.children('li').on('click',function(e){
  e.preventDefault();
  i = $(this).index();
  videoSource.attr({'src':baseUrl + videoList[i].title + '.mp4'});
  video[0].load();
  video[0].play();
});
$(document).on('keydown',function(e){
  if(e.keyCode == 27){
    video[0].pause();
  }else if(e.keyCode == 13){
    video[0].play();
    //http://keycode.info
  }
});




})(this.jQuery);






















(function($){
// multimedia_03.js

var baseUrl="../multi/audio/";
var musicList = [
                  {title:'veil', singer:'이승기'},
                  {title:'cheerU', singer:'Twice'},
                  {title:'DoItAgain', singer:'Twice'},
                  {title:'Touchdown', singer:'Twice'}
];
var musicListLength = musicList.length;
//오디오태그에 기본내용삽입하기
var audio = $('audio');

audio.append('<source>');

var audioSrc = audio.find('source');
var i = 0;
//baseUrl + musicList[i].title + '.mp3'//기본내용삽입
audioSrc.attr({'src':baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});


//play 버튼 클릭시, 오디오재생하기
var play = $('.play');
play.on('click',function(e){
  e.preventDefault();
  audio[0].load();
  audio[0].play();
});

var next = $('.next');
next.on('click',function(e){
  e.preventDefault();
  i++; // 0일때 1씩 더해지면 2.3으로가고 4가되면 부합값이 없으므로 다시 최초의값 0으로 간다.
  if(i < musicListLength){
  audioSrc.attr({'src':baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});
}else{
  i = 0;
   audioSrc.attr({'src':baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});
}
  audio[0].load();
  audio[0].play();

});

var pause = $('.pause');
pause.on('click',function(e){
  e.preventDefault();
  audio[0].load();
  audio[0].pause();
});

var prev = $('.prev');
prev.on('click',function(e){
  e.preventDefault();
  i--;
  if(i < 0){
    i = musicListLength - 1 ;
    audioSrc.attr({'src':baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});
  }else{
    audioSrc.attr({'src':baseUrl + musicList[i].title + '.mp3','type':'audio/mp3'});
  }

  audio[0].load();
  audio[0].play();
});





})(this.jQuery);












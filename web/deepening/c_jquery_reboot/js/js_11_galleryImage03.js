// js_11_galleryImage03.js
(function($){
// 플러그인 실행함수 $.fn.생성이름
  $.fn.myGallery=function(dataUrl,baseImageFolder){
  //기본형태제작
  // var galleryBox =$('#galleryBox');
  var galleryWrapBox;
  // 아래에서 말하는 this는 html script안에 들어가는 $('#gb')이다.
  if(this.attr('id')){
    //console.log('ok!');
galleryWrapBox ='#'+this.attr('id');
  }else if(this.attr('class')){
    //console.log('no');
    galleryWrapBox = '.'+this.attr('class');
  }
  console.log(galleryWrapBox);
  console.log(this[0]);
  console.log(this);
  var galleryBox = this;
  //this는 자바스크립트의 this를 의미힘
  // 간단하게 설명하자면, 여기서 this는 선택자이다.즉 실행함수(메소드)앞에 존재하는 선택자를 말한다.
  galleryBox.append('<div class="gallery_view"><p class="hidden"></p></div>');
  galleryBox.append('<div class="gallery_list"><ul></ul></div>');
var galleryView = $('.gallery_view');
var galleryList = $('.gallery_list');
var galleryUl = galleryList.children('ul');

// 각 사용될 이미지 위치 체크
// var baseUrl ='../img/gallery_img_01/';
var baseUrl =baseImageFolder;
var bigUrl =baseUrl+'big/';
var thumUrl =baseUrl+'thum/';

//html문서에 css(style)삽입하기
var styleHas = $('head').find('style').length;
/*if(styleHas > 0){
  // console.log("style태그 있음");
  // style존재할경우 내부에 css작성
}else{
  // console.log("style태그 없음");
//  style존재하지 않을 경우 style 태그를 생성
$('head').append('<style></style>');
}*/
// 태그가 없을경우생성 위와 동일한걸줄인것
if(!styleHas >0 ){$('head').append('<style></style>');}
$('head').find('style').append(galleryWrapBox+'{width: 100%;height: auto;box-sizing: border-box;padding: 0.5rem;}');
$('head').find('style').append(galleryWrapBox+'>.gallery_view{width: 100%;height: 550px;background-color: #acc;box-sizing: border-box;bottom: 1px solid  #cca;margin-bottom: 1rem;border-radius: 1rem;background-repeat: no-repeat;-webkit-background-size: cover;background-size: cover;}');
$('head').find('style').append(galleryWrapBox+'>.gallery_list{width: 100%;height: auto;}');
$('head').find('style').append(galleryWrapBox+'>.gallery_list>ul{width: 100%;height: auto;}');
$('head').find('style').append(galleryWrapBox+'>.gallery_list>ul>li{width: 18%;height: 120px;margin: 1%;float: left;}');
$('head').find('style').append(galleryWrapBox+'>.gallery_list>ul>li>button{width: 100%;height: 100%;background-color: #aaf;border-radius: 0.7rem;background-repeat: no-repeat;background-position: center; -webkit-background-size: cover;background-size: cover;box-shadow:0.1rem 0.1rem 0.1rem rgba(0,0,0,0.3)}');

// 가져올 파일 경로설정
// $.getJSON(불러올파일명,function(불러온파일데이터가 담기는곳){});
// var jsonUrl = '../js/data/js_11_galleryImage01.json';
var jsonUrl = dataUrl;
$.getJSON(jsonUrl,function(data){
  console.log(data);
$.each(data,function(index,value){
  // data불러오기체크
  // console.log(index+': '+value.thum);

  // 어제 헀던 내용으로 html 문서에 이미지 갤러리를 구현하시오
galleryUl.append('<li><button type="button"><span class="hidden">'+ value.thum +'</span></button></li>');
galleryUl.children('li').eq(index).children('button')
            .css({'backgroundImage':'url('+thumUrl+value.file+')'});
});//$.each()
// 첫이미지/내용 메인에 삽입
galleryView.css({backgroundImage:'url('+bigUrl+data[0].file+')'});
galleryView.find('p').text(data[0].big);

//클릭하기 위한 기능사용(getJSON메소드를 통해 처리된 기능을 사용함 꼭!json()안에 넣어주기-------------
var galleryBtn = galleryUl.children('li');
console.log(galleryBtn);
galleryBtn.on('click',function(e){
  e.preventDefault();
  var myImg = $(this).find('button').css('backgroundImage');
  console.log(myImg);
  var thisI = $(this).index();
  galleryView.css({'backgroundImage':'url('+bigUrl+data[thisI].file+')'});
  galleryView.find('p').text(data[thisI].big);
});
// -------------------------------------------------------
});//$.getJSON
};//plugin myGallery생성!
})(this.jQuery);


















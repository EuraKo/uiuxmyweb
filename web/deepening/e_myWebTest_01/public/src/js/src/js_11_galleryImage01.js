// js_11_galleryImage01.js
(function($){
// background-image 를 사용하기
// view부분과 btn부분 구분생성하기
var gallery=$('#galleryBox');
gallery.append('<div class="gallery_view">');
gallery.append('<div class="gallery_btn">');


var galleryView = $('.gallery_view');
var galleryBtn = $('.gallery_btn');
galleryBtn.append('<ul class="clearfix">');
var galleryArea = galleryBtn.children('ul');
var galleryList;
// 이미지 경로파악하기

var url = '../../img/gallery_img_01/';
var thumUrl =url+'thum/';
var bigUrl =url+'big/';
// 작은 이미지 각각처리하여 만들기
// var galleryList = $('.gallery_btn').children('ul').children('li');

var galleryArr = [];
// json형식으로 직접 작성해야하지만.....
  // galleryArr = [
    //     {file:'gallery_image_1.jpg', title:'아이돌그룹 1'},
    //     {file:'gallery_image_2.jpg', title:'아이돌그룹 2'},
    //     {file:'gallery_image_3.jpg', title:'아이돌그룹 3'},
    //     {file:'gallery_image_4.jpg', title:'아이돌그룹 4'},
    //     {file:'gallery_image_5.jpg', title:'아이돌그룹 5'},
    //     {file:'gallery_image_6.jpg', title:'아이돌그룹 6'},
    //     {file:'gallery_image_7.jpg', title:'아이돌그룹 7'},
    //     {file:'gallery_image_8.jpg', title:'아이돌그룹 8'},
    //     {file:'gallery_image_9.jpg', title:'아이돌그룹 9'},
    //     {file:'gallery_image_10.jpg', title:'아이돌그룹 10'},
    //     {file:'gallery_image_11.jpg', title:'아이돌그룹 11'},
    //     {file:'gallery_image_12.jpg', title:'아이돌그룹 12'},
    //     {file:'gallery_image_13.jpg', title:'아이돌그룹 13'},
    //     {file:'gallery_image_14.jpg', title:'아이돌그룹 14'},
    //     {file:'gallery_image_15.jpg', title:'아이돌그룹 15'}
  // ];
var galleryLength =15;
var i = 0;

for(;i<galleryLength;i++){
  galleryArr[i] = 'gallery_image_'+(i+1)+'.jpg';
  galleryArea.append('<li><button type="button"><span class="hidden">'+galleryArr[i]+'</span></button></li>');
  var galleryList = $('.gallery_btn').children('ul').children('li');
  galleryList.eq(i).find('button').css({backgroundImage:'url('+thumUrl+galleryArr[i]+')'});
};
// list 클릭
galleryList.on('click',function(e){
  e.preventDefault();
  var thisI = $(this).index();
galleryView.css({backgroundImage:'url('+bigUrl+'gallery_image_'+(thisI+1)+'.jpg)'})

});




})(this.jQuery);
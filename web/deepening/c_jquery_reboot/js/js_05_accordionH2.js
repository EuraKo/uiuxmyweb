// js_05_accordionH2.js
(function($){
var dl = $('dl');
var basicDlLeft = [];
var i = 0;
var mtLeft;
for(;i < dl.length;i++){
// basicDlLeft[i] = parseInt(dl.eq(i).css('left'));
// basicDlLeft[i] = parseInt(basicDlLeft[i]); //위와동일
myLeft = dl.eq(i).css('left');
basicDlLeft[i] = parseInt(myLeft);
}
// console.log(basicDlLeft);//콘솔을 찍으면 문자화되기때문에 위에 parseInt로 정수화한다.

var dtLink = $('dt');
dtLink.on('click',function(e){
e.preventDefault();
var _thisI = $(this).parent().index();

console.log(_thisI);
// dl.eq(_thisI).animate({left:64 * _thisI + 'px'}); //얘가 있으면 딜레이쳐먹으면서 늦게따라옴
for(var j = _thisI ; j > 0;j--){
  dl.eq(j).css({left:64 * j + 'px'});
}
dl.eq(_thisI).nextAll().removeAttr('style');
//이거쓰고 css transition주면 반대로가는것도 효과들어감.
});



})(this.jQuery);
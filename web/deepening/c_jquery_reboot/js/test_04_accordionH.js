// test_04_accordionH.js
(function($){
var accDt = $ ('.arccordion').find('dt');
var accDd = $ ('.arccordion').find('dd');

var ddWidth = [];
// console.log(accDd.length);
var i = 0;

for (;i<accDd.length;i++){
ddWidth[i] = accDd.eq(i).innerWidth();
}
console.log(ddWidth);

$('dd').hide();

var myHide = function(select){
  var _this = select;
  var _thisI = select.index()/2;
  _this.next('dd').siblings('dd').animate({width:0,paddingRight:0,paddingLeft:0},function(){
    var _$this = $(this);
    _$this.css({display:'none'});
  });
};

var myShow = function(select){
  var _this = select;
  var _thisI = select.index()/2;
  _this.next('dd').css({display:'block',paddingLeft:0,paddingRight:0,width:0});
  _this.next('dd').animate({paddingLeft:'2rem',paddingRight:'2rem',width:ddWidth[_thisI]});
};
var mySelHide = function(select){
  var _this = select;
  var _thisI = select.index()/2;
   _this.next('dd').animate({width:0,paddingRight:0,paddingLeft:0},
    function(){
    _this.next('dd').css({display:'none'});
    });
};

accDt.on('click',['button'],function(e){
  e.preventDefault();
  var sel = $(this);
  var ddView = sel.next('dd').css('display') == 'block';
  if(ddView){
      mySelHide(sel)
  }else{
  myShow(sel);
  myHide(sel);

  };
});




})(this.jQuery);























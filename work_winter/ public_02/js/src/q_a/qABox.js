(function($){
var qABox = $('#qABox');
var qAdl=qABox.children('dl');
var qAdt=qAdl.children('dt');
var qAi=qAdt.children('i');
var qAdd=qAdl.children('dd');

qAdt.on('click',function(e){
  e.preventDefault();

  $(this).next().slideToggle();
  var iClass=qAi.attr('class');
  console.log(iClass);

qAi.attr({"class":"fa fa-caret-up"});


// if(qAi.hasClass("fa-caret-up")){
//   qAi.attr({class:"fa fa-caret-down"});
// }



});

})(this.jQuery);
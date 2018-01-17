(function($){
  var gnbBox = $('#gnbBox');
  var gnbBtn = gnbBox.children('button');
  var gnbUl = gnbBox.children('ul');

  gnbBtn.on('click',function(e){
    e.preventDefault();
gnbUl.fadeToggle();  
  var active=gnbBtn.toggleClass('active');
  console.log(iClass);


});

})(this.jQuery);
// test_02_accodian_01.js
(function($){

var btn = $('#accodian').find('dt');
var par = $('p');

var myindex = function(i){
  switch(i){
    case 0:
    par.toggle(); break;

        case 1:
    par.toggle(); break;

        case 2:
    par.toggle(); break;

        case 3:
    par.toggle(); break;

        case 4:
    par.toggle(); break;

        case 5:
    par.toggle(); break;

        case 6:
    par.toggle(); break;

        case 7:
    par.toggle(); break;

        case 8:
    par.toggle(); break;

        default:
    par.toggle(); break;

  }
};
btn.each(function(i){
  $(this).on('click',function(e){
    e.preventDefault();
console.log(i);
 $(this).next().toggle();
myindex(i);
  });
});





})(this.jQuery);
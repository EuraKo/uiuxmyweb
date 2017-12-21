(function($){

function ImportFile(makeFile, file,backgroundIf){

  var myDiv=wrap.append('<div class="'+ makeFile +'Wrap">');
var select=$('.'+makeFile+'Wrap');
select.load(file, function(){
  var childrenBox=select.children();

  if(backgroundIf == true){
    var bgColor = childrenBox.css('backgroundColor');
    select.css({'backgroundColor':bgColor});
  }
});
}
  var wrap=$('#wrap');
  var baseUrl='../../html/src/';
  var loadFile={headBox : baseUrl+'all/headBox.html',
  gnbBox : baseUrl+'all/gnbBox.html',
  c_4_productBox :  baseUrl+'c_product/c_4_productBox.html',
  sideBox : baseUrl+'all/sideBox.html',
  footBox : baseUrl+'all/footBox.html'};

ImportFile('headBox',loadFile.headBox, true);
ImportFile('gnbBox' , loadFile.gnbBox, true);
ImportFile('c_4_productBox' , loadFile.c_4_productBox, true);
ImportFile('sideBox', loadFile.sideBox, true);
ImportFile('footBox',loadFile.footBox, true);

})(this.jQuery);
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
  d_1_reviewBox :  baseUrl+'d_community/d_1_reviewBox.html',
  listBtnBox :  baseUrl+'all/listBtnBox.html',
  d_1_reviewBox_2 : baseUrl+'d_community/d_1_reviewBox_2.html',
  sideBox : baseUrl+'all/sideBox.html',
  footBox : baseUrl+'all/footBox.html'};

ImportFile('headBox',loadFile.headBox, true);
ImportFile('gnbBox' , loadFile.gnbBox, true);
ImportFile('d_1_reviewBox' , loadFile.d_1_reviewBox, true);
ImportFile('listBtnBox' , loadFile.listBtnBox, true);
ImportFile('d_1_reviewBox_2' , loadFile.d_1_reviewBox_2, true);
ImportFile('listBtnBox' , loadFile.listBtnBox, true);
ImportFile('sideBox', loadFile.sideBox, true);
ImportFile('footBox',loadFile.footBox, true);

})(this.jQuery);
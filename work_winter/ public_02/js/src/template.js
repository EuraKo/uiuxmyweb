// template.js
function ImportFile(makeDivName,linkFile,wrapColorBoolean){

  var wrap=$('#wrap');
  var wrapDiv = wrap.append('<div class="'+makeDivName+'Wrap"></div>');
  var select = $('.'+makeDivName+'Wrap');
  select.load(linkFile,function(){
    var selectChild = select.children();
    selectChild.css({margin:'0 auto'});
    var wrapColorBoo = wrapColorBoolean | true;

if(wrapColorBoo){
  var selectColor = selectChild.css('backgroundColor');
  select.css({backgroundColor:selectColor});
}

  });
}
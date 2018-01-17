// main_temp.js
(function($){
var baseUrl = './src/';
var myHtml = [
              {make:'headBox',load:'all/headBox.html'},
              {make:'gnbBox',load:'all/gnbBox.html'},
              {make:'bannerBox',load:'main/bannerBox.html'},
              {make:'periodBox',load:'main/periodBox.html'},
              {make:'contentBox',load:'main/contentBox.html'},
              {make:'textBox',load:'main/textBox.html'},
              {make:'fnbBox',load:'all/fnbBox.html'},
              {make:'footBox',load:'all/footBox.html'}
];


for(var i = 0; i < myHtml.length; i++){
  ImportFile(myHtml[i].make,baseUrl+myHtml[i].load);
};


})(this.jQuery);


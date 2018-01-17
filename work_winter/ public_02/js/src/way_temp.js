// main_temp.js
(function($){
var baseUrl = './src/';
var myHtml = [
              {make:'headBox',load:'all/headBox.html'},
              {make:'gnbBox',load:'all/gnbBox.html'},
              {make:'wayTitleBox',load:'way/wayTitleBox.html'},
              {make:'cashBox',load:'way/wayBox.html'},
              {make:'fnbBox',load:'all/fnbBox.html'},
              {make:'footBox',load:'all/footBox.html'}
];


for(var i = 0; i < myHtml.length; i++){
  ImportFile(myHtml[i].make,baseUrl+myHtml[i].load);
};


})(this.jQuery);


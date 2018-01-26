//gulpfile.js

var gulp        = require('gulp');

// 폴더 및 파일생성 및 삭제-------------
// var fs          = require('fs'); //에러로 인해 사용하지않음
var mkdir       = require('mk-dirs');
var writeFile   = require('write');
var del         = require('del');

// 기능부여-----------------------------
var jquery      = require('jquery');
// var jqueryui    = require('jqueryui');
var fontAwesome = require('node-font-awesome');

//장식기능----------------------------------
var chalk       = require('chalk');
//안쓰는 모듈은 변수를 지워야한다. 아니면 다 오류남


//------------------------------------
//기본 경로설정
var url = {before:'./public/src/',after:'./public/dist/'};//가끔 노드모듈로 기본을 지정해서 ./달기


//------------------------------------
//mkdir 모듈을 이용하여 기본 폴더생성
gulp.task('makedir',function(){
  //makedir은 이름같아도 상관없으나 헷갈리니 바꾸장
  Promise.all([
mkdir('public'),
//before
mkdir(url.before),
mkdir(url.before + 'html'),
mkdir(url.before + 'html/src'),
mkdir(url.before + 'css'),
mkdir(url.before + 'css/base'),
mkdir(url.before + 'css/src'),
mkdir(url.before + 'js'),
mkdir(url.before + 'js/base'),
mkdir(url.before + 'js/src'),
mkdir(url.before + 'img'),
mkdir(url.before + 'media'),
mkdir(url.before + 'media/audio'),
mkdir(url.before + 'media/video'),
mkdir(url.before + 'font'),
//after
mkdir(url.after),
mkdir(url.after + 'img'),
mkdir(url.after + 'media'),
mkdir(url.after + 'font')

  ]);//node mk-dirs에서 검색하면 쓰는 방식나옴
});

//기본적인파일 생성후 내용 담기
//fs모듈울 
gulp.task('makefile',function(){

  //index.html-----------------
writeFile.sync(url.before + 'index.html','<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <script>\n    window.location = "./html/main.html";\n  </script>\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>');//한줄로 써서불러와야하기때문에 \n으로 해야 강제줄바꿈됨

//main.html----------------------
writeFile.sync(url.before+'html/main.html','<!DOCTYPE html>\n<html lang="ko-KR">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<!--[if lte IE 9]>\n<script src="../js/base/html5shiv-printshiv.js"></script>\n<script src="../js/base/html5shiv.js"></script>\n<script src="../js/base/modernizr/cli.js"></script>\n<script src="../js/base/css3pie/PIE_IE9.js"></script>\n<script src="../js/base/respond.js"></script>\n<![endif]-->\n<!-- ==========================font import=========== -->\nhref="../fontAwesome/css/font-awesome.min.css">\n==========css basic========= -->\nhref="../css/base/reset.css">\nhref="../css/base/common.css">\n==========design ======== -->\nhref="../css/src/index.css">\n==========favicon =============== -->\nicon" href="../favicon.png">\nn" href="../favicon.png" type="img/x-icon">\n<title>sitaname</title>\n</head>\n<body>\n#wrap>header#headBox+section#bannerBox+article#contentBox+footer#footBox\n<!-- script -->\n<script src="../js/base/jquery-3.2.1.js"></script>\n<script src="../js/base/jquery-ui.js"></script>\n<script src="../js/src/js"></script>\n</body>\n</html>');

//reset.css----------------------
writeFile.sync(url.before+'css/base/reset.css','/* reset.css */\n/* variable:color, size, font  */\n/* \n* color: *명도대비 기준으로 제작\n      - primary : #d07\n      - main : #faa\n      - point :\n      - font1 : #333\n      - font2 : #777\n      - font3 : #fff\n      - link :  #d07\n      - sub1 :\n      - sub2 :\n      - white : #fdfdfd\n      - gray1 : #333\n      - gray2 : #777\n      - black : #171717\n* size:* 접근성 크기의 내용을 기준\n* 인쇄의 경우는 기준의 폰트크기는 : 9pt, \n* 웹의 경우는 12pt를 권장 => 영문, 그래픽이미지일경우\n      - primary : 16px;  == 1rem;\n      - h1(bold) :  32px ==> 2rem;\n      - h2(bold) :  29px ==> 1.8125rem;\n      - h3(bold) :  28px ==> 1.75rem;\n      - h4(bold) :  24px ==> 1.5rem;\n      - h5(bold) :  22px ==> 1.375rem;\n      - h6(bold) :  20px ==> 1.25rem;\n      - big1 : 30pt ==> 2.5rem\n      - big2 : 27pt ==> 2.25rem\n      - narmal : 12pt ==> 1rem\n    \n* font:\n      - english : Roboto, "myriad pro", arial\n      - korean  : "Nanum Gothic Coding", dotum\n      - basic   : monospace, sans-serif\n* border:\n      - thin :  border:1px solid #333\n      - normal: border: 2px solid #777\n      - bold :  border: 5px solid #d07\n* responsive:\n      - mobileV :\n      - mobileH :\n      - tableV:\n      - tableH:\n      - pc :\n      - pcfull :\n*/\n/* base */\nhtml,body{width: 100%; height: 100%; \n        margin:0; padding:0; color:#333; font-size:16px; font-size:1rem;\n        font-family:Roboto,"myriad pro",arial,"Nanum Gothic Coding",dotum,monospace,sans-serif;   \n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;}\nh1, h2, h3, h4, h5, h6, p, pre, ul, ol, li, dl, dt, dd, div, \ntable, thead, tbody, tfoot, tr, th, td, \nform, fieldset, legend, input, textarea, select,\na, img,figcaption, figure{\n  margin:0; padding:0; border:0; outline:0; \n  color:inherit;  font-size:inherit; font-family:inherit;}\ntable,tr,td,th,thead,tbody,tfoot{border-collapse:collapse; border-spacing:0; }\nthead{background-color:#d07; color:#fff; text-indent:0;}\ntbody>tr:nth-of-type(2n+1){background-color:#faa; text-indent:0.5rem;}\ntbody>tr:nth-of-type(2n){background-color:#fff; text-indent:0.5rem;}\ntfoot{background-color: #7cf; font-weight: bold;}\nth,td{border:1px solid #777; border-left:0; border-right: 0;}\n/*th:first-of-type, td:first-of-type{border-left:0;} \nth:last-of-type,  td:last-of-type{border-right: 0;} */\nhr{margin: 0; padding: 0; border-bottom:1px solid #333;}\naddress, em, wbr, strong, ins, del, abbr{font-style:normal; font-weight:normal;}\nh1{font-size: 32px; font-size: 2rem;}\nh2{font-size: 29px; font-size: 1.8125rem;}\nh3{font-size: 28px; font-size: 1.75rem;}\nh4{font-size: 24px; font-size: 1.5rem;}\nh5{font-size: 22px; font-size: 1.375rem;}\nh6{font-size: 20px; font-size: 1.25rem;}\nul,ol,li{list-style:none; }\na{text-decoration:none; color:#777;}\na:hover, a:active{text-decoration:underline; color:#D07;}\ncode{ padding:6px; border:1px solid #777; background-color: #7af; }\nkbd {font-size: 1.2em; font-weight: bold; color:#fff; background-color: #333; border-radius:0.3rem;}\n/* form ============================================ */\ninput[type="text"],\ninput[type="password"],\ninput[type="search"],\ninput[type="email"],\ninput[type="tel"],\ninput[type="number"],\ninput[type="date"],\ninput[type="month"],\ninput[type="year"],\ninput[type="week"],\ninput[type="url"],\ntextarea{cursor:pointer; box-sizing:border-box; border:1px solid #777; border-radius:0;\n      background-color: #fff; text-indent:5px;} \ninput::-webkit-input-placeholder,\ninput::-moz-placeholder,\ninput:-ms-input-placeholder,\ninput:-moz-placeholder,\ninput:placeholder {color:#09a;}\nselect{-webkit-appearance:listbox;\n       -moz-appearance:listbox;\n        appearance:listbox; border: 0;}\ninput[type="submit"],\ninput[type="reset"],\ninput[type="image"],\ninput[type="file"],\ninput[type="button"],\nbutton, select {cursor:pointer; border-radius:0; \n  margin: 0; padding: 0; border: 0; outline: 0;}\n/*  html5 ============================================  */\nheader, nav, article, section, footer, aside, main, figure, figcaption, picture{\n  display:block; color:inherit;}');

//common.css------------------------
writeFile.sync(url.before+'css/base/common.css','/* common.css */\n.clearfix:after{content:" ";display:block; width:100%;height:0;clear:both;}\n.clearfix::after{content:" ";display:block; width:100%;height:0;clear:both;}\n.hidden_wrap a>span,\n.hidden{display:block; width:0;height:0;position:absolute; z-index:-100; overflow:hidden;}\n.hidden_wrap a{display:block;width:100%;height:100%;}\n#wrap ul>.first,\n#wrap ol>.first{margin-left:0;border-left:0;}\n#wrap ul>.last,\n#wrap ol>.last{margin-right:0;border-right:0;}\n#wrap ul>.top,\n#wrap ol>.top{margin-top:0;border-top:0;}\n#wrap ul>.bottom,\n#wrap ol>.bottom{margin-bottom:0;border-bottom:0;}\n.wrap{width: 100%;height: auto;}\n.wrap_full{width: 100%;min-width: 960px;height: auto;margin: 0 auto;}\n.wrap:after,.wrap_full:after{content:" ";display: block;clear: both;}\n@media screen and (min-width: 1024){\n  .wrap {width: 960px;margin: 0 auto;}\n  .wrap_full{width: 100%;min-width: 960px;}\n}\n/* accessibility.css */\na:focus, button:focus,\ninput[type="submit"]:focus,\ninput[type="reset"]:focus,\ninput[type="image"]:focus,\ninput[type="file"]:focus,\ninput[type="button"]:focus{outline:2px solid #d07; background-color:#d07;color:#fff;outline-offset: 3px;}\ninput[type="text"]:focus,\ninput[type="password"]:focus,\ninput[type="search"]:focus,\ninput[type="email"]:focus,\ninput[type="tel"]:focus,\ninput[type="number"]:focus,\ninput[type="date"]:focus,\ninput[type="month"]:focus,\ninput[type="week"]:focus,\ninput[type="year"]:focus,\ninput[type="week"]:focus,\ninput[type="url"]:focus,\ntextarea:focus{outline: 2px solid #d07;outline-offset: 3px;background-color: #faa;}\n/*grid responsive.css*/\n.row{width: auto;height: auto;}\n.row:after{content=" ";display: block;clear: both;}\n@media screen and (max-width: 480px) {\n  .mob_01{float: left; width: 16.666667%;}\n  .mob_02{float: left; width: 33.333333%;}\n  .mob_03{float: left; width: 50%;}\n  .mob_04{float: left; width: 66.666667%;}\n  .mob_05{float: left; width: 83.333333%;}\n  .mob_06{float: left; width: 100%;}\n}\n@media screen and (min-width: 481px) {\n  .tab_v_01{float: left; width: 11.111111%;}\n  .tab_v_02{float: left; width: 22.222222%;}\n  .tab_v_03{float: left; width: 33.333333%;}\n  .tab_v_04{float: left; width: 44.444444%;}\n  .tab_v_05{float: left; width: 55.555556%;}\n  .tab_v_06{float: left; width: 66.666667%;}\n  .tab_v_07{float: left; width: 77.777778%;}\n  .tab_v_08{float: left; width: 88.888889%;}\n  .tab_v_09{float: left; width: 100%;}\n}\n@media screen and (min-width: 768px) {\n  .tab_pc_01{float: left; width: 8.333333%;}\n  .tab_pc_02{float: left; width: 16.666666%;}\n  .tab_pc_03{float: left; width: 25%;}\n  .tab_pc_04{float: left; width: 33.333332%;}\n  .tab_pc_05{float: left; width: 41.666665%;}\n  .tab_pc_06{float: left; width: 50%;}\n  .tab_pc_07{float: left; width: 58.333331%;}\n  .tab_pc_08{float: left; width: 66.666664%;}\n  .tab_pc_09{float: left; width: 75%;}\n  .tab_pc_10{float: left; width: 83.333333%;}\n  .tab_pc_11{float: left; width: 91.666663%;}\n  .tab_pc_12{float: left; width: 100%;}\n}\n@media screen and (min-width: 1367px) {\n  .pc_full_01{float: left; width: 8.333333%;}\n  .pc_full_02{float: left; width: 16.666666%;}\n  .pc_full_03{float: left; width: 25%;}\n  .pc_full_04{float: left; width: 33.333332%;}\n  .pc_full_05{float: left; width: 41.666665%;}\n  .pc_full_06{float: left; width: 50%;}\n  .pc_full_07{float: left; width: 58.333331%;}\n  .pc_full_08{float: left; width: 66.666664%;}\n  .pc_full_09{float: left; width: 75%;}\n  .pc_full_10{float: left; width: 83.333333%;}\n  .pc_full_11{float: left; width: 91.666663%;}\n  .pc_full_12{float: left; width: 100%;}}');
});
// ----------------------------------------
//del 모듈이용하여 필요시 폴더를 삭제처리
// public폴더 삭제
gulp.task('cleanAll',function(){
return del('./public/', {forct: true});
//return결과값임 반환하다는 뜻 콘솔은 검증을 위한것이고 이것은 이값을 가지고 뭘하려고하는 것임
// {forct: true} 이거는 del값에 기본으로 들어가는값 토달지말기
//전자렌지 function 끓인 라면(결과값) return
});

//public/dist 폴더삭제
gulp.task('cleanDist',function(){
  return del([url.after+'*'], {forct: true});
//dist 폴더안에 내용물다지우나 dist폴더는 안지우겠다.return은 최정적으로 반환할때만써야함 리턴뒤에 뭐가있으면 뒤에애들안먹음.속도면에서는 리턴이 빠름
});

// -----------------------------------------
// 기능 추가
// jquery
gulp.task('jquery',function(){
gulp.src(['./node_modules/jquery/dist/jquery.min.js','./node_modules/jqueryui/jquery-ui.min.js'])
.pipe(gulp.dest(url.before+'js/base/'));
});
gulp.task('fontAwesomeFonts',function(){
  gulp.src(fontAwesome.fonts)
  .pipe(gulp.dest(url.before+'fontAwesome/fonts/'));
});
gulp.task('fontAwesomeCss',function(){
  gulp.src(fontAwesome.css)
  .pipe(gulp.dest(url.before+'fontAwesome/css'))
})
// -----------------------------------------

//public/dist/css 폴더삭제
gulp.task('cleanCss',function(){
 return del([url.after+'css'], {forct: true});
});


//2가지 이상 모듈 사용시 통합기능사용
// 최초makedir, makefile 기능 처리하기
gulp.task('fontAwesome',['fontAwesomeFonts','fontAwesomeCss'])
gulp.task('make', ['makedir','makefile','jquery','fontAwesome']);

// gulp.task('default',[]);
// gulp 라고만 쓰면 파일폴더 생성하게 하는 기능


//del       
//gulp.task('default');
//gulp.task('name',[]);
//browser-sync
//병합,압축,난독화......
//변환(convert)
//------------------------------------





gulp.task('test',function(){
  console.log('-------------');
  console.log(chalk.bold('걸프가 최초로 실행되었습니다.'));
  console.log(chalk.yellow.inverse('추카포카'));
  console.log('-------------');
});

/*
gulp 주요기능 이해하기
1.task() 
  의미상 일하다라는 뜻을 가지고 있듯,
  원하는 기능을 수행하기 위한 메소드
    걸프수행 이름을 작성(예)'test')하고, 기능을 수행하도록 처리!
*/
/*
gulp
browser-sync
chalk(기능이 많으니깐 확인해보시오.맥만 사용가능)

*/
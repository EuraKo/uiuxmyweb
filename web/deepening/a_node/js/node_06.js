//node_06.js
//fs.watchFile();

var fs = require('fs');

fs.watch('../css',function(event,filename){
  console.log('문서가 수정되었습니다!!!!!!'+event);
  //콘솔에 아무것도 안뜨는 것이 정상이다. 수정되었을 때만 콘솔을 띄워줌ㄴ
  //watchFile은 파일을 감지하는것이고 watch는 디렉토리감지기능
  if(filename){
    console.log('filename : ' + filename);
  }else{
    console.log('.....!!!!.......')
  }
});
//불안정하기떄문에 모든 os에서 완벽하게 구동되지않는다. change는 function의 event때문에 나오는 것임
/*
그외의 node.js기능
-난독화 :(crypto)읽는 것을 복잡하게 하는것 
-병합 : 여러개의 파일을 한파일로 만드는 것 
-캡슐 : 보호 외부에서 아예 접근하기 못하게 막는것
-압축화 : (uglify,바보같은) 알수없게 만들어라.주석삭제,기다란 변수값을 함축시킴 
예)var whatYourName="~" -> var w="~"
public에 들어가는 파일들.
pakage.json : 모듈설치목록
gulpfile.js : gulp의 기능 수행 ->개발하기위한 세팅
              gulp란?자동화 도구
*/
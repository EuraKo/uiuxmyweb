//server.js

var http = require('http');
//http를 요청한다
var fs = require('fs'); //file system
var Url = './html/';
var protocol = 8880;
    console.log('서버가 구현되었습니다.');
    console.log('http://localhost:'+protocol);
    console.log('위주소로 접속해 주세요.');

//아래는 서버를 생성하겠습니다.
http.createServer(function(req, res){
  fs.readFile(Url+'index.html',function(err, data){
    res.writeHead(200,{'content-Type' : 'text/html'}); 
    //200 : 요청성공
    //400 : 서버, 파일에러 404
    //500 : 서버, http상태코드 인터넷에 쳐서 참고하여 보기
    res.write(data);
    res.end();

  });
}).listen(1377);//localhost:8080도메인에 쓰면 뜬당!




















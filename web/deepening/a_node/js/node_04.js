//node_04.js
//file system - readFile 기능
 var fs = require('fs');
 //리콰이어는 호출하다라는 뜻
//file system모듈에는 여러가지 메소드가 존재한다.
//readFile(), writeFile(), watchFile() 등의 기능이 존재
//모듈 내부의 함수기능이고, 메소드로 처리됨.

/*비동기처리방식*/
console.log('fs 시작합니다. --------------------');
// fs.readFile() 형식으로 작성
//모듈.메소드(기능,실행); 
//기본형식이니 꼭 익혀두자!
 fs.readFile('data/user.json',function(err,data) {
console.log(''+data);//data: date값임. err는 검증하기위해서 쓰는 것임.

 });

console.log('fs 끝. --------------------');
//비동기 방식이라서 콘솔찍으면 값보단 콘손값이 먼저나옴.
 // btn.on('click',function(){})

/*동기처리방식*/
console.log('문서시작--------');
var random = fs.readFileSync('data/randomText.txt');
var user = fs.readFileSync('data/user.json');
console.log('txt: ' + random);
console.log('-------------------');
console.log('json: ' + user);
console.log('문서끝--------');


// fs.writeFile()
// fs.watchFile()
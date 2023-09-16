const express = require('express');
const app = express();
const fs = require('fs')
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/abc', function (req, res) { 
    const jsonD = fs.readFileSync('./test.json')
    res.send(JSON.parse(jsonD))
})

app.get('/abc/:id', function (req, res) { 
    const jsonD = fs.readFileSync('./test.json')
    const data = JSON.parse(jsonD)
    const {id} = req.params
    const aaa = data.filter(n=>n.id == id)
    res.send(aaa)
})

app.post('/insert', function (req, res) { 
    fs.writeFileSync('./test.json',JSON.stringify(req.body))
    res.send('완료');
})

app.listen(3030)


/* 
req = 사용자가 보낸 데이터 값을 받음 (axios.get('/?page=1'))
res.send = 값을 보내줌 ( .then(res)=>{ 여기로 send한 값을 보내줌 })  
console.log(req.query);로 터미널에서 값을 확인 가능 웹에서 새로고침해주기
const fs = require('fs') json 파일 데이터 값을 가져옴
============================================================================
app.get ('http://localhost:3030/abc?id=100')
ㄴ readFileSync = await가 설정된 명령어 읽는용
ㄴ JSON.parse = 값을 비워줌?
============================================================================
app.get('/abc/:id', function (req, res) 
ㄴ /:id = 동적 파일(값이 바뀌는 상황) 값을 찾아서 보내줌 
    ㄴ const {id} = req.params에 값이 들어옴 http://localhost:3030/abc/2
    ㄴ n.id == id  = id가 2와 같은것을 찾음
============================================================================
app.post ('http://localhost:3030/insert',{id:10000,name:'신규'})
ㄴ writeFileSync = 선언이 필요없음 뒤에 {에 입력값을 주면됨}
ㄴ JSON.stringify = { 입력값을 주면됨} 입력 값을 json형태로 변환
ㄴ body-parser 설치 후 콘솔로 확인 
    ㄴ console.log(req.body);
    ㄴ { 입력값을 주면됨} 이 안에 req.body를 입력하면 json에 값이 바뀜
============================================================================
http 메서드 중 get post 차이
ㄴ GET = 서버에서 작업을 바로 확인가능 
ㄴ POST = GET과 달리 전송할 데이터를 BODY에 담아서 전송함  
        ㄴ BODY는 길이의 제한없이 데이터를 전송할 수 있음
        ㄴ 이미지, 파일 등은 POST방식으로 주고 받아야함 
        ㄴ Fiddler 
        ㄴ send만 해주면 데이터 값을 확인 가능
EX) <form method="post"> 
*/
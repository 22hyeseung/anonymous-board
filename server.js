const http = require('http')
const fs = require('fs')
const url = require('url')


http.createServer((request,response) => {
  const pathname = url.parse(request.url).pathname;

  console.log("Request for" + pathname + "received.")
  // 파일 이름이 비어있다면 index.html로 설정
  if(pathname=="/"){
    pathname = "/index.html"
  }

  fs.readFile(pathname.substr(1), (err, data) => {
    if(err) {
      console.log(err)
      // error = true, 페이지를 찾을 수 없음
      // HTTP Status: 404 NOT FOUND
      // Content Type: text/plain
      response.writeHead(404, {'Content-type': 'text/html'})
    } else {
      // 페이지를 찾음
      // HTTP Status: 200 OK
      // Content Type: text/plain
      response.writeHead(200, {'Content-Type': 'text/html'})

      // 파일을 읽어와서 responseBody에 작성
      response.write(data.toString())
    }
    response.end()
  })
  // 파일 읽기
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081/');
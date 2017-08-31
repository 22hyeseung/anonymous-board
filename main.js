// // http 모듈 호출
// const http = require("http")

// http.createServer((req, res)=>{
//   res.writeHead(200, {'Content-type':'text/plain'})
//   res.end("Hello World\n")
// }).listen(8081);

// console.log("Server running at http://127.0.0.1:8081")

const fs = require("fs")

// const data = fs.readFileSync('input.txt')

fs.readFile('input.txt', (err, data)=>{
  if (err) return console.error(err)
    console.log(data.toString())
})
// console.log(data.toString())
console.log("Program has ended")

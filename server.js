// express 로드
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const sever = app.listen(3030, () => {
  console.log("Express server has started on port 3030")
});

// json 데이터 파일 로드
function readJsonFile(filepath, encoding) {

  if (typeof (encoding) == 'undefined') {
    encoding = 'utf8';
  }
  const file = fs.readFile(filepath, encoding);
  return JSON.parse(file);
}

function getConfig(file) {

  const filepath = __dirname + '/../data/' + file;
  return readJsonFile(filepath);
}

let contents = getConfig('contents.json');

// static 파일
app.use(express.static('public'));

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
// session
app.use(session({
  secret: '@#@#$huusz#@$#$',
  resave: false,
  saveUninitialized: true
}));

const router = require('./router/main')(app, fs);
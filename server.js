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

// json 데이터 파일 로드
function readJsonFileSync(filepath, encoding) {
  if (typeof (encoding) == 'undefined') {
    encoding = 'utf8';
  }
  const file = fs.readFileSync(filepath, encoding);
  if (file) {
    return JSON.parse(file);
  }
}

function getConfig(file) {
  const filepath = __dirname + "/data/" + file;
  return readJsonFileSync(filepath);
}

let contents = getConfig("contents.json");
// console.log(contents.si12ey["content"]);

app.get('/article/:key', function (req, res) {
  // res.send(contents[req.params.key]);
  // console.log(typeof(contents.content["id"]));
  // console.log(typeof(req.params.key));
  if (req.params.key === contents.content["id"]) {
    res.render('read', {contents});
  } else {
    res.status(404);
    res.send('404 Not Found')
  }
});

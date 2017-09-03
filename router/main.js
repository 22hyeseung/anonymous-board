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
  const filepath = __dirname + "/../data/" + file;
  return readJsonFileSync(filepath);
}

let contents = getConfig("contents.json");
// console.log(contents.si12ey["content"]);

module.exports = function (app, fs) {
  app.get('/index', function (req, res) {
    res.render('index')
  });


app.get('/article/:key', function (req, res) {
  let key = req.params.key;
  // console.log(contents.si12ey["id"]);
  // console.log(key);
  if (key) {
    let content = contents[key];
    res.render('read', { content });
  } else {
    res.status(404);
    res.send('404 Not Found')
  }
});


app.get('/post', function (req, res) {
  res.render('write');
  console.log('writing page is rendered.');
})

app.get('/admin', function (req, res) {
  res.render('admin');
  console.log("admin's page is rendered.");
})

}
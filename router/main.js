module.exports = function (app, fs) {
  app.get('/', function (req, res) {
    res.render('index')
  });

  app.get('/article', function (req, res) {
    res.render('read')
    console.log('read screen is rendered.')
    fs.readFile(__dirname + "/../data/" + "contents.json", 'utf-8', function (err, data) {
      console.log(data);
      res.end(data);
    });
  })

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
  
  app.get('/article/:key', function (req, res) {
    res.send(contents[req.params.key]);
    let content = contents.key["content"];
    res.render('read');
  });

  // app.get('/article/:id', function(req, res{

  // }));

  app.get('/post', function (req, res) {
    res.render('write')
    console.log('write screen is rendered.')
  })

  app.get('/admin', function (req, res) {
    res.render('admin')
    console.log('admin screen is rendered.')
  })

}
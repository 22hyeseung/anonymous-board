module.exports = function (app, fs) {

  // json data 로드해오기
  const contents = require('./loadData')(fs);

  app.get('/index', function (req, res) {
    res.render('index', { contents })
  });

  app.get('/article/:key', function (req, res) {
    let key = req.params.key
    // console.log(contents.si12ey["id"]);
    // console.log(key);
    if (key) {
      let content = contents.posts.find(elm => (elm.id === key));
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

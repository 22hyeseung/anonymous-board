module.exports = function(app, fs)
{
  app.get('/', function(req, res){
    res.render('index')
  });

  app.get('/article', function(req, res){
    res.render('read')
    console.log('read screen is rendered.')
    fs.readFile(__dirname + "/../data/" + "contents.json", 'utf-8', function(err, data){
      console.log(data);
      res.end(data);
    });
  })
    

  app.get('/article/:key', function(req, res){
    // fs.readFile(__dirname + '/../data/contents.json', 'utf-8', function(err, data){
    //   // 개별 게시글 데이터를 JSON 형태로 파싱, key값으로 가져온다.
    //   let contents = JSON.parse(data)[req.params.key];
    //   // 게시글 내용만 보낸다.
    //   return contents.content;
    // });
    res.send(contents[req.params.key]);
    // res.render('read')
  });

  // app.get('/article/:id', function(req, res{
    
  // }));

  app.get('/post', function(req, res){
    res.render('write')
    console.log('write screen is rendered.')
  })

  app.get('/admin', function(req, res){
    res.render('admin')
    console.log('admin screen is rendered.')
  })

}
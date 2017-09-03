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
module.exports = function(app, fs)
{
  app.get('/', function(req, res){
    res.render('index', {
      title: "Anony-Board"
    })
  });
  app.get('/list', function(req, res){
    fs.readFile(__dirname + "/../data/" + "contents.json", 'utf-8', function(err, data){
      console.log(data);
      res.end(data);
    });
  })

  // http://localhost:3030/article/si12yz
  app.get('/article/:id', function(req, res){
    fs.readFile(__dirname + "/../data/contents.json", 'utf8', function(err, data){
      var users = JSON.parse(data);
      res.json(users[req.params.id]);
    });
  });

  // app.post('/addUser/:username', function(req, res){
  //   var result = {};
  //   var username =  
  // })
}
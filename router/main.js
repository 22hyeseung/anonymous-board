module.exports = function(app, fs)
{
  app.get('/', function(req, res){
    res.render('index', {
      title: "Anony-Board",
    })
  });
  app.get('/list', function(req, res){
    fs.readFile(__dirname + "/../data/" + "user.json", 'utf-8', function(err, data){
      console.log(data);
      res.end(data);
    });
  })
}
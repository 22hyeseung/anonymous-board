module.exports = function(app, fs)
{
  app.get('/', function(req, res){
    res.render('index', {
      title: "Anony-Board"
    })
  });
  app.get('/article', function(req, res){
    fs.readFile(__dirname + "/../data/" + "contents.json", 'utf-8', function(err, data){
      console.log(data);
      res.end(data);
    });
  })
}
module.exports = function (app, fs) {
  const randomstring = require('randomstring');

  fs.open(__dirname + '/../data/contents.json', 'a+', (err, data) => {
    if (err) throw err;

    let contents = data.JSON.parse;
    let id = randomstring.generate(6);
    let d = new Date();
    let date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    let time = d.getTime();

    contents[contents.length + 1] = {
      "id": id,
      "title": app.body.post,
      "date": date,
      "time": time,
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi officiis architecto aperiam voluptas fuga unde molestiae, libero debitis, ducimus reiciendis earum sed sint est officia quidem vero dolorum, fugit",
      "comments": [
      ]
    }

    fs.appendFile(__dirname + '/../data/contents.json',stringify(contents), (err, data) => {
      if(err) throw err;
      console.log('새 글 추가 완료');
    });

    fs.close(data, () => {
      console.log('데이터 추가하고 파일 닫기');
    })
  })

}

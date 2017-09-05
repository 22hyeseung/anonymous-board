module.exports = function (fs) {
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
  return contents;
}

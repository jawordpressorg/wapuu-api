var fs = require('fs');
var csv = require("comma-separated-values");

fs.readFile('../wapuu.csv', 'utf8', function (err, text) {
  var result = new csv(text, { header: true }).parse();
  var data = [];
  for (var i=0; i<result.length; i++) {
    var line = result[i];
    var row = {};
    row.name = line.id;
    row.wapuu = {};
    row.wapuu.name = line['wapuu.name'];
    row.wapuu.url = line['wapuu.url'];
    row.wapuu.repository = line['wapuu.repository'];
    row.wapuu.src = line['wapuu.src'];
    row.wapuu.mime_type = line['wapuu.mime_type'];
    row.author = {};
    row.author.name = line['author.name'];
    if (line['author.url']) {
      row.author.url = line['author.url'];
    } else {
      row.author.url = "";
    }
    if (line['description']) {
      row.description = line['description'];
    } else {
      row.description = "";
    }
    data.push(row);
  }

  fs.writeFile('v1/wapuu.json', JSON.stringify(data));
});

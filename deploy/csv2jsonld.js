var fs = require('fs');
var csv = require("comma-separated-values");
var stdout = process.stdout;

fs.readFile('../wapuu.csv', 'utf8', function (err, text) {
  var result = new csv(text, { header: true }).parse();
  var data = [];
  for (var i=0; i<result.length; i++) {
    var line = result[i];
    var row = {};
    row['@context'] = 'http://schema.org';
	row['@id'] = line.id;
	row['@type'] = 'CreativeWork';
	row['name'] = line['wapuu.name'];
	row['image'] = line['wapuu.src'];
	row['fileFormat'] = line['wapuu.mime_type'];
	if ( line['wapuu.repository'] ) {
		row['isBasedOnUrl'] = line['wapuu.repository'];
	}

	if ( line['author.name'] ) {
		row['copyrightHolder'] = {
			'@type': "Person",
			'name': line['author.name']
		};
		if ( line['author.url'] ) {
			row['copyrightHolder']['url'] = line['author.url'];
		}
	}

	if ( line['wapuu.url'] ) {
		row['contributor'] = {
			'@type': 'Organization',
			'url': line['wapuu.url']
		}
	}

    if (line['description']) {
      row.description = line['description'];
    }
    data.push(row);
  }
  stdout.write(JSON.stringify(data));
});

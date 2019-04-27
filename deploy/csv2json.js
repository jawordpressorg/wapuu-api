const fs = require('fs')
const csv = require('comma-separated-values')

fs.readFile('../wapuu.csv', 'utf8', function (err, text) {
  const result = new csv(text, {header: true}).parse()
  const data = []
  for (let i = 0; i < result.length; i++) {
    const line = result[i]
    const row = {}
    row.name = line.id
    row.wapuu = {}
    row.wapuu.name = line['wapuu.name']
    row.wapuu.url = line['wapuu.url']
    row.wapuu.repository = line['wapuu.repository']
    row.wapuu.src = line['wapuu.src']
    row.wapuu.mime_type = line['wapuu.mime_type']
    row.author = {}
    row.author.name = line['author.name']
    if (line['author.url']) {
      row.author.url = line['author.url']
    } else {
      row.author.url = ''
    }
    if (line['description']) {
      row.description = line['description']
    } else {
      row.description = ''
    }
    data.push(row)
  }

  fs.writeFile('v1/wapuu.json', JSON.stringify(data), (err) => {
    if (err) {
      throw new err
    }
  })
})

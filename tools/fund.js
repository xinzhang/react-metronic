var csv = require('csv');
var fs = require('fs');

function readCSV() {
  fs.readFile('assetCodes.csv', (err, data) => {
    if (err) throw err;
    let id = 1;
    let list = [];
    csv.parse(data, {'columns':true}, function(err, d){
        d.map(x => {
          list.push({ fundId:id, fundCode:x.assetcode, fundName:x.assetname, type: 'managed_fund'});
          id ++;
        })

        fs.appendFile('fund.json', JSON.stringify(list), (err) => {
          if (err) throw err
          console.log('done');
        })
    })
  })
}

fs.unlink('fund.json', readCSV());

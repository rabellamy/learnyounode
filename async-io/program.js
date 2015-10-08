var fs = require('fs');


function countNewLines(filename, callback) {

  fs.readFile(filename, function doneReading(error, data) {

      if (error) {
        return console.error(error);
      }

      callback(data);
  });

}


function countNewLinesCallback(data) {

  var string = data.toString(),
      theSplits = string.split('\n');

  console.log(theSplits.length - 1);

}

countNewLines(process.argv[2], countNewLinesCallback);

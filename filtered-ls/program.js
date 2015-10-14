var fs = require('fs');


function listFiles(directory, extensionToFilter, callback) {

  fs.readdir(directory, function doneReading(error, list) {

    if (error) {
      return console.error(error);
    }

    callback(list, extensionToFilter);

  });

}


function listFilesCallback(list, extensionToFilter) {

  var regexp = new RegExp('.' + extensionToFilter + '$', 'i');


  for (listItem in list) {

    if (list[listItem].match(regexp)) {
      console.log(list[listItem]);
    }

  }

}

listFiles(process.argv[2], process.argv[3], listFilesCallback);


// official solution
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })

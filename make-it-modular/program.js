var path = require('path');
var mymodule = require('./module');


function listFilesCallback(list, extensionToFilter) {

  list.forEach(function (file) {
    if (path.extname(file) === '.' + extensionToFilter) {
     console.log(file)
    }

  });

}


mymodule(process.argv[2], process.argv[3], listFilesCallback);

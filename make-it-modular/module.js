var fs = require('fs');
var path = require('path');


module.exports = {

    listFiles: function(directory, extensionToFilter, callback) {

      fs.readdir(directory, function doneReading(error, list) {

        if (error) {
          return console.error(error);
        }

        callback(list, extensionToFilter);

      });

    },

    listFilesCallback: function (list, extensionToFilter) {

      list.forEach(function (file) {
        if (path.extname(file) === '.' + extensionToFilter) {
         console.log(file)
        }

      });
    }


};




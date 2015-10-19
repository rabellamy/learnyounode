var fs = require('fs');


module.exports = function(directory, extensionToFilter, callback) {

  fs.readdir(directory, function doneReading(error, list) {

    if (error) {
      return console.error(error);
    }

    callback(list, extensionToFilter);

  });

};




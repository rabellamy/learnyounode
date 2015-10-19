

var mymodule = require('./module');


mymodule.listFiles(process.argv[2], process.argv[3], mymodule.listFilesCallback);

// exports.listFiles('.', 'js', listFilesCallback);

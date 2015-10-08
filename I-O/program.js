var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]),
    string = buffer.toString(),
    theSplits = string.split('\n');

console.log(theSplits.length - 1);

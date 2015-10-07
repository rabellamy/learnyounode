
(function() {

	var count = 0;

	process.argv.forEach(function(val, index, array) {

		if (index > 1) {
			count = count + Number(val);
		}

	});

	console.log(count);

})();



// or the simple way ..

// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

// console.log(result)

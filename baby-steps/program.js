
(function() {

	var count = 0;

	process.argv.forEach(function(val, index, array) {

		if (index > 1) {
			count = count + Number(val);
		}

	});

	console.log(count);

})();


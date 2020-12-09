const sum = function (array) {
	var result = array.length;

	for (var i = 0; i < array.length; i++) {
		result += array[i];
	}

	return result;
};

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

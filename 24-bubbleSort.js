const bubbleSort = array => {
	for (let i = 0; i < array.length; i++) {
		let swap = false;
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				swap = true;
			}
		}
		if (swap === false) {
			console.log(`number of i: ${i}`);
			return array;
		}
	}
	console.log(`number of i: ${i}`);
	return array;
};

const list = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9];

console.log(bubbleSort(list));

const array = [1, 3, 2, 4, 2, 3, 4, 5, 1, 8, 8];

const removeDuplicate = array => {
	const result = [];
	const seen = {};
	for (let i = 0; i < array.length; i++) {
		let currentNum = array[i];
		if (seen[currentNum]) {
			continue;
		} else {
			seen[currentNum] = true;
			result.push(currentNum);
		}
	}
	return result;
};

console.log(removeDuplicate(array));

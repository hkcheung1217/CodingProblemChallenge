const missingNumbers = arr => {
	const map = {};
	const max = arr.reduce((a, b) => Math.max(a, b));
	const min = arr.reduce((a, b) => Math.min(a, b));

	for (let i = 0; i < arr.length; i++) {
		map[arr[i]] = true;
	}

	for (let j = min; j <= max; j++) {
		if (!map[j]) {
			return j;
		}
	}
	return "there's no missing number";
};

const arrayOfIntegers = [3, 0, 1];

console.log(missingNumbers(arrayOfIntegers));

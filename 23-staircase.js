let calculation = 0;
const countSteps = () => {
	const cache = {};

	return function steps(num) {
		calculation++;
		if (num === 0) return 1;
		if (num === 1) return 1;

		if (num in cache) {
			return cache[num];
		} else {
			cache[num] = steps(num - 2) + steps(num - 1);
			return cache[num];
		}
	};
};

const steps = countSteps();

console.log(steps(4));
console.log(calculation);

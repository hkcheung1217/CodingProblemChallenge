const stock = array => {
	let min = array[0];
	let maxProfit = 0;
	for (let i = 1; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
		} else if (array[i] - min > maxProfit) {
			maxProfit = array[i] - min;
		}
	}
	console.log(maxProfit);
	if (maxProfit <= 0) return -1;

	return maxProfit;
};

const list = [45, 24, 35, 31, 40, 38, 11];

console.log(stock(list));

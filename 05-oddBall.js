/*Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. Try to solve with and without reduce function.
 */
// const oddball_sum = array => {
// 	let oddSum = 0;

// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] % 2 !== 0) {
// 			oddSum += array[i];
// 		}
// 	}

// 	return oddSum;
// };

const oddball_sum = array => {
	return array.reduce((total, cur) => {
		if (cur % 2 !== 0) {
			total += cur;
		}
		return total;
	}, 0);
};

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
	testList.reduce(function (acc, total) {
		return acc + total;
	}, 0)
);

console.log(oddball_sum(testList));

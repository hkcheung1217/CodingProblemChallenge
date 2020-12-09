/* Given an integer x and a sorted array a of N distinct integers, design a linear-time algorithm to determine if there exists two distinct indices i and j such that a[i] + a[j] == x

For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7
*/

// const twoSums = (array, target) => {
// 	const result = [];
// 	for (let i = 0; i < array.length - 1; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[i] + array[j] === target) {
// 				result.push([array[i], array[j]]);
// 			}
// 		}
// 	}
// 	return result;
// };

const twoSums = (array, target) => {
	const result = [];
	const seen = {};
	for (let i = 0; i < array.length; i++) {
		const another = target - array[i];
		if (another in seen) {
			result.push([seen[another], array[i]]);
		}
		seen[array[i]] = array[i];
	}
	return result;
};

const list = [3, 5, 2, -4, 8, 11];

console.log(twoSums(list, 7));

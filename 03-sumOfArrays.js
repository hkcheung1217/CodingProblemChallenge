/*You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. Solve without and with reduce.*/

// const sumOfArrays = array => {
// 	return array.flat().reduce((acc, cur) => acc + cur, 0);
// };

// console.log(sumOfArrays([[3, 2], [1], [4, 12]]));

const sumOfArrays = array => {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			sum += array[i][j];
			console.log(array[i][j]);
		}
	}
	return sum;
};

console.log(sumOfArrays([[3, 2], [1], [4, 12]]));

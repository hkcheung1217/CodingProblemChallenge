/*
Write a function called lucky_sevens which takes an array of integers and 
returns true if any three consecutive elements sum to 7.
*/

const lucky_sevens = array => {
	for (let i = 0; i < array.length - 2; i++) {
		if (array[i] + array[i + 1] + array[i + 2] === 7) {
			return `You are lucky. Result has found: ${array[i]},${array[i + 1]},${array[i + 2]}`;
		}
	}
	return false;
};

const arrayTest = [2, 1, 5, 1, 0];

console.log(lucky_sevens(arrayTest));

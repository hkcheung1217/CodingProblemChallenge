/* duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5] */

const array = [1, 2, 3, 4, 5];

const duplicate = array => {
	return [...array, ...array];
};
console.log(duplicate(array));

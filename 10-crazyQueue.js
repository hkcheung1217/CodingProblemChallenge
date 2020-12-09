const first = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const second = [];

const enqueue = (arr1, arr2, item) => {
	while (arr1.length > 0) {
		arr2.push(arr1.pop());
	}
	return arr2.push(item);
};

const dequeue = (arr1, arr2) => {
	while (arr2.length > 0) {
		arr1.push(arr2.pop());
	}
	return arr1.pop();
};

console.log(enqueue(first, second, 11));
console.log(first, second);

console.log(dequeue(first, second));
console.log(first, second);

const string = 'I love coding';

const selector = str => {
	const arr = str.split(' ');
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i][0]);
		result.push(arr[i][arr[i].length - 1]);
	}
	return result;
};

console.log(selector(string));

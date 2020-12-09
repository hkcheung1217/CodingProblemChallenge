const string = 'Hello Hoi!';

const reverseString = string => {
	return string.split('').reverse().join('');
};

console.log(reverseString(string));

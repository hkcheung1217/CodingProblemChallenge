const checkInteger = num => {
	return num % 1 === 0 ? true : false;
};

console.log(checkInteger(2.1));
console.log(checkInteger(2));

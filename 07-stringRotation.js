/*Find out if a string is a rotation of another string. E.g. ABCD is a rotation of BCDA but not ACBD. */
const rotationChecker = (string, checkString) => {
	return string.length === checkString.length && (string + string).indexOf(checkString) !== -1;
};

console.log(rotationChecker('hello', 'llohe'));

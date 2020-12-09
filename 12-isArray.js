const isArray = obj => {
	if (Object.prototype.toString.call(obj) === '[object Array]') {
		return true;
	}
	return false;
};

const John = { name: 'John' };
const people = ['John', 'Paul'];

console.log(isArray(John));
console.log(isArray(people));

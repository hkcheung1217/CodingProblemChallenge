const createBase = numOne => {
	return numTwo => numOne + numTwo;
};

const addSix = createBase(6);
console.log(addSix(10));

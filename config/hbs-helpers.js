const multiply = (a, b) => {
	return a * b; 
}

const add = (a, b) => {
	return a + b; 
}

const divide = (a, b) => {
	return a / b; 
}

const bool = (check, val) => {
	return check === true ? val : ''; 
}

module.exports = {
    multiply: multiply,
    add: add,
    divide: divide,
    bool: bool,
}
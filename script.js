// Calcuator functions
const add = function(a,b) {
	return a + b;
};

const substract = function(a, b) {
	return a -b;
};

const multiply = function(a, b) {
  return a*b;
};

const divide = function(a, b){
    return b==0 ? "MathError" : a/b;
};

//Variables
let firstNumber, secondNumber, operator;

const operation = function(a, b, operator){
    switch (operator) {
        case "add":
            return add(a,b);
        case "substract":
            return substract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
    
        default:
            break;
    }
};



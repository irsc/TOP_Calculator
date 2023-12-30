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
let firstNumber ="";
let secondNumber="";
let  operator;

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

//EventListeners

const btn = document.querySelector(".buttonPad");
const input =document.querySelector(".inputText");
const result = document.querySelector(".resultText");

btn.addEventListener("click",(e)=>{

    if(e.target.dataset.number){
        input.textContent += e.target.dataset.number;
        if(!operator){
            firstNumber += e.target.dataset.number;
        }else if(firstNumber && operator){
            secondNumber += e.target.dataset.number;
        }
    }

    if(e.target.dataset.operator){
        if(!operator){
            operator = e.target.dataset.operator;
            input.textContent += e.target.textContent;
        }
    }

    if(e.target.dataset.operator == "equal"){
        if(firstNumber && operator && secondNumber){
            result.textContent = operation(firstNumber, secondNumber, operator);
        }
    }

    
});



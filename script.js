// Calcuator functions
const add = function(a,b) {
    const numA = +a;
    const numB = +b;
	return numA + numB;
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
let decimal = false;

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

const clearAll = function(){
    input.textContent = "";
    result.textContent = "";
    operator = "";
    firstNumber = "";
    secondNumber = "";
    decimal = false;
};

const getNumbers = function(e){
    if(!operator){
        firstNumber += e.target.dataset.number;
    }else if(firstNumber && operator){
        secondNumber += e.target.dataset.number;
    }
    input.textContent += e.target.dataset.number;
};

const getParameters = function(op, first, second, dec){
    operator = op;
    firstNumber = first;
    secondNumber = second;
    decimal = dec;
}

//EventListeners

const btn = document.querySelector(".buttonPad");
const btnAC = document.querySelector("#AC");
const input =document.querySelector(".inputText");
const result = document.querySelector(".resultText");

btn.addEventListener("click",(e)=>{

    if(e.target.dataset.number){
        if(result.textContent && !operator){
            clearAll();
        }
        if(e.target.dataset.number != "."){
            getNumbers(e);
        }
        if(e.target.dataset.number == "." && !decimal){
            getNumbers(e);
            decimal = true;
        }
    }

    if(e.target.dataset.operator && e.target.dataset.operator != "equal" && e.target.dataset.operator != "minus"){
        if(!operator){
            operator = e.target.dataset.operator;
            input.textContent += e.target.textContent;
            decimal = false;
        }else if(firstNumber && operator && secondNumber){
            result.textContent = operation(firstNumber, secondNumber, operator);
            getParameters(e.target.dataset.operator,result.textContent,"",false);
            /* operator = e.target.dataset.operator;
            firstNumber = result.textContent;
            secondNumber = "";
            decimal = false; */
            input.textContent += e.target.textContent;
        }
    }

    if(e.target.dataset.operator == "equal"){
        if(firstNumber && operator && secondNumber){
            result.textContent = operation(firstNumber, secondNumber, operator);
            /* operator = "";
            firstNumber = result.textContent;
            secondNumber = "";
            decimal = false; */
            getParameters("",result.textContent,"",false);
        }
    }

    if(e.target.dataset.operator == "minus"){
        if(!firstNumber){
            input.textContent+="-";
            firstNumber ="-";
        }else if(operator && !secondNumber){
            input.textContent +="-";
            secondNumber="-";
        }
    }

    
});

btnAC.addEventListener("click",()=>clearAll());



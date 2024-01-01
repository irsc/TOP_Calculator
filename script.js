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
let blockDelete = false;

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

const roundNumber = function(number){
    if(number.toString().length > 12){
        return number.toExponential(8);
    }else{
        return number
    }
}

const clearAll = function(){
    input.textContent = "";
    result.textContent = "";
    operator = "";
    firstNumber = "";
    secondNumber = "";
    decimal = false;
    blockDelete = false;

    setTimeout(function() { 
        screen.style.backgroundColor = "whitesmoke"; 
   }, 5);
   setTimeout(function() { 
       screen.style.backgroundColor = "rgb(47,45,62)"; 
   }, 200);
};

const deleteInput = function(){
    if(firstNumber && !operator && !blockDelete){
        firstNumber = firstNumber.slice(0,- 1);
        input.textContent = input.textContent.slice(0,- 1);
    }else if(operator && !secondNumber){
        operator = "";
        input.textContent = input.textContent.slice(0,- 1);
    }else if(secondNumber){
        secondNumber = secondNumber.slice(0,-1);
        input.textContent = input.textContent.slice(0,- 1);
    }
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

const padInput = function(e){
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
            result.textContent = roundNumber(operation(firstNumber, secondNumber, operator));
            getParameters(e.target.dataset.operator,result.textContent,"",false);
            input.textContent += e.target.textContent;
            blockDelete = true;
        }
    }

    if(e.target.dataset.operator == "equal"){
        if(firstNumber && operator && secondNumber){
            result.textContent = roundNumber(operation(firstNumber, secondNumber, operator));
            getParameters("",result.textContent,"",false);
            blockDelete = true;
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

}

//EventListeners
const screen = document.querySelector(".screen");
const btn = document.querySelector(".buttonPad");
const btnAC = document.querySelector("#AC");
const btnDEL = document.querySelector("#DEL");
const input =document.querySelector(".inputText");
const result = document.querySelector(".resultText");

btn.addEventListener("click",(e) =>padInput(e));
btnAC.addEventListener("click",clearAll);
btnDEL.addEventListener("click",deleteInput);



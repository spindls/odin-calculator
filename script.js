function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
   return a * b;
};

function divide(a, b) {
    return a/b;
};

let num1 = "";
let operator = null;
let num2 = "";

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "x") {
        return multiply(num1, num2);
    }  else if (operator === "÷") {
        return divide(num1, num2);
    } else {
        return "ERROR";
    }
}

const arrayNumber1 = [];
const arrayNumber2 = [];
let isSecondNumber = false;
let result = "";
let justCalculated = false;
let isResultDisplayed = false;
let isLastCharacterNum = false;
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const equalButton = document.querySelector(".equal");
const operatorButtons = document.querySelectorAll(".symbol");
const characterLimit = [];



    numberButtons.forEach(button => {
        button.addEventListener("click", (event) => {
        const buttonText = event.target.textContent.trim();
        if (characterLimit.length < 19) {
        if (justCalculated === true) {  clear();} 
            justCalculated = false;
        if (!isSecondNumber) {
            arrayNumber1.push(buttonText);
            characterLimit.push(buttonText);
            const numbers = arrayNumber1.join("");
            display.textContent = numbers;
            num1 = Number(numbers);
            isLastCharacterNum = true;
        } else {
            arrayNumber2.push(buttonText);
            characterLimit.push(buttonText);
            const numbers2 = arrayNumber2.join("");
            display.textContent = `${arrayNumber1.join("")} ${operator} ${numbers2}`;
            num2 = Number(numbers2);
            isLastCharacterNum = true;
        };
    }
    });
    });

    
    operatorButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const symbolText = event.target.textContent.trim();
            if (characterLimit.length < 19) {
            if (isLastCharacterNum === true) {
            if (num1 != "" && operator != null && num2 != "") {
                let result = operate(operator, num1, num2);
                result = Math.round(result * 100) / 100;
                display.textContent = result;
                justCalculated = true;
                isResultDisplayed = true;
            }
            if (isResultDisplayed === true) {
                arrayNumber1.length = 0;
                arrayNumber2.length = 0;
                arrayNumber1.push(display.textContent);
                const numbers = arrayNumber1.join("");
                display.textContent = numbers;
                num1 = Number(numbers);
                isSecondNumber = true;
                justCalculated = false;
            }
            operator = symbolText; 
            isSecondNumber = true;
            characterLimit.push(symbolText);
            display.textContent = `${arrayNumber1.join("")} ${operator}`;
        }
    }
        });
    
    });


    equalButton.addEventListener("click", (event) => {
        if (num1 !== "" && num2 === 0 && operator === "÷") {
            clear();
            display.textContent = "you cannot do that!";   
        }
        if (num1 !== "" && num2 !== "" && operator !== null) {
            result = operate(operator, num1, num2);
            result = Math.round(result * 100) / 100;
            justCalculated = true;
            display.textContent = result;
            characterLimit.length = 0;
            isResultDisplayed = true;
        };
    });

function clear() {
    arrayNumber1.length = 0;
    arrayNumber2.length = 0;
    num1 = "";
    num2 = "";
    operator = null;
    isSecondNumber = false;
    result = "";
    justCalculated = false;
    isResultDisplayed = false;
    display.textContent = "";
    isLastCharacterNum = false;
    characterLimit.length = 0;
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", (event) => { 
    clear();
});
"use strict";




const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+';

console.log(input2.value);

const sum = Number(input1.value) + Number(input2.value); 
resultElement.textContent = sum;

//console.log(typeof sum);

plusBtn.onclick = () =>{
    action = "+";
}

minusBtn.onclick = () => {
    action = "-";
}


const printResult = (result) => {
            if (result > 0) {
                resultElement.style.color = "green";
            } else {
                resultElement.style.color = "red";
                }
                resultElement.textContent = result;
}

const computeNumbersWithAction = (inp1, inp2, actionSymbol) =>{
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    if (actionSymbol == '+'){
       return num1 + num2
    }else if (actionSymbol == '-'){
      return  num1 - num2
    }
    

}
//colculator => js/frontend/main/test/jsmenu/
//This is colkulater testwork => 

submitBtn.onclick = () => {
const result = computeNumbersWithAction(input1, input2, action)
printResult(result)
    // if (action == '+') {
    //         const sum = Number(input1.value) + Number(input2.value);
    //         printResult(sum)
            
    // }else {
    //       const sum = Number(input1.value) - Number(input2.value);
    //     printResult(sum)
    // }
}
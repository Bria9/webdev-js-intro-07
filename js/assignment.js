"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");


const lostNumbers = [4, 8, 15, 16, 23, 42];


// returnTheRemainder Function

function returnTheRemainder(a,b) {
        return  a % b;
}

// checkIfEven Function

function checkIfEven(num) {
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }  
}

// getTheFourthElement Function

function getTheFourthElement() {
   return lostNumbers[3];
}




function render() {
    remainderElement.innerText = returnTheRemainder(5,4);
    checkIfEvenElement.innerText = checkIfEven(47);
    lostNumbersElement.innerText =  getTheFourthElement();
   
}

submissionBtn.addEventListener("click", function(){
    render();
})
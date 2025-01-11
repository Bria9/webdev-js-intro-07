// Prevent us from attempting to use variables
// that are not declared
"use strict"


/* function sum(a,b){
  return a+b;
}
let total = sum(5,5);
console.log(total);


function temperature(temp){
  if (temp < 50){
     return `It's ${temp}°F 🥶`;  
  }
  else if (temp >= 50 && temp <= 77){
     return `It's ${temp}°F 🙂`;
   
  }
  else if (temp > 77 ){
    return `It's ${temp}°F 🥵`;   
  }
} 

let result = temperature(55);
console.log(result);

function orderTea(teaType){
    function confirmOrder(teaType) {
      return `Order confirmed for ${teaType}`   
    }
    return confirmOrder(teaType);
}

let order = orderTea("matcha");
console.log(order);

// Explanation of How It Works:

// orderTea("matcha") is called, which passes "matcha" as the argument to the teaType parameter in orderTea.
// Inside orderTea, it calls the confirmOrder function with the confirm argument, which is "matcha".
// The confirmOrder function then returns a string: "Order confirmed for matcha".
// orderTea returns this string via return confirmOrder(teatype) which then gets assigned to the variable order.
// Finally, console.log(order) prints the confirmation message.

//Javascript Functions Crash Course -freeCodeCamp.org
// https://www.youtube.com/watch?v=j1laALb8OVM&t=650s


//function expression
// default parameter
const pets = function(pet1,pet2="none") {
 return `1st ${pet1}  2nd ${pet2}`;
}

console.log(pets("cat"));

//rest parameter (infinite # of arguments)

function collectThings(x,...y){
   return {x,y};
      
}
console.log(collectThings(1,2,3,4,5,6,7,8,9));

function flavor(topFlavor,...flavors){
  return `The top flavor is ${topFlavor} other options are ${flavors}`
      
}
console.log(flavor("vanilla","cherry","blueberry","chocolate","banana"));

//arrow function

// const add = function(x,y){
//   return x + y; 
// }

// 1. remove keyword: function
// 2. add arrow to right of parenthesis:  (x,y) =>
// 3. remove return, remove curly braces, place body on same line

  const add = (x,y)=> x + y; 
  
 console.log(add(2,3));

//function scope

function outer(){
  let x = 10;
 
    function inner(y){
    
      return  x + y
    }
 return inner(50);
}

console.log(outer());

// function closure

function outer2(a){
    function inner2(b){
        return  a + b
    }
   return inner2;
}
const outerReturn = outer2(10);
console.log(outerReturn(2));
 */
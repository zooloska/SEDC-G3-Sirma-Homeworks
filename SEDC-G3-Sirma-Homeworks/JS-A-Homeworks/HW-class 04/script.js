console.log('--Excercise - 1--');

let getNumberStatsFunctions = [
    (num1) => num1 >= 0 ? num1.length : num1.length - 1,
    (num2) => num2 % 2 === 0 ? "Odd" : "Even",
    (num3) => num3 > 0 ? "Positive" : "Negative",
    
  ];

//   let getNumber = getNumberStatsFunctions(num1(0,2)); 
//    console.log(getNumber);
  

  console.log('--Exercise - 2--');





console.log('--Exercise - 3--');

let arrayOfNumbers = [1, 3, 4, 5, 6, 7];

let sqareNumbers = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let square = array [i] * array [i];
        result.push(square);        
    }
    return result;
}

let resultArray = sqareNumbers(arrayOfNumbers);
console.log(resultArray);



console.log('--Exercise - 4--');


function factoriel(n) {

    if (n === 0) {
        return 1;
    }
    
    return n * factoriel(n - 1);
}

let resultFactoriel = factoriel(33);
console.log(resultFactoriel);

//  console.log(result);
 

//  (function() {
//     document.getElementById('myElement').innerHTML = 'Content set by a self-invoking function.';
// })();

console.log('--Exercise - 5--');


let greet = ["Hello World"];
let reversed = greet.slice[''];
console.log(reversed);


console.log('--Exercise - 6--');

let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => Hello ${name}, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];




console.log('--Exercise - 7--');


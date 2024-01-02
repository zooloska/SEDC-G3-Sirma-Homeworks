console.log("--VEZBA 1");
let everyType = ['let', 'boolean','else', 'if', 'else if', 'while',];
console.log(everyType);

console.log('--VEZBA 2--');

let userInput1 = ('Tekst');
let userInput2 = (23);
let userInput3 = (NaN);
let userInput4 = (false);
let userInput5 = ("");

console.log (typeof(userInput1));
console.log (typeof(userInput2));
console.log (typeof(userInput3));
console.log (typeof(userInput4));
console.log (typeof(userInput5));

console.log("--VEZBA 3 --");
let diffTwoNumbers = prompt('Enter a number:');


// console.log('--VEZBA--4');

// // function twoNumbers (number1, number2,) {
// //      const max_value = 100;
// //      if (number1 >= number2 && number1 <= number2) {
// //         max_value = number1;
// //     }

// //     else if (number2 <= 100 && 100 >= number2) {
// //           max_value = number2;
// //     }

// //     else {
// //         return max_value
// //     }
    
// }

// let inputValue = prompt ('Enter a two numbers:');
// let parsedInput = parsedInput(inputValue);
// console.log();

// console.log(twoNumbers);

console.log("--Vezba 5--");

let bobSalary = (1000);
let billsBob = (375 + 250);
let result = bobSalary - billsBob;

let bobResult = document.getElementById("result");
bobResult.innerText = result;



// console.log('--Vebza 6---');

// let subjects = [10, 6, 8, 9, 6];

// let mark;

// console.log(markGrades);

console.log('Vezba 7');

console.log('Vezba 8');
let arrayElements = [1, 3, 55, 66, 88, 99];
console.log(typeof(arrayElements));
1[0] = "koza";
console.log([0]);
3[1] = 'guster';
55[2] = 'krokodil';
66 [3] = 'iguana';
88 [4] = 'zhelka';
99 [5] = 'riba';
console.log (arrayElements);


console.log('Vezba 9');


console.log('Vezba 10');


function tellStory (array) {
    let myTellStory = `Ova e ${arrayArguments[0]}, od petokot ${arrayArguments[0]} e ${arrayArguments[1]} i zaradi bolkite ${arrayArguments[2]}`;

    return myTellStory;
}


let arrayArguments = ['Sirma', 'ukochena', 'menja pozicii od krevet na trosed.']
let myTellStoryResult = tellStory(arrayArguments);
console.log(myTellStoryResult);

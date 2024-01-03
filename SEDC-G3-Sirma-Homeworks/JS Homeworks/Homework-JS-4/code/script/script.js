console.log('== Homework- 1==');


function tellStory (array) {
    let myTellStory = `Ova e ${arrayArguments[0]}, od petokot ${arrayArguments[0]} e ${arrayArguments[1]} i zaradi bolkite ${arrayArguments[2]}`;

    return myTellStory;
}


let arrayArguments = ['Sirma', 'ukochena', 'menja pozicii od krevet na trosed.']
let myTellStoryResult = tellStory(arrayArguments);
console.log(myTellStoryResult);

console.log('== Homework- 2==');

const niza = [3, 45, 34, 57, 32];

function zbirNiza (nizaArray) { 
    let sum = 0;

    for ( let i=0; i < nizaArray.length; i += 1) {
        sum += nizaArray[i];
    }

    return sum;
    
}
console.log(`Zbirot od nizata e: ${zbirNiza(niza)}`);

let nizaVid = [3, 45, 34, 57, 32];

function daliEBroj (nizaVid) {
    return typeof(nizaVid [i]) === 'number';
}

console.log(typeof(nizaVid));




// console.log(`There are ${validateNumber(input, numArray)}action of ${input} in the array!`);

console.log('== Homework- 3==');

let arrayOfWords = ['Hello', 'students', 'of', 'Qinshift', 'Academy', '!'];
function arrayOfStrings () {
    return arrayOfWords
}

let joinedString = arrayOfWords.join(' ');
console.log(joinedString);


console.log('== Homework- 4==');

    let number = [];
    for (let i=0; i<=20; i++) {
        if  (i % 2 === 0) {
             number.push (" \n ");
        }
        else {
            number.push (" ");
        } 
    }

    console.log(number);
    
console.log('== Homework- 5==');

console.log('== Homework- 6==');
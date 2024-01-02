console.log("------ TASK-1: Write a program to find maximum between two numbers. --------");

function max_of_two (number1, number2) {
    max_value = 50;
    if (number1 > number2) {
        max_value = number1;
    }
    else max_value = number2;
}
console.log (Math.max (35, 50));



console.log("------ TASK-2: Write a program to find maximum between three numbers. --------");

function max_of_three (number1, number2, number3) {
    max_value = 80;
    if (number1 > number2) {
        max_value = number1;
    }
    else max_value = number2; {
     if (number3 > max_value) {
        max_value = number3;
    }
    return max_value;
    }
}
console.log (Math.max (35, 50, 80));


console.log('------ TASK-3: Write a program to check whether a number is negative, positive or zero--------');
let number = 3;
 if (number > 3) {
    console.log ("The number is positive."); }
    
    else if (number === 0) {
        console.log ("The number is zero");}
    
         else {
           console.log ("The number is negative."); }
             


console.log('------ TASK-4: Write a program that will accept user input between 1-7 (week number) and print week day. --------');

let inputDay = prompt("Enter day of the week (1-7):");
let parsedInputDay = parseInt(inputDay);

switch (parsedInputDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input value");
        break;
}

console.log('------ TASK-5: Write a program that will check if user typed an input that is a number or not--------');

let userInput = (`zooloska`);
console.log(typeof(userInput));




console.log('------ TASK-6: Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: ................................................................Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade C Percentage >= 60% : Grade D Percentage >= 40% : Grade E Percentage < 40% : Grade F. --------');

let markPhysics = parseFloat (prompt('Enter your Physics score 0-100'));
let markChemistry = parseFloat (prompt('Enter your Chemistry score 0-100'));
let markBiology = parseFloat (prompt('Enter your Biology score 0-100'));
let markMathematics = parseFloat (prompt('Enter your Matemathics score 0-100'));
let markComputer = parseFloat (prompt('Enter your Computer score 0-100'));

let markPoints = ((markPhysics+markChemistry+markBiology+markMathematics+markComputer) / 5);

if (markPoints >=90) {
    console.log ('Your grade is A');
}
else if (markPoints >=80) {
    console.log ('Your grade is B');
}
else if (markPoints >=70) {
    console.log ('Your grade is C');
}
else if (markPoints >=60) {
    console.log ('Your grade is D');
}
else if (markPoints >=40) {
    console.log ('Your grade is E');
}
else if (markPoints <40) {
    console.log ('Your grade is F');
}








console.log('===== VEZBA-1 =====');
let value = parseInt (prompt ('How much money do you have?'));
let userValue = (0, 1000);
 if (>= 500 && userValue <= 1000 >=) {
    console.log ('Go buy a sandwich from Burger Slut and rakija from the market');
 }
   else if (u>= 1000 && 1000 >=) {
    console.log ('Ask a friend to join you for a drink in a pub.');
 }
   else if (<= 500 && 500 >=) {
    console.log ('Stay at home and take a hot shower.');
}
   else {
    return "You have wrong input";
   }



 console.log ('===== VEZBA-2 ======');

let inputUserYear = prompt("Enter your birth year:");
let parsedInputYear = parseInt(inputUserYear);
let chineseZodiac = (parsedInputYear - 4) % 12;

switch (chineseZodiac) {
    case 0:
        console.log("Your Chinese Zodiac sign is: Rat.");
        break;
    case 1:
        console.log("Your Chinese Zodiac sign is: Ox.");
        break;
    case 2:
        console.log("Your Chinese Zodiac sign is: Tiger.");
        break;
    case 3:
        console.log("Your Chinese Zodiac sign is: Rabbit.");
        break;
    case 4:
        console.log("Your Chinese Zodiac sign is: Dragon.");
        break;
    case 5:
        console.log("Your Chinese Zodiac sign is: Snake.");
        break;
    case 6:
        console.log("Your Chinese Zodiac sign is: Horse.");
        break;
    case 7:
        console.log("Your Chinese Zodiac sign is: Goat.");
        break;
    case 8:
        console.log("Your Chinese Zodiac sign is: Monkey.");
        break;
    case 9:
        console.log("Your Chinese Zodiac sign is: Rooster.");
        break;
    case 10:
       console.log("Your Chinese Zodiac sign is: Dog.");
        break;
    case 11:
        console.log("Your Chinese Zodiac sign is: Pig.");
        break;
    default:
        console.log("Invalid input value");
        break;
}


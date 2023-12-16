console.log(" -------- HOMEWORK PART 1 -------- ");

function getTypeParameter (type) {
    let typeResult = typeof(type);
    return typeResult;
}

console.log(getTypeParameter('text')); 
console.log(getTypeParameter(true)); 
console.log(getTypeParameter()); 
console.log(getTypeParameter(null)); 
console.log(getTypeParameter(33)); 







console.log(" -------- HOMEWORK PART 2 -------- ");

function humanToDogYears (value) {
    result = value * 7;
    return result;
}

function dogToHumanYears (userInput) {
    result = userInput / 7;
    return  result;
}


let humanToDogYearsUserInput = prompt('Enter human years, to be converted into dog years.');
let resultDog = humanToDogYears(humanToDogYearsUserInput);
console.log (resultDog);

let dogToHumanYearsInput = prompt('Enter dog years, to be converted into human years.');
let resultHuman = dogToHumanYears(dogToHumanYearsInput);
console.log (resultHuman);





console.log ("---- HOMEWORK PART 3 ------");

function giveCash (atm) {
    const  moneyFix = 5000;
    if (atm < moneyFix) {
        let money = moneyFix - atm;
        let result = `Izvadivte ${atm} denari. Momentalnata sostojba na Vashata smetka e ${money}.`;
        return result ;
    }
    else if (atm > moneyFix) {
        let result = "Nemate dovolno pari!";
        return result;
    }     

    else {
        let result = "Ve molime vnesete iznos!";
        return result;
    }
}

let giveCashInput = prompt ("Kolku pari sakate da podignete?");
let parsedInput = parseInt (giveCashInput);
let cashResult = giveCash (parsedInput);
console.log (cashResult);

  


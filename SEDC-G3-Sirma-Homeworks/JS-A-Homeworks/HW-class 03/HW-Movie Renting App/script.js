console.log('Test');

let moviesArr = ['The Godfather','Napoleon','Anyone But You','Oppenheimer','Batman','The Age of Adaline','Erin Brockovich','Thor','Iron Man','Transformers','The Beekeper','Balkan-kan','Stela','Dedo i Vnuk','Makedonska Krvava Svadba','Dust','Cat on a Hot Tin Roof','Meet Joe Black','Inception','Pretty Woman','Eat Pray Love','Perfect Strangers','Lost in Translation','The Mechanic','The Expendables','The Lord of the Rings','Forrest Gump','Coco','Braveheart','Up','Spider-Man'];


let button = document.getElementById('btn');
let userInput = document.getElementById('inputMovies');
let result = document.getElementById('infoMovies');

function inputMovies (moviesArray, input) { 
    for (let i = 0; i < moviesArray.length; i++) {
        if (moviesArray[i] == input) {
            console.log("The movie is avaliable.");
            result.innerText = `The movie ${input} can be rented.`;
            result.style.color = 'green';
            break;
        
        }
        else {
            console.log("The movie is not avaliable.");
            result.innerText = `The movie ${input} can't be rented.`;
            result.style.color = 'red';
        }
    }

};
 

button.addEventListener('click', function () {
    let input = userInput.value;
    let parsedInput = input.toLowerCase();
    console.log(parsedInput);
    inputMovies(moviesArray, input);
});




console.log('Test');

let moviesArr = ['the godfather','napoleon','anyone but you','oppenheimer','batman','the age of adaline','erin brockovich','thor','iron man','transformers','the beekeper','balkan-kan','stela','dedo i vnuk','makedonska krvava svadba','dust','cat on a hot tin roof','meet joe black','inception','pretty woman','eat pray love','perfect strangers','lost in translation','the mechanic','the expendables','the lord of the rings','forrest gump','coco','braveheart','up','spider-man'];


let button = document.getElementById('btn');
let userInput = document.getElementById('inputMovies');
let result = document.getElementById('infoMovies');

function inputMovies (moviesArr, input) { 
    for (let i = 0; i < moviesArr.length; i++) {
        if (moviesArr[i] == input) {
            // console.log("The movie is avaliable.");
            result.innerText = `The movie ${input} can be rented.`;
            result.style.color = 'green';
            return;
        
        }
        else {
            // console.log("The movie is not avaliable.");
            result.innerText = `The movie ${input} can't be rented.`;
            result.style.color = 'red';
        }
    }

};
 

button.addEventListener('click', function () {
    let input = userInput.value;
    let parsedInput = input.toLowerCase();
    console.log(parsedInput);
    inputMovies(moviesArr, input);
});




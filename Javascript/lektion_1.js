/****************************************************
 * LEKTION 1 - Variabler, events og conditionals    *
 ****************************************************/

// Opgave 1
// Du skal i denne opgave redegøre for forskellen mellem en let, var og const.
// Det vil sige at du skal illustrere hvad der sker når man forsøger at ændre en
// var, en let og en const. Du skal bruge console.log til at demonstrere dette.

//VAR
 var greeter = "hello there";

 function greetFunction() {
    var hello = "hello";
    console.log(hello);
 } //GIVER ERROR

 //LET
 let greeting = "say hi";
 if (true) {
    let greeting = "Say hello instead";
    console.log(greeting);
 }
 console.log(greeting);
 
 //CONST
 const greetings = {
    message: "Yo wassup",
    times: 4
}
greetings.message = "Say bruh instead";
console.log(greetings); //EN CONST OBJECT KAN IKKE OPDATERES

//_______________________________________________________________________________

// Opgave 2
// I denne opgave skal du bruge aritmetik til at lave nogle regnestykker.
// Du skal løse følgende:
// 992 + 237 = ?
// 44 - 12 = ?
// 142 * 23 = ?
// 94 / 23  = ?d
// Svarene skal ligesom opgaven ovenfor vises i hver sin console.log
let a = 992;
let b = 237;
console.log(`${a}/${b} = `, a + b);

let d = 44;
let e = 12;
console.log(`${d}/${e} = `, d - e);

let f = 142;
let g = 23;
console.log(`${f}/${g} = `, f * g);

let h = 94;
let i = 23;
console.log(`${h}/${i} = `, h / i);

//_______________________________________________________________________________

// Opgave 3
// Du skal nu lave en click counter med et onclick event. Din click counter skal have en knap
// der gennem Javascript får tildelt en eventlistener. Antal af clicks skal vises i DOM´en.

//CLICK COUNTER

let counter = 0;
const button = document.getElementById('clickButton');
const display = document.getElementById('clickCount');

button.addEventListener('click', () => {
    counter++;
    display.textContent = counter;
    localStorage(counter); 
});

//_______________________________________________________________________________

// Opgave 4
// I denne opgave skal du lave et input felt med validering. Du skal bruge en eventlistener til at måle på om brugeren
// har indtastet mere end 8 bogstaver. Hvis ikke brugeren har indtastet mere en 8 bogstaver skal der vises en fejl besked
// under input feltet, der beder brugeren om at indtaste mindst 8 bogstaver.

//INPUT MAX 8 BOGSTAVER

document.getElementById('inputForm').addEventListener('submit', function(event) {
    const userInput = document.getElementById('userInput');
    const errorElement = document.getElementById('error');

    if (userInput.value.length > 8) {
        errorElement.textContent = 'Password must be 8 characters in lengt';
        userInput.setCustomValidity(''); 
        errorElement.style.display = 'block';
        event.preventDefault(); 
    } else {
        errorElement.textContent = '';
        userInput.setCustomValidity(''); 
        errorElement.style.display = 'none';
    }
    console.log('Error, password is not 8 characters');
});

//_________________________________________________________________________________

// Opgave 5
// I denne opgave skal du indele en side i fire lige store firkanter. Du skal herefter bruge en eventlistener til at
// måle om brugeren fører musen ind over hver af de fire firkanter. Når musen rammer en firkant skal den skifte farve til en
// tilfældigt genereret farve.
 
document.addEventListener('DOMContentLoaded', () => {
    const square = document.querySelector('.square');

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F033', '#C302DE', '#0FF0EC' ];

    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
    });

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = '#ccc'; 
    });
});

//_________________________________________________________________________________

// Opgave 6
// I denne opgave skal du arbejde videre på input feltet fra opgave 4. Du skal nu tilføje følgende betingelser til valideringen.
//  - Brugeren skal indtaste et stort bogstav.
//  - Brugeren skal indtaste et tegn som ikke er et bogstav.
//  - Brugeren må ikke indtaste en string som er længere end 20 karakterer.
//_________________________________________________________________________________

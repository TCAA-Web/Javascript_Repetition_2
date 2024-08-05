//Opgave 1
const first = "Hello"; //IT can not change and it has blockscope;
let second = "there"; //It has blockscope;
var third = "!"; //It has a global scope;

//first = "Elena"; - There is coming an error by changing const variable;
second = "Oprea";
third = "?";

console.log(first);
console.log(second);
console.log(third);

//Opgave 2
let a = 992;
let b = 237;

let c = 44;
let d = 12;

let e = 142;
let f = 23;

let g = 94;
let h = 23;


console.log(a+b);
console.log(c-d);
console.log(e*f);
console.log(g/h);

//Opgave 3

const button = document.getElementById('myBtn');
let count = 0;
const countClick = document.getElementById('clicked');

button.addEventListener('click', () =>{
    
    count ++;
    console.log(`You has clicked: ${count}`)
    countClick.innerHTML = `You has clicked: ${count}`;
});

//Opgave 4

const input = document.getElementById('inputElem');
const button2 = document.getElementById('button');
const message = document.createElement('p');
const container = document.getElementById('container');

button2.addEventListener('click', () =>{
    //console.log('it was submitted');
    message.textContent = '';
    message.style.color = 'red';

    if(input.value.length > 8){
        //console.log('You need to enter max 8 character');
        message.textContent = 'You need to enter max 8 character';
    }
    else if(input.value.length === 8){
        message.textContent = 'You succeed!'; 
        message.style.color = 'green';
    }
    else{
        message.textContent = 'Enter at least 8 character';
    }

    container.appendChild(message);
});

//Opgave 5

  // Function for generating a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // Find all squares
  const boxes = document.querySelectorAll('.box');

  // Add eventlistener to all squares
  boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = getRandomColor();
    });
  });






//Opgave 6

document.getElementById('button2').addEventListener('click', function() {
    const inputField = document.getElementById('inputField').value;
    const message = document.getElementById('message2');
    message.style.color = 'red';
    
    // Regular expressions for validation
    const lengthCheck = /^.{8,20}$/;
    const uppercaseCheck = /[A-Z]/;
    const symbolCheck = /[\W_]/; 

    // Check if input meets all the conditions
    if (!lengthCheck.test(inputField)) {
        message.textContent = "Input must be between 8 and 20 characters long";
       
    } else if (!uppercaseCheck.test(inputField)) {
        message.textContent = "Input must contain at least one uppercase letter";
        
    } else if (!symbolCheck.test(inputField)) {
        message.textContent = "Input must contain at least one symbol";
      
    } else {
        message.textContent = "Input is valid!";
        message.style.color = 'green';
    }
});




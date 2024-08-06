//Opgave 1
//Function that checkes the length of the string

const str = 'This sentence has: ';
const str2 = 'words';

function lengthWord (){
    
console.log(`${str} ${str.length} ${str2} `);
   
}

lengthWord();

// function getLength(str){
//     return str.length;
// }
// let word = 'Denamrk';
// console.log(${word} er {getLength()})

//Opgave 2
//Create Object

const object = {name:'Elena',
                surname: 'Oprea',
                email: 'rlenka2010.gmail.com',
                telephone: 23345555,
                address: 'Storegade 1, Aalborg',
                postcode: 9220
}

console.log(object);

//Opgave 3


let x = {name:'Elena',
        surname: 'Oprea',
        email: 'rlenka2010.gmail.com'
}
//console.log(object);

function changeValue(value, newName, newSurname, newEmail){

   value.name = newName;
   value.surname = newSurname;
   value.email = newEmail;
   
}

changeValue(x, 'Makka', 'Ismailova', 'makka2023@gmail.com' );
console.log(x);

//Opgave 4

let y ={country:'Denmark',
        population: 6,
        money:'€',
        weather:'rainy',
        language:'danish',
        memberEU: false
}
function type(obj) {
    for (let property in obj) {
        console.log(`${property}: ${typeof obj[property]}`);
    }
}

type(y);

//Opgave 5

function domGenerator(type, className = '', id = '',  attributes = {}, src = '', value = '', placeholder = '') {
    // Create the element of the specified type
    const element = document.createElement(type);

    // Set the class name 
    if (className) {
        element.className = className;
    }
    // Set the id 
    if (id) {
        element.id = id;
    }
    // Set additional attributes
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    // Set the src 
    if (src) {
        element.src = src;
    }
    // Set the value
    if (value) {
        element.value = value;
    }
    // Set the placeholder
    if (placeholder) {
        element.placeholder = placeholder;
    }

    return element;
}
const inputElement =  domGenerator('div','myDiv');
console.log(inputElement);


//Opgave 6

function htmlGenerator() {
    // Create the container for the grid
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    document.body.appendChild(gridContainer);

    // Loop to create 9 div elements
    for (let i = 0; i < 9; i++) {
        const gridItem = document.createElement('p'); 
        gridItem.className = 'grid-item';
        gridItem.id = `item-${i + 1}`;
        gridItem.textContent = `Item ${i + 1}`;
        gridContainer.appendChild(gridItem); 
    }

    // Apply styles to the grid container and items
    const style = document.createElement('style');
    style.textContent = `
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            width: 300px;
            margin: auto;
            padding: 5px;
            border: 1px solid #ccc;
        }
        .grid-item {
            background-color: 	#ADFF2F;
            border: 1px solid #ddd;
            padding: 20px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
}

// Call the function to create the grid
htmlGenerator();


    



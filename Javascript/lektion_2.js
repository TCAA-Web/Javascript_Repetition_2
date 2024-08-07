/************************************
 * Lektion 2 - Objects & functions  *
 ************************************/

// Opgave 1
// I denne opgave skal du lave en funktion der kan tjekke længden på en given string.
// Din funktion skal altså tage imod et argument (din string der skal tjekkes) og returnere et resultat i form af et tal.
// Funktionen skal kaldes og du skal gemme resultatet, hvorefter string + resultat skal printes i en console.log,
// så der står i konsollen: "Relativitetsteori er 17 bogstaver langt".

//CHECK LENGHT OF STRING

function stringLenght() {
    let text = "Relativitetsteori";
    let length = text.length;

    document.getElementById("countWord").innerHTML = length;
    console.log("Relativitetsteori er "+length+" bogstaver langt");
}
stringLenght()


//________________________________________________________________________________________________

// Opgave 2
// Du skal i denne opgave lave et objekt der indeholde følgende:
// - Fornavn, Efternavn, Email, Telefonnummer, Adresse og Postnummer.
// Objektet skal printes ud i en console.log
  
  //INFO OBJECT

 const information = {
    name: 3.3,
    lastname: "Homeboy",
    email: "joe5124@gmail.com",
    phone: "135154225",
    adresse: "Poopooplace 5",
    postnumber: "2555",
 }; 
 console.log(information);
//________________________________________________________________________________________________

// Opgave 3
// Du skal nu lave en funktion der kan ændre på en værdi i et objekt.
// Funktionen skal kunne tage imod tre argumenter; objektet der skal ændres, hvilken "key" der skal ændres på,
// og til sidst hvad den nye "value" skal være.
// Til slut skal din funktion returnere det nye modificerede objekt og printe dette i en console.log.
// Du kan med fordel bruge objektet du lavede i opgave 2 til at ændre på en value.

//FUNKTION OBJECT
function changeObject(banana, key, value) {
   
     banana[key]=value
    console.log(banana);
};

changeObject(information, "lastname", "Banana");

//_________________________________________________________________________________________________

// Opgave 4
// Du skal i denne opgave lave en funktion der kan tjekke typeof på alle key value pairs i et objekt.
// Funktionen skal console.logge typen af hver eneste value i et objekt.
// Objektet der skal tjekkes skal kunne sendes ind i funktionen som argument.

//CHECK TYPEOF FUNCTION

function checkType(obj) {
    for (key in obj) {
        let res=typeof obj[key]
        console.log(res);
      }
};
checkType(information);

//__________________________________________________________________________________________________

// Opgave 5
// I denne opgave skal du lave en "DOM Element generator" funktion.
// Din funktion skal kunne returnere et givent DOM element når den kaldes.
// Funktionen skal indeholde så mange af de gængse HTML elementers argumenter som du kan komme i tanke om.
// Den skal som minimum være i stand til at tage imod argumenterne; type, classname og id.
// Et eks. på at kalde en sådan funktion kunne se således ud: GenerateElement('div', 'someClassName', 'myID')

//  function elementGenerator(obj) {
//     let e;
//     try {
//         for (const key in obj) {
//             switch (key) {
//                 case "type":
//                     e = document
//             }
//         }
//     }
//  }

//__________________________________________________________________________________________________

// Opgave 6 Bonus:
// Brug din nye HTML kodegenerator funktion til at bygge et 3x3 Grid layout af div.
// Hver div skal have en forskellige background-color og inde i hver div skal der ligge et P tag.
// P taggets innerText skal være forskelligt på dem alle. Øvelsen går ud på at lave dette med så lidt kode som muligt.

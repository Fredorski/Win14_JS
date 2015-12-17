//alert('hej'); //Crapy but good during development
//Datatyper:
var nbr = 12; // Number
nbr = "Hej"; // dynamiskt typat språk
var name = "Freddie"; // String
var myArray = ["Freddie", 5, 'hej', 8.9]; //En array
var myObject = { name: 'Freddie', age: 38 }; //Ett objekt följer JSON-syntaxen
var noWay; // undefined, den är namngiven men vet inte vad den är
//*** **************Ta reda på datatypen:****************
//alert(typeof 3); //number är denna datatypen/litteralen
//alert(typeof 'g'); //string
//alert(typeof ""); //string
//alert(typeof true); //boolean
//alert(typeof [2, 3, 2, 6]); //object OBS!!!
//alert(typeof { name: 'Freddie', age: 38 }); //object

//var d = new Date();
//alert(d.getDay()); //Nollbaserat med start på söndag
//alert(new Date(1990,0,17)); //Månad nollbaserat, men dag 1 baserat

var age = "38";
var ageNumber = Number(age); //Konverterar till number
var ageNextYear = "Nästa år är jag" + age + 1;
var ageNextYearNumber = "Nästa år är jag" + (ageNumber + 1);
alert(ageNextYear);
alert(ageNextYearNumber);

var ageString = String(ageNumber); //Konverterar till string


//Kontroll om det är ett nummer med en prompt
var age = prompt('Hur gammal är du?');
if (isNaN(age)) {
    alert('Not a number');
}
else {
    alert('Du är ' + age + "år gammal");
}

// kontrollerar om vi har ett värde:
var age;
if (age) {
    alert('Har ett värde!');
}
else {
    alert('Har INTE ett värde!');
}
/*True: 
 *  alla strängar som inte är tomma
 *  alla nummer som inte är 0
 *  "0"
 *  true
 * 
 False:
    ""
    ''
    undefined
    false

 * */
var tal = prompt('Skriv ett tal:');
switch (tal) {
    case 1:
        alert("ett");
        break;
    default:
        alert('tvau');
        break;
}
/*Skapa ett enkelt program som frågar efter vilken temperatur vatten har. 
svara med is om lägre än eller lika med 0
svara med vatten om  mellan is och ånga
svara med ånga om högre än eller lika med 100
använd switch inga if/else!

*/
//lösningsförslag med switch på true:
var vatten = prompt("Ange vattnets temperatur:");
switch (true) {
    case (vatten <= 0):
        alert('Ice ice baby');
        break;
    case (vatten >= 100):
        alert("Ånga it is...");
        break;
    case (vatten >0 && vatten <100):
        alert('Vatten H2O osv...');
    default:
        alert('Felinmatning, inget tal har skrivits in');
    break;
}
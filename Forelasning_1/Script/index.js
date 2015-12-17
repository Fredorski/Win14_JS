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
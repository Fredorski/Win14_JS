//Detta är ett objekt i JS och har JSON-syntax

var kaffemugg =
{
    volym: 156,
    diameter: 12.9,
    hight: "14",
    arrayus: [5, 4, 5, "kalle"],
    drick: function() { alert('Du dricker'); }
}
kaffemugg.drick();
kaffemugg.volyym = 123; //felstavning innebär skapat en ny egenskap på objektet

//Function skapad med constructor notation
//Kan återanvändas för att skapa flera objekt
function Dinner(timeToCook, grades, name, duration) {
    this.timetoCook = timeToCook;
    this.grades = grades;
    this.name = name;
    this.duration = duration;
    this.ChekHowCoolItIs = function() {
         return this.grades * this.duration;
    }
}

var potatismos = new Dinner(55, 5, "Päremos", 6);
var spagetti = new Dinner(55, 9, "spagetti", 6);

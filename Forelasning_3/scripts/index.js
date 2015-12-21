//Bästa sättet att skapa metoder på:
function namngiven(inparameter) {
    alert(inparameter);
    return [5,5,34,25,2,2];
}

//Function expression finns först när interpreter har funnit funktionen är altså inte garanterad
var hej = function()
{
}
hej(); //Körs först här 

//IIFE: Immediately invoked function expression 
//kallas iffy
//är vanligast för event
var fun = (function() {

})(); //Körs direkt
fun(h);

var fun2 = (function () {
}()); //Körs direkt

//Bubling Capturing exempel:

//1)hämtar ut diven med hjälp av dess id:
var diven = document.getElementById('ett');

//2)lägger till ett klick-event:
//e är en identifierare för event-objektet
diven.addEventListener('click', function() {
    alert('Hej från diven');
    arguments[0].stopPropagation();
}, true);

//3) hämtar stycket:
var stycket = document.getElementById('tvau');
stycket.addEventListener('click', paragraphFunction, false);

function paragraphFunction() {
    window.alert('Paragraph is here!');
}
//Skapar en <p>-tagg:
var element = document.createElement('p');
//Lägger till innehåll i <p>-taggen:
element.textContent = "Detta är ett stycke";
//Ändrar bakgrundsfärgen på ett lite fult sätt:
element.style.backgroundColor = "grey";

//Lägger till klassen gosnalle på <p>-taggen:
element.setAttribute('class', 'gosnalle');

//För att koppla elementet till HTML-sidan måste vi hämta ut ett befintligt element och lägga till vårt nya:

var diven = document.getElementById('ett');
diven.appendChild(element);
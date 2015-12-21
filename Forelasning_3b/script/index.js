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


//hämta ut många genom nodlista:
var nodlista = document.getElementsByTagName('p');
for (var i = 0; i < nodlista.length; i++) {
    // alert(nodlista[i].innerHTML);
}
var lista = document.getElementsByClassName('gosnalle');
alert(lista[0].innerHTML);
var lista2 = querySelectorAll('p article');

//Remove element:
var elementet = document.getElementById('ett');
//Måste gå till parent och ta bort dess child:
elementet.parentElement.removeChild(elementet);


//Remove many many many:
var listElements = document.getElementsByName('p');
for (var i = listElements.length; 0 <= i; i--) {
    if (listElements[i] && listElements[i].parentElement)
        listElements[i].parentElement.removeChild(listElements[i]);
}
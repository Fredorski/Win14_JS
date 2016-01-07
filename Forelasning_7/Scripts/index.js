$(document).ready(function() {
    getAll(); 
    //getSmall(); //verifierat att det fungerar att 

    //Hämtar alla vid knapptryck:
    $('#button1').click(function() {
        $('div').remove();
        getAll();
    });

    //Hämtar alla vid knapptryck:
    $('#button4').click(function () {
        $('div').remove();
        getAll();
        getSmall();
    });
});

//Bilobjekten bör senare läggas i seperat .json-fil och hämtas med ajax-anrop:
var cars = [
{
    name: "winnebago",
    type: "big",
    price: 340202,
    make: "Monster",
    model: "T",
    image: "\image/bigCar01.jpg"
},
{
    name: "Air Car",
    type: "big",
    price: 23234,
    make: "Baloon",
    model: "Bad year",
    image: "\image/bigCar02.jpg"
},
{
    name: "hyande",
    type: "medium",
    price: 12121,
    make: "Hyundaii",
    model: "Accsent",
    image: "\image/mediumCar01.jpg"
},
{
    name: "med2",
    type: "medium",
    price: 43212,
    make: "Ford",
    model: "C#",
    image: "\image/mediumCar02.jpg"
},
{
    name: "med3",
    type: "medium",
    price: 5010,
    make: "Honda",
    model: "Accsent",
    image: "\image/mediumCar03.jpg"
},
{
    name: "small1",
    type: "small",
    price: 30000,
    make: "Q branch",
    model: "The Sean Connery",
    image: "\image/smallCar01.jpg"
},
{
    name: "Small2",
    type: "small",
    price: 20000,
    make: "Just Fits",
    model: "Jeremy Clarkson",
    image: "\image/smallCar02.jpg"
},
{
    name: "Small3",
    type: "small",
    price: 18000,
    make: "Just Fits",
    model: "Corp",
    image: "\image/smallCar03.jpg"
}];
//Refaktorisera getAll() genom att använd jQuery, du bör komma ner till ca 3-5 rader:
function getAll() {
    var carLength = cars.length;
    for (var i = 0; i < carLength; i++) {
        //hämta body tag
        var span1 = document.getElementsByTagName('body');
        //Skapa div-tag
        var span = document.createElement('div');
        //lägga till div tag på body
        span1[0].appendChild(span);
        //skapa rubrik-taggar
        var jHeading = document.createElement('p');
        var jHeading2 = document.createElement('p');
        var price = document.createElement('p');
        var img = document.createElement('img');
        //Hämta text 
        img.src = cars[i].image;
        var inJHeading = document.createTextNode('Make' + cars[i].make);
        var inJHeading2 = document.createTextNode('Model:' + cars[i].model);
        var inPrice = document.createTextNode('Price: £' + cars[i].price);
        //och sen informatin för taggarna
        jHeading.appendChild(inJHeading);
        jHeading2.appendChild(inJHeading2);
        price.appendChild(inPrice);
        //lägga till taggarna på diven
        span.appendChild(jHeading);
        span.appendChild(jHeading2);
        span.appendChild(price);
        span.appendChild(img);
    }
    $('div').each(function(i) {
        this.id = i;
        $(this).css('color', 'gray'); //Vad är detta?
    });
}

function getSmall(){
    for (var i = 0; i < cars.length; i++) {
        //displaya small cars
        if (cars[i].type !== 'small') {
            var j = "#" + i;
            $(j).hide();
        }
    }
}
//getMedium och getLarge:
//javascript:

var divs = document.getElementsByTagName('div');
//Ett enda dom-pools-dyk:
var divLength = divs.length;
for (var i = 0; divLength > i; i++) {
    divs[i].style.color = "red";
}

$('button.send').on('click', function() {
    $('some').showModalDialog(); //Ett pooldyk
    $('some').addClass('klasse'); //ett pooldyk
    $('some').style.color = 'red'; //ett pooldyk
    /*tänk er att det ligger tre ringar på en bassängs botten och ni ska dyka och hämta dem, men ni hämtar bara en i taget...*/
});
//Bättre lösning:
$('button.better').on('click', function () {
    $('some')
        .showModalDialog()
        .addClass('klasse')
        .style.color = 'red'; //ett pooldyk
    /*Vi hämtar alla ringarna i samma dyk...*/
});


//var text = $('#ett').text();

////$('#ett').text('Tjenare');
//alert(text);
//$('.hej').text('gurka');
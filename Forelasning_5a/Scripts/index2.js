$(document).ready(function() {
    //var element = "Pris: 399kr"; //Bad
    //var element = "<p> Pris: 399kr </p>"; //bad

    //Skapar ett element men lägger inte till det i DOM-trädet:
    var element = $("<p> Pris: 399kr </p>"); //good
    //.append(),   .prepend(),   .after(),       .before()
    //.appendTo(), .prependTo(), .insertAfter(), .insertBefore();
    $('#paskmat p:first').prepend(element);
    $('<span>Hej</span>').appendTo($('#paskmat'));
    $('button').remove(); //tar bort alla knappar i dom-trädet
});
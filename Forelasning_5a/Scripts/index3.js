$(document).ready(function() {

    $('button').on('click', function() {
        //körs när knappen tryckts:
        var price = $('<p>39.90Kr/pkt</p>');
        $(this).after(price);        
        //$(this).append(price);
        $(this).remove();

        //Hämta <ul>-elementet:
        //$(this).parent().parent().append(price);
        //Hämtar alla föräldrar och farföräldrar osv som är desert
        //$(this).parents('.desert').append(price);
        //Bästa sättet att hämta ut, hämtar ur ETT element:
        $(this).closest('.desert').append(price);
    });

});
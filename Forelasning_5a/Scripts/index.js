$(document).ready(function () {
    //Ändra i ett element
    //var text = $('h1').text(); //Hämtar texten
    //$('#ett').text("på julafton äter man samma mat som på påsken");
    ////Ändra i många element med tag eller klass
    //var matLista = $('li');
    //$('li').text('Förändring');

    //2 pooldykningar:
    //$('#julmat li').text('jul');
   // $('li:first').text("hej");
    //Traversing:
    //  $('li').first().text("hej");//Färre pooldykningar något snabbare kod!

    $('#paskmat li'); //Frestande men 2 pooldyk...
    $('#paskmat').find('li'); //Sköter allt när vi ändå är på plats 1dyk
    $('li').first().next(); //Element 2 genom att ta ett steg framåt
    $('li').last().prev(); //Näst sista elementet
    //Traversing up in the DOM:
    $('li').first().parent(); //Gå till föräldern dvs <ul>-elementet
    //Traversing down in the DOM:
    //$('#julmat>li');
    $('#julmat').children('li'); //Hittar bara direkta barn
    $('#julmat').find('li'); // hittar alla li i #julmat
});
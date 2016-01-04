//Reguljära uttryck
var text = "En roligrolig text som vi skriver här.";
var reg = new RegExp('rolig');
var reg2 = new RegExp('tråkig');
//alert("Finns rolig i text?)" + reg.test(text));
//alert("Finns tråkig i text?)" + reg2.test(text));



//This and that?
var text2 = "That is some";
var thisThat = new RegExp(/th(is|at)/i);

//Växlar till reguljära uttryck:
// i betyder case insensitive
// g betyder global, dvs hitta så många som möjligt
// m betyder multiline och letar på flera rader

//Fler reguljära uttryck:
// ^ betyder måste starta med
// $ betyder måste avslutas med

//Upprepning:
//      /(lisa)*/ matchar även lisalisa, lisalisalisa
//      /lisa*/ ger lis, lisa, lisaa, lisaaa, lisaaaaa
//      /lisa+/ ger lisa, lisaa, lisaaa, lisaaaaa
//      /lisa?/ ger lis, lisa
//      /lisa{2,3}/ ger lisaa, lisaaa

//alert(thisThat.test(text2));
// String RegExp metoder:
alert("hej du glade".search(/glade/)); //hittades på position 7 i textsträngen
alert("hej du glade".match('hej'));
alert("hej du glade".replace(/[aeiouåäö]/g, '*'));
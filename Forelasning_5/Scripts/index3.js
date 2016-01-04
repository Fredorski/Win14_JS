//Reguljära uttryck
var text = "En roligrolig text som vi skriver här.";
var reg = new RegExp('rolig');
var reg2 = new RegExp('tråkig');
//alert("Finns rolig i text?)" + reg.test(text));
//alert("Finns tråkig i text?)" + reg2.test(text));



//This and that?
var text2 = "That is some";
var thisThat = new RegExp(/th(is|at)/i);
//      /(lisa)*/ matchar även lisalisa, lisalisalisa
//      /lisa*/ ger lis, lisa, lisaa, lisaaa, lisaaaaa
//      /lisa+/ ger lisa, lisaa, lisaaa, lisaaaaa
//      /lisa?/ ger lis, lisa
//      /lisa{2,3}/ ger lisaa, lisaaa

alert(thisThat.test(text2));

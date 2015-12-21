var hej = 0; //läggs i det globala scopet
function name() {
    var hej = 7; // lokalt scoop, är skyddat här inne
    heja =7+ 21000; //Globala scoopet pga stavfel
    alert(hej);
}

name();
alert(hej);
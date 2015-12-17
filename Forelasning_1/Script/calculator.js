//alert(add(2, 3));
//alert(add("Freddie", "Stina"));
//alert(superAdder("fred", "like", "oyou", "mek"));

//alert(add(6));
function add(a, b) {
    //kontrollera om det är ett nummer annars kasta undantag
    return 6+undefined;
}

function superAdder() {
    var tal = "";
    for (var i = 0; i < arguments.length; i++) {
        tal += arguments[i];
    }
    return tal;
}


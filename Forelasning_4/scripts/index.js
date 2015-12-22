//Läs mer om event i kapitel 6 i boken!

document.getElementById('ett').addEventListener('click', function (e) {
    //e.stopPropagation(); //Hindrar framfarten av eventet
    alert("DIVEN");
    document.getElementById('tvau').removeEventListener('click', fun, true); //Funkar bara om function är namngiven

    //Om detta eventet tex legat på en knapp
    //kan vi ta bort knappens standardbeteende 
    //med följande kod:
    e.preventDefault(); //förhindrar ett standardbeteende
}); //True innebär isCapturing / fångar på vägen ner

document.getElementById('tvau').addEventListener('click', fun, true);

function fun() {
    alert("Paragraph");
}
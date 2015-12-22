var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "Music.XML");
request.onreadystatechange = function() {
    //Kod för att finna data.
    //Kontrollera readstate 4 och ok status 200:
    if (request.readyState === 4 && request.status === 200) {
        //Pos 3 i TITLE ska vi hämta ut:
        alert(request.responseXML.getElementsByTagName("TITLE")[3].firstChild.nodeValue);

        //Skapa en lista av ARTIST och skriv ut till hemsidan:
        var artists = request.responseXML.getElementsByTagName("ARTIST");
        //Börjar med att skapa en oordnad lista
        var output = '<ul>';
        //Lägger till <li>-elementen från artistlistan
        for (var i = 0; i < artists.length; i++) {
            output += "<li>" + artists[i].firstChild.nodeValue + "</li>";
        }
        //Avsluta <ul>
        output += "</ul>";
        //lägg in i HTML-sidan
        document.getElementById('ett').innerHTML = output;

    }
}
request.send();
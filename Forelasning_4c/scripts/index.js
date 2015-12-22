var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "json.json", true);
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        var jsonObjectet = JSON.parse(request.responseText);
        var output = "<ul>";
        for (var i = 0; i < jsonObjectet.fathers.length; i++) {
            output += "<li>" +
                        jsonObjectet.fathers[i].id + " : " +
                        jsonObjectet.fathers[i].name +
                        "</li>";
        }
        output += "</ul>";
        document.getElementById('result').innerHTML = output;

    }
}
request.send();
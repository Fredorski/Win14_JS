var vikt = document.getElementById('vikt').innerHTML;
var lengd = document.getElementById('lengd').innerHTML;
var berakning = calculateBMI(lengd, vikt);
document.getElementById('svar').innerHTML = berakning;


function calculateBMI(lengd, vikt) {
    return vikt / (lengd * lengd);
}
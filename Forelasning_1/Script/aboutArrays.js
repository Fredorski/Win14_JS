var array = new Array();
var array = new Array('hej', 'på', "dig", 'ester');
var array = ['hej', 'på'];
array[7] = "I'm out here"; //out of bounce
array[4] = 5;
for (var i = 0; i < array.length; i++) {
    alert(array[i]);//skriver undefined på de element som inte ännu angets
}

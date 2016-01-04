var glasses = {
    optics: 'bifocal',
    material: 'plastic',
    correction: '-2.0'
}
for (var glas in glasses) {
    document.writeln(glas + '  :  ' + glasses[glas] + '<br>');
}
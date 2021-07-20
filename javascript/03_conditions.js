let niveauDeSurf = prompt('Saisir votre niveau de surf de 1 a 10');


if(niveauDeSurf < 4){
    alert('Vous pouvez utiliser un Longboard');
}
else if( niveauDeSurf <=8){
    alert('Vous pouvez utiliser un Long et une 7.6 Notox');
}
else{
    alert('Vous pouvez utiliser un ShortBoard');
}
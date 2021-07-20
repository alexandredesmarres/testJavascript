
// Condition if / else if / else

/* 
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

*/

// condition SWITCH


let typeDePlanche = prompt('Quel marque de plache désirez vous ? Notox, Pukass, Tork') .toLowerCase();


console.log(typeDePlanche);

let tailleDeVague = prompt('Quel taille de vagues shouaitez vous surfer ? en Centimetre');



const TAILLEDEPLANCHE = {
    pukass: 0.4,
    notox: 0.8,
    tork: 1
};


switch (typeDePlanche){
    case 'tork':{
        alert('Nous vous conseillons une planche de : ' + TAILLEDEPLANCHE.tork * tailleDeVague + 'pied');
        break;
    }

    
    case 'notox':{
        alert('Nous vous conseillons une planche de :' + TAILLEDEPLANCHE.notox * tailleDeVague + 'pied');
        break;
    }

    case 'pukass':{
        alert('Nous vous conseillons une planche de :' + TAILLEDEPLANCHE.pukass * tailleDeVague + 'pied');
        break;
    }

    default:
        alert('Veuillez choisir la marque de planche désiré !!!');
}


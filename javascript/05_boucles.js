// boucle FOR 

for(let i = 0; i < 3; i += 1){
    console.log('Boucle : ' + i);
}


// Parcourir un tableaux 

let tab = ['Pommes', 'Fraises', 'Poires'];

    console.log('boucle -- FOR --');
for(let i = 0; i < tab.length; i += 1){
    console.log(tab[i]);
}

    console.log ('boucle -- WHILE--');
    let j = 0;
while(j < tab.length){
    console.log(tab[j]);
    j += 1;
}


console.log ('boucle --  DO WHILE--');
    let k = 0;
do {
    console.log(tab[k]);
    k += 1;
}

while (k < tab.length);


// Boucle FOR IN : iterer sur les clef d'un object

let voiture = {marque:'Peugeot', moteur:'essence'};

console.log('boucle --- FOR IN ---');
for (let k in voiture){
    console.log(k);
}

// Boucle FOR OF : iterer sur les clef d'un object

let tab2 = ['bleu', 'blanc', 'rouge'];

console.log('boucle --- FOR OF ---');
for (let v of tab2){
    console.log(v);
}


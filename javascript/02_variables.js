// déclaration de variable + affectation de valleur

let prenom = 'alex';

let age = 30;

console.log(prenom);
console.log(typeof prenom);

console.log(age);
console.log(typeof age);


// concatenation
console.log(prenom + ' ' + age + 'ans');

console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);


age = 20;
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);

const VILLE = 'paris';


//ARRAY les tableaux 

let tab=['pommes', 30, true, ['bleu', 'rouge']];

// longueur du tableau 
console.log(tab.length);

// si je veux récupéré l'index  1
console.log(tab[1]);

// si je veux récupéré le mot en rouge

console.log(tab[3][1]);


// Object

let personne = {
    prenom: 'Alex',
    age: 30,
    adresse: {
        rue: '12 rue de la Mare',
        ville: 'Rouan'
    }
};

console.log(personne.prenom, age);

console.log(personne.adresse.rue);

let a= 5;
let b= 2;

// addition +
console.log(a+b);

// soustraction -
console.log(a-b);

// multi *
console.log(a*b);

// division / 
console.log(a/b);

// Incrementer

a += 1;
a++;
console.log(a);
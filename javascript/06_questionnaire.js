

const questions =[
    {
        question:
            'Quel planche Monique Thuau sait le mieux surfer ?\n1. La Fish Pro. by Kellys Letter\n2. La Tork 6.8 ',
        reponse: 2

    },
    {
        question:
            'Elle est au garage depuis 3mois. Son coté obscure vous fait peur. Alexandre na pas le niveaux pour la pratiquer. Qui suis je ?\n1. Notox 7.6\n2. La Pukass de JOJO',
        reponse: 2
    },
    {
        question:
            'Apres avoir dompté Anglet, cette personne ces promit de gravir la Graviere. Qui est ce ?\n1. Alexandre\n2. Axel',
        reponse: 1
    }
];


//----- début du jeu ------

let nbBonneReponse = 0;

for(let i = 0; i < questions.length; i +=1){
    let repUser = prompt(questions[i].question);
    if(repUser == questions[i].reponse){
        alert('GOOD JOB');
        nbBonneReponse += 1;
    }
    else{
        alert('AIE AIE AIE tu dois réviser');
    }
}


if(nbBonneReponse <=1){
    alert(`Vous avez ${nbBonneReponse} bonne reponse sur ${questions.length}`);
}

else{
alert(`Vous avez ${nbBonneReponse} bonnes reponses sur ${questions.length}`);
}

if(nbBonneReponse <=3){
    alert('Bien jouez, vous pouvez fair du LONGBOARD a Wakiki beach !!!');
}



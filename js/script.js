/*
Esercizio 1: CHIEDI ALL'UTENTE LA SUA EMAIL, CONTROLLA CHE SIA NELLA LISTA E STAMPA
L'ESITO ATTRAVERSO UN MESSAGGIO APPROPRIATO.
*/

let mailList = ['user1@boolean.com', 'user2@boolean.com', 'user3@boolean.com', 'user4@boolean.com', 'user5@boolean.com', 'user6@boolean.com', 'user7@boolean.com', 'user8@boolean.com', 'user9@boolean.com', 'user10@boolean.com']

let button = document.getElementById('submit').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let flag = false;

    for (let i=0; i < mailList.length; i++) {
        if(mailList[i] === email){
            flag = true; 
        }
    }

    if (flag === true) {
        message = ('Login successful!');    
    }
    else {
        message = ('Access denied, your email is not in the list');
    }
    document.getElementById('message').innerText = message;
});
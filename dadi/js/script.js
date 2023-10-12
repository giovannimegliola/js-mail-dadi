/*Esercizio 2: GENERA UN NUMERO RANDOM DA 1 A 6 SIA PER IL GIOCATORE CHE
PER IL COMPUTER, STABILISCI IL VINCITORE SULLA BASE DEL PUNTEGGIO PIU ALTO
*/

let button = document.getElementById('submit').addEventListener('click', function(){

  let playerScore = Math.floor(Math.random() * 6) + 1;
  let computerScore = Math.floor(Math.random() * 6) + 1;
  
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;

  let message;
  
  if (playerScore > computerScore) {
    message = "Complimenti hai Vinto!";
  } else if (playerScore < computerScore) {
    message = "Hai perso, ritenta e la prossima volta sarai più fortunato!";
  } else {
    message = "Pareggio!";
  }

  document.getElementById('message').innerText = message;
});

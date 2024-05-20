function rollDice() {
  var player1Dice = document.getElementById("player1").value;
  var player2Dice = document.getElementById("player2").value;
  var player1Sum = 0;
  var player2Sum = 0;
  var diceResults = document.getElementById("diceResults");
  var sumResults = document.getElementById("sumResults");
  var winner = document.getElementById("winner");
  var score = document.getElementById("score");

  diceResults.innerHTML = "";
  sumResults.innerHTML = "";
  winner.innerHTML = "";

  for (var i = 0; i < player1Dice; i++) {
    var result = Math.floor(Math.random() * 6) + 1;
    player1Sum += result;
    diceResults.innerHTML += '<div class="dice">' + result + '</div>';
  }

  for (var i = 0; i < player2Dice; i++) {
    var result = Math.floor(Math.random() * 6) + 1;
    player2Sum += result;
    diceResults.innerHTML += '<div class="dice">' + result + '</div>';
  }

  sumResults.innerHTML = "<p>Suma del jugador 1: " + player1Sum + "</p>" +
                         "<p>Suma del jugador 2: " + player2Sum + "</p>";

  if (player1Sum > player2Sum) {
    winner.innerHTML = "<p>Jugador 1 gana esta ronda!</p>";
  } else if (player1Sum < player2Sum) {
    winner.innerHTML = "<p>Jugador 2 gana esta ronda!</p>";
  } else {
    winner.innerHTML = "<p>Empate!</p>";
  }

  if (player1Sum > player2Sum) {
    score.innerHTML = "<p>El jugador 1 tiene " + player1Sum + " puntos.</p>";
  } else if (player1Sum < player2Sum) {
    score.innerHTML = "<p>El jugador 2 tiene " + player2Sum + " puntos.</p>";
  } else {
    score.innerHTML = "<p>Ambos jugadores tienen " + player1Sum + " puntos.</p>";
  }

  if (player1Sum >= 2) {
    alert("¡El jugador 1 ha ganado!");
    resetGame();
  } else if (player2Sum >= 2) {
    alert("¡El jugador 2 ha ganado!");
    resetGame();
  }
}

function resetGame() {
  document.getElementById("player1").value = 1;
  document.getElementById("player2").value = 1;
  document.getElementById("diceResults").innerHTML = "";
  document.getElementById("sumResults").innerHTML = "";
  document.getElementById("winner").innerHTML = "";
  document.getElementById("score").innerHTML = "";
}
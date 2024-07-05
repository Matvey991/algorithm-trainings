// Камень ножницы Бумага
// Давайте играть! Вам нужно вернуть, какой игрок выиграл! В случае ничьей верните Draw!.
// Примеры (Вход1, Вход2 -> Выход):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
let player1 = 'scissors'
let player2 = 'rock'
function rockPaperScissors(player1, player2) {
    if (player1 === player2) {
      return "Draw!";
    }
  
    const beats = {
      'rock': 'scissors',
      'scissors': 'paper',
      'paper': 'rock'
    };
  
    if (beats[player1] === player2) {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
  }  rockPaperScissors(player1, player2)
  
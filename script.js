let newGame = document.getElementById("newGame")
let game = document.getElementById("game")

let player1 = {}
let player2 = {}
let currentPlayer = {}

let rollDice = document.getElementById("rollDice")
let holdButton = document.getElementById("hold")

game.classList.add("d-none")

function initiateGame() {
  player1 = {
    box:document.getElementById("player1"),
    boxScore:document.getElementById("score1"),
    boxCurrent:document.getElementById("current1"),
    score:0,
    current:0
  }

  player2 = {
    box:document.getElementById("player2"),
    boxScore:document.getElementById("score2"),
    boxCurrent:document.getElementById("current2"),
    score:0,
    current:0
  }

  updatePlayers()
  game.classList.remove("d-none")

  changePlayer(player1, player2)
}

function changePlayer() {
  if(currentPlayer === player1) {
    toPlay = player2
    played = player1
  }
  else {
    toPlay = player1
    played = player2
  }
  
  toPlay.box.classList.add("bg-lightgrey")
  played.box.classList.remove("bg-lightgrey")
  played.box.classList.add("text-thin")
  toPlay.box.classList.remove("text-thin")

  currentPlayer = toPlay
}

function updatePlayers() {
  player1.boxScore.innerText = player1.score
  player2.boxScore.innerText = player2.score
  player1.boxCurrent.innerText = player1.current
  player2.boxCurrent.innerText = player2.current
}

function throwDice() {
  let number = Math.round(Math.random() * (6 - 1) + 1);
  drawNumber(number)

  if(number === 1) {
    currentPlayer.score = 0
    updatePlayers()
    changePlayer()
  }
  else {
    currentPlayer.score += number
    updatePlayers()
  }
}

function drawNumber(number) {
  const dice = document.getElementById("dice");
  let ctx;
  if (dice.getContext) {
    ctx = dice.getContext('2d')
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, dice.width, dice.height);
    
    switch(number) {
      case 1 : 
        ctx.beginPath();
        ctx.arc(30, 30, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();
        ctx.closePath();
        break;
      case 2 : 
        ctx.beginPath();
        ctx.arc(15, 15, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.arc(45, 45, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();
        ctx.closePath();
        break;
      case 3 : 
        ctx.beginPath();
        ctx.arc(15, 15, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.arc(30, 30, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.arc(45, 45, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();
        ctx.closePath();
        break;
      case 4 : 
        ctx.beginPath();
        ctx.arc(15, 15, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(15, 45)
        ctx.arc(15, 45, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(45, 15)
        ctx.arc(45, 15, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(45, 45)
        ctx.arc(45, 45, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();
        ctx.closePath();
        break;
      case 5 : 
        ctx.beginPath();
        ctx.arc(15, 15, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(15, 45)
        ctx.arc(15, 45, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(45, 15)
        ctx.arc(45, 15, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(45, 45)
        ctx.arc(45, 45, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(30, 30)
        ctx.arc(30, 30, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();
        ctx.closePath();
        break;
      case 6 : 
        ctx.beginPath();
        ctx.arc(15, 15, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(15, 45)
        ctx.arc(15, 45, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(45, 15)
        ctx.arc(45, 15, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(30, 15)
        ctx.arc(30, 15, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(30, 45)
        ctx.arc(30, 45, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();

        ctx.moveTo(45, 45)
        ctx.arc(45, 45, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#eb4d4c";
        ctx.fill();
        ctx.closePath();

        break;
      default : 
        ctx.font = '30px Arial';
        ctx.fillText(number, 22, 40);
        break;
    }

  } else {
    dice.innerText = "Votre navigateur ne supporte pas ce composant."
  }
}

function hold() {
  currentPlayer.current += currentPlayer.score
  currentPlayer.score = 0
  updatePlayers()

  if(currentPlayer.current >= 100) {
    let message = currentPlayer.box.id.substring(0,1).toUpperCase() + currentPlayer.box.id.substring(1,6) + " " + currentPlayer.box.id.substring(6,7) + " won ! Congratulations !"
    alert(message)
    initiateGame()
  }
  else {
    changePlayer()
  }
}

newGame.addEventListener("click", initiateGame)
rollDice.addEventListener("click", throwDice)
holdButton.addEventListener("click", hold)


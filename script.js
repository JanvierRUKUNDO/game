function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'Scissor') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissor' && computerSelection === 'Paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  function updateScores(playerScore, computerScore) {
    const playerScoreElement = document.getElementById("playerScore");
    const computerScoreElement = document.getElementById("computerScore");
  
    playerScoreElement.textContent = `Player Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
  }
  
  function updateResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
  }
  
  function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
  
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  
    updateScores(playerScore, computerScore);
    updateResult(result);
  
    if (playerScore >= 5 || computerScore >= 5) {
      const winner = playerScore > computerScore ? "Player" : "Computer";
      const loser = playerScore > computerScore ? "Computer" : "Player";
      const gameResult = `Game Over! ${winner} wins. ${loser} loses.`;
      console.log(gameResult);
      updateResult(gameResult);
      // Reset scores
      playerScore = 0;
      computerScore = 0;
      updateScores(playerScore, computerScore);
    }
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorButton = document.getElementById("scissor");
  
  rockButton.addEventListener("click", () => game("rock"));
  paperButton.addEventListener("click", () => game("paper"));
  scissorButton.addEventListener("click", () => game("scissor"));
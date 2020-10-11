{
function playGame(argPlayerMove) {
    clearMessages()

  function getMoveName(randomNumber) {
      if (randomNumber == 1) {
        return 'kamień';
      }  else if (randomNumber == 2) {
          return 'papier';
      }  else if (randomNumber == 3) {
          return 'nożyce';    
      }  else {
        printMessage('Nie znam ruchu o id ' + randomNumber + '.');
        return 'nieznany ruch';
      }
    }


  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);


  console.log('Gracz wpisał: ' + argPlayerMove);
    

      if (argPlayerMove == '1') {
        argPlayerMove = 'kamień';
    } else if (argPlayerMove == '2') {
        argPlayerMove = 'papier';
    } else if (argPlayerMove == '3') {
        argPlayerMove = 'nożyce';
    } else {
        argPlayerMove = "nieznany ruch";
    }

    displayResult(argComputerMove, argPlayerMove);

  function displayResult(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || 
            (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
            (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Błędna cyfra! Podaj 1, 2 lub 3');
        } else {
            printMessage('Komputer wygrywa!');
        }
        console.log(getMoveName('2'));
    }
  }

    function rockClicked() {
      playGame(1);
    }
    function paperClicked() {
      playGame(2);
    }
    function scissorsClicked() {
      playGame(3);
    }

      const buttonRock = document.getElementById('button-rock');
      const buttonPaper = document.getElementById('button-paper');
      const buttonScissors = document.getElementById('button-scissors');

      buttonRock.addEventListener('click', rockClicked);
      buttonPaper.addEventListener('click', paperClicked);
      buttonScissors.addEventListener('click', scissorsClicked);
}

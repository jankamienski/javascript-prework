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

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + argComputerMove);

/*if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(randomNumber);

/*if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == "2") {
    playerMove = 'papier';
} else if (playerInput == "3") {
    playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + ArgPlayerMove);


function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
if ((argComputerMove== 'kamień' && argPlayerMove == 'papier') || 
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
    printMessage('Ty wygrywasz!');
} else if (argComputerMove=== cargPlayerMove) {
    printMessage('Remis!');
} else if (cargPlayerMove === 'nieznany ruch') {
    printMessage('Błędna cyfra! Podaj 1, 2 lub 3');
} else {
    printMessage('Komputer wygrywa!');
}
console.log(getMoveName('2'));
}
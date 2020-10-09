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
//printMessage('Mój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let argPlayerMove = playerInput;  //nie wiem czy to dobra dekalracja...
console.log('Gracz wpisał: ' + playerInput);
  

  if (playerInput == '1') {
    argPlayerMove = 'kamień';
} else if (playerInput == "2") {
    argPlayerMove = 'papier';
} else if (playerInput == "3") {
    argPlayerMove = 'nożyce';
} else {
    argPlayerMove = "nieznany ruch";
    //printMessage('Błędna cyfra! Podaj 1, 2 lub 3');
}
//printMessage('Twój ruch to: ' + argPlayerMove);

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

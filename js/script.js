function playGame(){
    
    function getMoveName (argMoveId){
        if(argMoveId == 1){
        return 'kamień';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
        } else {
    printMessage('Tym razem przegrywasz :(');
        }
    }
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = 'nieznany ruch';
    computerMove = getMoveName (randomNumber);
    /*if(randomNumber == 1){
    computerMove = 'kamień';
    }
    if(randomNumber == 2){
    computerMove = 'papier';
    }
    if(randomNumber == 3){
    computerMove = 'nożyce';
    }*/
    printMessage('Mój ruch to: ' + computerMove);

    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = 'nieznany ruch';

    playerMove = getMoveName (playerInput);

    /*if(playerInput == '1'){
    playerMove = 'kamień';
    }
    if(playerInput == '2'){
    playerMove = 'papier';
    }
    if(playerInput == '3'){
    playerMove = 'nożyce';
    }
    if(playerInput > '3'){
    playerMove = 'nieznany ruch';
    }*/
    printMessage('Twój ruch to: ' + playerMove);


    /*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    }
    else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
    }
    else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
    }
    else (computerMove == playerInput){
    printMessage('Remis');
    }*/

    function buttonClicked(){
    printMessage('Guzik został kliknięty');
    }
  
    let testButton = document.getElementById('test-button');
  
    testButton.addEventListener('click', buttonClicked);
}
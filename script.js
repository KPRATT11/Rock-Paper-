function randInt(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

const selections = ['rock', 'paper', 'scissors'];

function computerPlay(selections) {
    return randInt(0,selections.length) + 1
}

function userInput(selections) {
    let input = prompt(`Choose ${selections[0]}, ${selections[1]} or ${selections[2]}`);
    input = input.toLowerCase();

    for (let i =0; i < selections.length; i++){
        if (input === selections[i])
            return i + 1;
    }

    return null;
}

function calculateResults(selections) {
    player1 = userInput(selections)
    player2 = computerPlay(selections)

    if (player1 === null){
        console.log('Thats an Invalid input');
        calculateResults(selections)
    }
    
    else{
        alert(`You chose ${selections[player1 - 1]}`);
        alert(`The computer chose ${selections[player2 - 1]}`);
    

    if (player1 == player2){
        return null;
    }
    else if (player1 - player2 === 1 || player1 - player2 === -2) {
        return true;
    }
    else {
        return false;
    }
    return;
    }    
    }
    
function playGames(amountGames) {
    let playerScore = 0;
    let compScore = 0;
    for (let i =0; i < amountGames; i++){
        switch (calculateResults(selections)) {
            case true:
                alert('You Win');
                playerScore += 1;
                break;
            
            case false:
                alert('You Loose');
                compScore += 1
                break;

            case null:
                alert('Draw')
                break;
        }
    }
    if (playerScore > compScore){
        return `Your score was ${playerScore} \nwhich is more than the computers score of ${compScore} \n
        YOU WIN!!`
    }
    else if (playerScore < compScore) {
        return `Your score was ${playerScore} \nwhich is less than the computers score of ${compScore} \n
        YOU LOSE!!`
    }
    else if (compScore === playerScore) {
        return `Your score was ${playerScore} \nwhich is the same as the computers score \n
        IT'S A DRAW!!`
    }
}

alert(playGames(5));

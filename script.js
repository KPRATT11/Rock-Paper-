//Create Varibles for input buttons
const buttons = document.querySelectorAll('#input .buttons')

//Avalible selections --This is the only place you need to change the text it will change globally--
const selections = ['rock', 'paper', 'scissors'];



//random int helper function
function randInt(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}


//set text of input buttons to the related text of the selections
let butnum = 0;
for (button of buttons ){
    button.textContent = selections[butnum];
    butnum ++;
}
butnum = undefined;


function userInput() {
let selection = null;
//Set up event listners for user input
//Grab the input and convert it into number for later use
    for (button of buttons){
        button.addEventListener('click', function() {
            let input = this.textContent
            input = input.toLowerCase();

            //convert text selection to number
                for (let i =0; i < selections.length; i++){
                    if (input === selections[i])
                        selection = i + 1;
                }

            //Play Game Function and Print Result
                printResult(playGame(selection));
            }   
        );
    }
}

userInput()

//Generate random selection for the computer
function computerPlay() {
    return randInt(0,selections.length) + 1
}


function playGame(selection) {
    player = selection
    comp = computerPlay()
    
    if (player == comp){
        return [null,player,comp];
    }
    else if (player - comp === 1 || player - comp === -2) {
        return [true,player,comp];
    }
    else {
        return [false,player,comp];
    }
    return;
    }    
    
    

//Get access to Results Elements
const resultText = document.querySelector('.results h3');

//inputText[0] refers to the top element of text while inputText[1] refers to the bottom element of text
const inputText = document.querySelectorAll('.results h4')


//function asks for an array of details
//[0] wether the game is lost or won
//[1] users input
//[2] computers input
function printResult(details) {
    result = details[0]
    //Print Players Input
    inputText[0].textContent = `You chose ${selections[details[1] - 1]}`


    //Print Computers Input
    inputText[1].textContent = `The computer chose ${selections[details[2] - 1]}`

    //Print Results
    switch (result) {
        case true:
            resultText.textContent = 'You Win'
            break;

        case false:
            resultText.textContent = 'You Loose'
            break;

        case null:
            resultText.textContent = 'That was a Draw'
            break;
    }
    }


/*function playGame(selection) {
    for (let i =0; i < amountGames; i++){
        switch (calculateResults(selections, selection)) {
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
        alert( `Your score was ${playerScore} \nwhich is more than the computers score of ${compScore} \n
        YOU WIN!!`)
    }
    else if (playerScore < compScore) {
        alert( `Your score was ${playerScore} \nwhich is less than the computers score of ${compScore} \n
        YOU LOSE!!`)
    }
    else if (compScore === playerScore) {
        alert(`Your score was ${playerScore} \nwhich is the same as the computers score \n
        IT'S A DRAW!!`)
    }
}*/

//alert(playGames(5));

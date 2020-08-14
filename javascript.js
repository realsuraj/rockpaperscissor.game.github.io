function rpsGame(yourChoice)
{
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice( randToRpsInt() );
    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice)
    console.log(results)
    message = finalMessaage(results)
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice,message)
}

function randToRpsInt()
{
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number)
{
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,botChoice)

{
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5,'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase [yourChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore, computerScore]
}

function finalMessaage([yourScore,computerScore])
{
    if(yourScore === 0)
    {
        return {'message': 'you Lost!', 'color': 'red'};
    }
    else if (yourScore === 0.5)
    {
        return {'message': ' tied', 'color': 'yellow'}
    }
    else
    {
        return {'message': 'you won', 'color': 'green'}
    }

}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage)
{
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

   //remove all the images

   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();

 var humanDiv = document.createElement('div');
 var botDiv = document.createElement('div');
 var messageDiv = document.createElement('div');

 
 humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 10px blue;'>"
document.getElementById('flex-box-rps-div').appendChild(humanDiv)

messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
document.getElementById('flex-box-rps-div').appendChild(messageDiv)

botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 10px red;'>"
document.getElementById('flex-box-rps-div').appendChild(botDiv)


}
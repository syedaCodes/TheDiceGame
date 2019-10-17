var score, roundScore, activePlayer, gamePlaying, storeDice, val, input;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
   if(gamePlaying){
    
    var dice1 = Math.floor(Math.random()*6) + 1;
    var dice2 = Math.floor(Math.random()*6) + 1;

    document.getElementById('dice1').style.display ='block';
    document.getElementById('dice2').style.display ='block';

    document.getElementById('dice1').src = 'img/dice-'+ dice1 + '.png';
    document.getElementById('dice2').src = 'img/dice-'+ dice2 + '.png';
    
    if(dice1!== 1 && dice2 !==1){
        roundScore += dice1 + dice2;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }
    else{
        nextPlayer();
    }


        /*if(dice === 6 && storeDice === 6){
            score[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = '0';
            nextPlayer();
        }
        else if(dice!== 1){
            roundScore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        }
        else{
            nextPlayer();
        }
        storeDice = dice;*/
        
   }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        score[activePlayer] += roundScore;                         
        document.querySelector('#score-'+ activePlayer).textContent = score[activePlayer];      
    
    if(score[activePlayer] >= val){
        document.querySelector('#player-'+ activePlayer).textContent='Winner!';
        hideDice();         
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        gamePlaying = false;
    }
    else{
        nextPlayer();
    }
    }
    
});

document.querySelector('.btn-target').addEventListener('click', function(){
    if(input.value){
        val = input.value;
        alert('Target ' + val);
        input.value="";
    }
    else{
        val = 100;
        alert(val);
    }
});

function hideDice(){
    document.getElementById('dice1').style.display ='none';
    document.getElementById('dice2').style.display ='none'; 
}

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    hideDice();
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
gamePlaying = true;
score = [0,0];
roundScore = 0; 
activePlayer = 0;
val = 100;


hideDice();                        

document.getElementById('current-0').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-1').textContent = '0'; 

document.getElementById('player-0').textContent='Player 1';
document.getElementById('player-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

input = document.querySelector('.input');
}
var scores,activePlayer,roundScore,gamePlay,dice1,dice2;
init();
// document.querySelector('.rollScore').style.display='none';

document.querySelector('#btn-rollDice').addEventListener('click',function(){
  if(gamePlay)
  {
    // document.querySelector('.rollScore').style.display='block';
    document.getElementById('roll1').style.display='block';
    document.getElementById('roll2').style.display='block';
    dice1=Math.floor(Math.random()*6)+1;
    dice2=Math.floor(Math.random()*6)+1;
    document.getElementById('roll1').textContent=dice1;
    document.getElementById('roll2').textContent=dice2;

    if(dice1===6 && dice2===6)
    {
        scores[activePlayer-1]=0;
        document.querySelector('.player-'+activePlayer+'-score').textContent=scores[activePlayer-1];
        nextPlayer();
    }
    else if(dice1!==1 && dice2!==1)
    {
      roundScore+=dice1+dice2;
      document.querySelector('.player-'+activePlayer+'-cScore').textContent=roundScore;
    }
    else{
        nextPlayer();
      }
    // lastDice=dice;
  }
});

document.querySelector('#btn-hold').addEventListener('click',function(){
  if(gamePlay)
  {
    scores[activePlayer-1]+=roundScore;
    document.querySelector('.player-'+activePlayer+'-score').textContent=scores[activePlayer-1];
    var input=document.querySelector('.finalVal').value;
    var winningScore;
    if(input)
    {
      winningScore=input;
    }
    else{
      winningScore=50;
    }
    if(scores[activePlayer-1]>=winningScore)
    {
      document.querySelector('.player-'+activePlayer+'-name').textContent='Winner';
      document.querySelector('.player-'+activePlayer+'-name').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      // document.querySelector('.rollScore').style.display='none';
      document.getElementById('roll1').style.display='none';
      document.getElementById('roll2').style.display='none';
      gamePlay=false;
    }
    else{
    nextPlayer();
    }
  }
});
function nextPlayer()
{
  activePlayer===1?activePlayer=2:activePlayer=1;
  roundScore=0;
  document.querySelector('.player-1-cScore').textContent='0';
  document.querySelector('.player-2-cScore').textContent='0';
  // document.querySelector('.rollScore').textContent='0';
  // document.getElementById('roll1').textContent='0';
  // document.getElementById('roll2').textContent='0';
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.player-2-panel').classList.toggle('active');
}

document.getElementById('btn-newGame').addEventListener('click',init);

function init()
{
 scores=[0,0];
 roundScore=0;
 activePlayer=1;
 gamePlay=true;
  document.querySelector('.player-1-score').textContent='0';
  document.querySelector('.player-2-score').textContent='0';
  document.querySelector('.player-1-cScore').textContent='0';
  document.querySelector('.player-2-cScore').textContent='0';
  // document.querySelector('.rollScore').style.display='none';
  document.getElementById('roll1').style.display='none';
  document.getElementById('roll2').style.display='none';
  document.querySelector('.player-1-name').textContent='Player 1';
  document.querySelector('.player-2-name').textContent='Player 2';
  document.querySelector('.player-1-name').classList.remove('winner');
  document.querySelector('.player-2-name').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-2-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.finalVal').value="";
}

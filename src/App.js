import logo from './logo.svg';
import './App.css';
import Answer from './Answer.js';
import Board from './Board.js';
import Choices from './Choices.js';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const colors=["red","yellow","green","blue","black","purple"]
function App() {
  const [answers, setAnswers] = useState([
    colors[Math.floor(Math.random() * 6)],
    colors[Math.floor(Math.random() * 6)],
    colors[Math.floor(Math.random() * 6)],
    colors[Math.floor(Math.random() * 6)]
  ]);
  const[gameOver,setGameOver]=useState(false)
  const[lost,setLost]=useState(false)
  const [stage,setStage]=useState("guessing")
  const [gameState,setGameState]=useState(createInitialState())
  const [activeColor,setActiveColor]=useState("red");
  const [activeRow,setActiveRow]=useState(9);
  //const [pegs,setPegs]=useState(["","","",""]);
  const [responseObject,setResponseObject]=useState({});
  function handleNewActiveColor(color){
    setActiveColor(color)
  }
  console.log(answers)
  function handleClick(row,column){
    if (row===activeRow){
      let copyOfState={...gameState}
      copyOfState[row][column]=activeColor
      setGameState(copyOfState)
    }
  }
  function handlePlayAgain(){
   setAnswers([colors[Math.floor(Math.random() * 6)],
   colors[Math.floor(Math.random() * 6)],
   colors[Math.floor(Math.random() * 6)],
   colors[Math.floor(Math.random() * 6)]])
   setGameOver(false)
   setGameState(createInitialState())
   setActiveColor("red")
   setActiveRow(9)
   setResponseObject({})
   setLost(false)
  }

  function handleCheck(){
   const responseArray = evaluate(answers,gameState[activeRow])
   
   let copyOfRespsonsObject={...responseObject}
   copyOfRespsonsObject[activeRow]=responseArray
   setResponseObject(copyOfRespsonsObject)
  
   if (responseArray.every(string=>string==="black")){
    window.alert("Congratulations: You Win!")
    setGameOver(true)
   }
   else if(activeRow>0){
    setActiveRow(activeRow-1)
   }
   else{
    setGameOver(true)
    setLost(true)
   }
  }
  console.log(activeRow)
  return (
    <div className="App">
      <Answer answers={answers} lost={lost} stage={stage}/>
      <Board handleClick={handleClick} handleCheck={handleCheck} responseObject={responseObject} gameState={gameState} activeRow={activeRow}/>
      <Choices colors={colors} activeColor={activeColor} handleNewActiveColor={handleNewActiveColor}/>
      <div>
      {gameOver && <button onClick={handlePlayAgain}>Play Again</button>}
    </div>
    </div>
  );
}

export default App;
function createInitialState(){
  let game={}

  for (let i=0;i<10;i++ ){
    for (let j=0;j<4;j++){
      game[i]=game[i]||{}
      game[i][j]=null
    }

  }


  return game
}


 function evaluate(correctResponses, currentGuess){
  let guessPaired = [false, false, false, false]
  let answerPaired = [false, false, false, false]
  let feed = ["","","",""]
  let b=0
  let y=0

  if (currentGuess[0]===correctResponses[0]){
    guessPaired[0]=true
    answerPaired[0]=true
    b=b+1
    
  }
  if (currentGuess[1]===correctResponses[1]){
    guessPaired[1]=true
    answerPaired[1]=true
    b=b+1
    
  }
  if (currentGuess[2]===correctResponses[2]){
    guessPaired[2]=true
    answerPaired[2]=true
    b=b+1
    
  }
  if (currentGuess[3]===correctResponses[3]){
    guessPaired[3]=true
    answerPaired[3]=true
    b=b+1
    
  }
  if (!guessPaired[0] && (currentGuess[0]===correctResponses[1]) && !answerPaired[1]){
    y=y+1
    guessPaired[0]=true
    answerPaired[1]=true
  
  }
  if (!guessPaired[0] && (currentGuess[0]===correctResponses[2]) && !answerPaired[2]){
    y=y+1
    guessPaired[0]=true
    answerPaired[2]=true
  
  }
  if (!guessPaired[0] && (currentGuess[0]===correctResponses[3]) && !answerPaired[3]){
    y=y+1
    guessPaired[0]=true
    answerPaired[3]=true
  
  }
  
  if (!guessPaired[1] && (currentGuess[1]===correctResponses[0]) && !answerPaired[0]){
    y=y+1
    guessPaired[1]=true
    answerPaired[0]=true
  
  }
  if (!guessPaired[1] && (currentGuess[1]===correctResponses[2]) && !answerPaired[2]){
    y=y+1
    guessPaired[1]=true
    answerPaired[2]=true
  
  }
  if (!guessPaired[1] && (currentGuess[1]===correctResponses[3]) && !answerPaired[3]){
    y=y+1
    guessPaired[1]=true
    answerPaired[3]=true
  
  }
  if (!guessPaired[2] && (currentGuess[2]===correctResponses[0]) && !answerPaired[0]){
    y=y+1
    guessPaired[2]=true
    answerPaired[0]=true
  
  }
  if (!guessPaired[2] && (currentGuess[2]===correctResponses[1]) && !answerPaired[1]){
    y=y+1
    guessPaired[2]=true
    answerPaired[1]=true
  
  }
  if (!guessPaired[2] && (currentGuess[2]===correctResponses[3]) && !answerPaired[3]){
    y=y+1
    guessPaired[2]=true
    answerPaired[3]=true
  
  }
  if (!guessPaired[3] && (currentGuess[3]===correctResponses[0]) && !answerPaired[0]){
    y=y+1
    guessPaired[3]=true
    answerPaired[0]=true
  
  }
  if (!guessPaired[3] && (currentGuess[3]===correctResponses[1]) && !answerPaired[1]){
    y=y+1
    guessPaired[3]=true
    answerPaired[1]=true
  
  }
  if (!guessPaired[3] && (currentGuess[3]===correctResponses[2]) && !answerPaired[2]){
    y=y+1
    guessPaired[3]=true
    answerPaired[2]=true
  }
  

  
  // if (currentGuess[1]===correctResponses[1]){
  //   paired[1]=true
  //   b=b+1
    
  // }
  // else if ((currentGuess[1]===correctResponses[0] && paired[0]===false) || (currentGuess[1]===correctResponses[2] && paired[2]==false) || (currentGuess[1]==correctResponses[3] && paired[3]==false)){
  //   y=y+1
  
  // }
 
  // else if ((currentGuess[2]===correctResponses[0] && paired[0]===false) || (currentGuess[2]===correctResponses[1] && paired[1]==false) || (currentGuess[2]==correctResponses[3] && paired[3]==false)){
  //   y=y+1
  
  // }
 
  // else if ((currentGuess[3]===correctResponses[0] && paired[0]===false) || (currentGuess[3]===correctResponses[1] && paired[1]==false) || (currentGuess[3]==correctResponses[2] && paired[2]==false)){
  //   y=y+1
  
  //}
  if (b>=1){
    feed[0]="black"
  }
  else if(y>=1){
    feed[0]="yellow"
  }
  if (b>=2){
    feed[1]="black"
  }
  else if ((y>=2)||(b===1 && y>=1)){
    feed[1]="yellow"
  }
  if (b>=3){
    feed[2]="black"
  }
  else if(((b+y)>=3) && (y>0)){
    feed[2]="yellow"
  }
  if(b===4){
    feed[3]="black"
  }
  else if(((b+y)===4) && (y>0)){
    feed[3]="yellow"
  }



 
 

  return feed
 }

 
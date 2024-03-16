import Row from './Row.js';

function Board({handleClick, gameState, handleCheck, activeRow, responseObject}){
  const rowNumbers=[0,1,2,3,4,5,6,7,8,9]
  return(
    <div>
      {rowNumbers.map((rowNumber)=>{
        return(
          <Row rowNumber={rowNumber} responseObject={responseObject} handleClick={handleClick} handleCheck={handleCheck} gameState={gameState} activeRow={activeRow}/>
        )
      })}
    </div>
  )
    
    
}

export default Board

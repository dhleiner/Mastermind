import Location from './Location.js';
import Feedback from './Feedback.js';

function Row({rowNumber,handleClick, gameState, activeRow, handleCheck, responseObject}){
  const columnNumbers=[0,1,2,3]
  const disabled=Object.values(gameState[activeRow]).some(value=>value===null)
  
  return(
    <div className="row">
      <div className="flex col">
       {columnNumbers.map((columnNumber)=>{
        return(
          <span onClick={()=>handleClick(rowNumber,columnNumber)}>
           <Location rowNumber={rowNumber} columnNumber={columnNumber} gameState={gameState}/>
          </span>
        
        )
       })}
      </div>
      <div className="col">
       <Feedback responseObject={responseObject} rowNumber={rowNumber}/>
      </div>
      <div className="col">
      {rowNumber===activeRow && <button onClick={handleCheck} disabled={disabled} >Check</button>}
        
      </div>
    </div>
  
  )
}

export default Row

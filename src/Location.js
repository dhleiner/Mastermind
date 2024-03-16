import Dot from './Dot.js';

function Location({rowNumber, columnNumber, gameState}){
  const color=gameState[rowNumber][columnNumber]
 
  return(
    <div>
     <Dot classes={"large-dot " +color}/>
    </div>
  )
}

export default Location
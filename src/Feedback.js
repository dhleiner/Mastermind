import { useState } from "react";
import Dot from "./Dot.js";


function Feedback({responseObject,rowNumber}){
  //const [responses, setResponses] = useState(["","","",""]);
  let responses=responseObject[rowNumber]
  if (!responses){
    responses=["","","",""]
  }

  return(
    <div className="flex">
      <div className="row">
        {responses.map((response)=>{
          return(
            <div className="col-6"><Dot classes={"small-dot " +response}/></div>
          )
        })}
      
      </div>
      
    </div>
  )

}

export default Feedback;
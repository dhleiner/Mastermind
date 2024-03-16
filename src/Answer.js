import Dot from "./Dot.js";

function Answer({answers,stage, lost}){
  return(
    <div className="row">
      <div className="flex col">
      {answers.map((answer)=>{
        return(
          <div class="col">
            {!lost? 
             <Dot classes={"gray large-dot"}/>
            :
            <Dot classes={answer+" large-dot"}/>
            }
          </div>
        )
      })}


      </div>
      <div className="col"></div>
      <div className="col"></div>
    </div>
  );

  
}

export default Answer
    
import Dot from "./Dot.js";

function Choices({colors, activeColor, handleNewActiveColor}){
  return(
    <div className="flex">
      {colors.map((color)=>{
        const isActive=color===activeColor
        return(
          <span onClick={()=>handleNewActiveColor(color)}>
            <Dot classes={color+" medium-dot"+(isActive? " active":"")}/>
          </span>
          
        )
      })}
    </div>
  )
}

export default Choices
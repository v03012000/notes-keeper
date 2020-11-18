import React ,{useState} from "react";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
const [colorpicked,setColor]=useState("ecd335");
function changeColor(event)
{
setColor(event.target.value);
console.log(colorpicked);
}
  return (
    <div  style={{backgroundColor:colorpicked}}className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style={{color:"black"}}onClick={handleClick}><DeleteOutlineOutlinedIcon/></button>
      
      <label>
      <input style={{display:"none"}} type="color" id="color-picker" value={colorpicked} onChange={changeColor}></input>
      <span class="select"><ColorLensOutlinedIcon/></span> 
      </label>

    </div>
  );
}

export default Note;

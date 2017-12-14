import React from 'react';
const ColorPicker = (props) => {
    return (
        <div>

          <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>

  <ul id='dropdown1' class='dropdown-content'>
    <li><button className="colors" onClick={props.purple} id="purple"></button></li>
    <li><button className="colors" onClick={props.green} id="green"></button></li>
    <li><button className="colors" onClick={props.red} id="red"></button></li>
    <li><button className="colors" onClick={props.blue} id="blue"></button></li>
    <li><button className="colors" onClick={props.black} id="black"></button></li>
  </ul>

             {/* <CirclePicker onClick={(color, event) => props.handleChangeComplete(color)}/> */}
             {/* <button className="colors" onClick={props.purple} id="purple"></button> 
             <button className="colors" onClick={props.green} id="green"></button> 
             <button className="colors" onClick={props.red} id="red"></button> 
             <button className="colors" onClick={props.blue} id="blue"></button>
             <button className="colors" onClick={props.black} id="black"></button> */}
        </div>
    )
}

export default ColorPicker
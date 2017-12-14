import React from 'react';
import './ColorPicker.css'

const ColorPicker = (props) => {
    return (
        <div>
{/* 
          <a className='dropdown-button btn' hover='true' href='#' data-activates='dropdown'>Drop Me!</a>

   <ul id='dropdown' className='dropdown-content'>
    <li><button className="colors" onClick={props.yellow} id="yellow"></button></li>
    <li><button className="colors" onClick={props.green} id="green"></button></li>
    <li><button className="colors" onClick={props.red} id="red"></button></li>
    <li><button className="colors" onClick={props.blue} id="blue"></button></li>
    <li><button className="colors" onClick={props.black} id="black"></button></li>
  </ul>  */}

            <button className="colors" onClick={props.yellow} id="yellow"></button> 
            <button className="colors" onClick={props.green} id="green"></button> 
            <button className="colors" onClick={props.red} id="red"></button> 
            <button className="colors" onClick={props.blue} id="blue"></button>
            <button className="colors" onClick={props.black} id="black"></button> 
        </div>
    )
}

export default ColorPicker
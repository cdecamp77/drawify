import React from 'react';
import './ColorPicker.css'

const ColorPicker = (props) => {
    return (
            <div>
                <p>Color Selector</p>
                <div className="colorPicker">
                    <button className="colors" onClick={props.white} id="white"></button> 
                    <button className="colors" onClick={props.yellow} id="yellow"></button> 
                    <button className="colors" onClick={props.green} id="green"></button> 
                    <button className="colors" onClick={props.red} id="red"></button> 
                    <button className="colors" onClick={props.blue} id="blue"></button>
                    <button className="colors" onClick={props.black} id="black"></button> 
                </div>
            </div>
    )
}

export default ColorPicker
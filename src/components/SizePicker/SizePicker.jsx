import React from 'react';
import './SizePicker.css';

const SizePicker = (props) => {
    return (
        <div className="row">
            <div className="action-bar"> 
                <input type="range" min="1" max="4" name="val_size" value={props.val_size} onChange={(e) => {props.handleSizeSlider(e)}}/>  
            </div>
        </div>  
    )
}

export default SizePicker;
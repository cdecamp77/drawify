import React from 'react';
import './SizePicker.css';

const SizePicker = (props) => {
    return (
            <div className="action-bar"> 
                <p>Size Selector</p>
                <input type="range" min="1" max="4" name="val_size" value={props.val_size} onChange={(e) => {props.handleSizeSlider(e)}} />
            </div>
    )
}

export default SizePicker;
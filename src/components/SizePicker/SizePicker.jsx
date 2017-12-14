import React from 'react';
import './SizePicker.css';

const SizePicker = (props) => {
    return (
        <div className="row">

            <div className="action-bar"> 
                <input type="range" min="0" max="4" name="val_size" value={props.val_size} onChange={(e) => {props.handleSizeSlider(e)}}/>  
            </div>

             {/* <div id="slidecontainer">
                <p>Custom range slider:</p>
                <output id="sliderVal"></output> */}

                {/* <input id="slider" width="400" type="range" list="tickmarks" min="1" max="4" data-show-value="true" onInput={props.handleSizeSlider(this.value)} />
                <datalist id="tickmarks">
                    <option value="1"/>
                    <option value="2" />
                    <option value="3" />
                    <option value="4" />
                </datalist>
            </div> */}

             {/* <div className= "s12">
                <button className="sizeButtons s3" onClick={props.small} id="small">SMALL</button>
                <button className="sizeButtons s3" onClick={props.normal} id="normal">NORMAL</button>
                <button className="sizeButtons s3" onClick={props.large} id="large">LARGE</button>
                <button className="sizeButtons s3" onClick={props.huge} id="huge">HUGE</button>
            </div>  */}
            </div>  
    )
}

export default SizePicker;
import React from 'react';
import './ClearDrawingButton.css';

const ClearDrawingButton = (props) => {
    return (
        <div className="row">
            <div id="clearButton">
                <a className="btn waves-effect waves-light s12" id="clearCanvas"><i className="large material-icons">clear</i>Clear</a>
            </div>
        </div>
    )
}

export default ClearDrawingButton;
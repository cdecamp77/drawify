import React from 'react';
import './Canvas.css';

const Canvas = (props) => {

    return (
        <div className="row">
            <canvas className="s12" id="top-layer" width="500" height="300"></canvas>
        </div>
    );
}

export default Canvas;
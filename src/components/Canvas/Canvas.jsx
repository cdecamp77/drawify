import React from 'react';
import './Canvas.css';

const Canvas = (props) => {

    return (
        <div className="row">
            <canvas className="s12" id="top-layer" width="700" height="500"></canvas>
        </div>
    );
}

export default Canvas;
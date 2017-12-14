import React from 'react';

const Drawing = (props) => {
    return (
        <div>
            <canvas onMouseUp={props.handleMouseUp}  onMouseDown={props.handleMouseDown} onMouseMove={props.handleMouseMove}width="500"     id="photo" height="300" className="output"> 
            </canvas>
        </div>
        
    );
}

export default Drawing;
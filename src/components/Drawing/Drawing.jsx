import React from 'react';

const Drawing = (props) => {
    return (
        <div>
            <canvas 
                id="photo" 
                className="output"
                onMouseUp={props.handleMouseUp}  
                onMouseDown={props.handleMouseDown} 
                onMouseMove={props.handleMouseMove}
                width="700"     
                height="500"
            >
            </canvas>
        </div>
    );
}

export default Drawing;
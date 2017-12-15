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
            <div className="row">
                <div className="fb-share-button" data-href="https://drawify.herokuapp.com/" data-layout="button" data-size="large"      data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdrawify.herokuapp.com%2F&amp;src=sdkpreparse">Share</a>
                </div>
            
            </div>
        </div>
    );
}

export default Drawing;
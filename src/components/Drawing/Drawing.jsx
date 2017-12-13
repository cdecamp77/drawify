import React from 'react';

const Drawing = (props) => (
    <div className="row">
        <div className="literally"><canvas onMouseUp={props.handleMouseUp}  onMouseDown={props.handleMouseDown} onMouseMove={props.handleMouseMove}width="500" id="photo" height="300" className="output"> 
        </canvas></div>
        {/* <div className="fb-share-button" data-href="" data-layout="button_count" data-size="large" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="document.getElementById('photo')"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div> */}
    </div>
);

export default Drawing;
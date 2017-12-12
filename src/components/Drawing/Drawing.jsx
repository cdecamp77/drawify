import React from 'react';

const Drawing = (props) => (
    <div className="row">
    <canvas id="photo" className="output">
        {/* <img id="photo" alt="Your photo" /> */}
    </canvas>
        <a id="saveButton" onClick={props.handleSaveClick}>Save Photo</a>
    </div>
);

export default Drawing;
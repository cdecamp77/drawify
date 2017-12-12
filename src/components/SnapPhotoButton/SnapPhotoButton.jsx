import React from 'react';

const SnapPhotoButton = (props) => {

    return (
        <div className="row">
            <a id="startButton" onClick={props.handleStartClick} width="500" height="300" className="booth-capture-button s12"><i className="medium material-icons">add_a_photo</i></a>
        </div>
    );
}

export default SnapPhotoButton;
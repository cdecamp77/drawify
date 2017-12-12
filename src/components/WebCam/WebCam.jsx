import React from 'react';
import SnapPhotoButton from '../SnapPhotoButton/SnapPhotoButton';

const WebCam = (props) => {
    
    return (
        <div className="row">
            <video  className="s12" id="video" width="500" height="300"></video>
            <SnapPhotoButton handleStartClick={props.handleStartClick} />
        </div>
    );
}

export default WebCam;


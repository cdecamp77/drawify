import React from 'react';
import './WebCam.css';
import SnapPhotoButton from '../SnapPhotoButton/SnapPhotoButton';

const WebCam = (props) => {
    
    return (
        <div>
            <video  className="" id="video" width="700" height="500"></video>
            <SnapPhotoButton handleStartClick={props.handleStartClick} />
        </div>
    );
}

export default WebCam;


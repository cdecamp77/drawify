import React from 'react';
import WebCam from '../../components/WebCam/WebCam';
import ClearDrawingButton from '../../components/ClearDrawingButton/ClearDrawingButton';
import Toolbar from '../../components/Toolbar/Toolbar.jsx';
import Drawing from '../../components/Drawing/Drawing';

const PhotoBooth = (props) => {

    return (
        <div className="PhotoBooth">
            <div className="container">
                <WebCam handleStartClick={props.handleStartClick} />
                <Drawing />
                <ClearDrawingButton />
                <Toolbar />
            </div>
        </div>
    );
}

export default PhotoBooth;
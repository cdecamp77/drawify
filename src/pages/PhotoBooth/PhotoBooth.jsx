import React from 'react';
import WebCam from '../../components/WebCam/WebCam';
import ClearDrawingButton from '../../components/ClearDrawingButton/ClearDrawingButton';
import Toolbar from '../../components/Toolbar/Toolbar.jsx';
import Drawing from '../../components/Drawing/Drawing';

const PhotoBooth = (props) => {

    return (
        <div className="container">
            <div className="PhotoBooth">
                <WebCam handleStartClick={props.handleStartClick} />
                <Drawing />
                <ClearDrawingButton />
                <Toolbar 
                color={props.background}
                onChangeComplete={props.handleChangeComplete}
                />
            </div>
        </div>
    );
}

export default PhotoBooth;
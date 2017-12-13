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
                <Drawing
                handleMouseUp={props.handleMouseUp}
                handleMouseMove={props.handleMouseMove}
                handleMouseDown={props.handleMouseDown}
                redraw={props.redraw}
                addClick={props.addClick}
                />
                <ClearDrawingButton />
                <Toolbar 
                handleMouseDown={props.handleMouseDown}
                redraw={props.redraw}
                addClick={props.addClick}
                color={props.background}
                onChangeComplete={props.handleChangeComplete}
                />
            </div>
        </div>
    );
}

export default PhotoBooth;
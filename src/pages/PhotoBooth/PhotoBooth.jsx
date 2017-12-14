import React from 'react';
import WebCam from '../../components/WebCam/WebCam';
import ClearDrawingButton from '../../components/ClearDrawingButton/ClearDrawingButton';
import Toolbar from '../../components/Toolbar/Toolbar.jsx';
import Drawing from '../../components/Drawing/Drawing';
// import ColorPicker from '../../components/ColorPicker/ColorPicker';

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
                <ClearDrawingButton clearCanvas={props.clearCanvas}/>
               
                <Toolbar 
                    blue={props.blue}
                    purple={props.purple}
                    black={props.black}
                    red={props.red}
                    green={props.green}
                    selectColor={props.selectColor}
                    eraser={props.eraser}
                    handleMouseDown={props.handleMouseDown}
                    redraw={props.redraw}
                    addClick={props.addClick}
                />
            </div>
        </div>
    );
}

export default PhotoBooth;
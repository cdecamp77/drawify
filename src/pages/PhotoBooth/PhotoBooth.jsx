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
                    handleSizeSlider={props.handleSizeSlider}
                    small={props.small}
                    normal={props.normal}
                    large={props.large}
                    huge={props.huge}
                    blue={props.blue}
                    yellow={props.yellow}
                    black={props.black}
                    red={props.red}
                    green={props.green}
                    selectColor={props.selectColor}
                    eraser={props.eraser}
                    handleMouseDown={props.handleMouseDown}
                    redraw={props.redraw}
                    addClick={props.addClick}
                    val_size={props.val_size}
                />
            </div>
        </div>
    );
}

export default PhotoBooth;
import React from 'react';
import './PhotoBooth.css';
import WebCam from '../../components/WebCam/WebCam';
import Drawing from '../../components/Drawing/Drawing';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import SizePicker from '../../components/SizePicker/SizePicker';
import NavBar from '../../components/NavBar/NavBar';

const PhotoBooth = (props) => {

    return (
        <div>
            <NavBar user={props.user} handleLogout={props.handleLogout} />
        <div className="container">
            <div className="photoBooth col s12">
                <div className="row">
                    <div className="col s12">
                        <WebCam 
                            user={props.user}
                            handleLogout={props.handleLogout}
                            handleStartClick={props.handleStartClick} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                         {/* <div className="row">  */}
                        <Drawing
                            handleMouseUp={props.handleMouseUp}
                            handleMouseMove={props.handleMouseMove}
                            handleMouseDown={props.handleMouseDown}
                            redraw={props.redraw}
                            addClick={props.addClick}
                        />
                        {/* </div> */}
                    </div>
                    <div className="col s3 offset-s2">
                        <div className="row">
                        <ColorPicker
                            blue={props.blue}
                            white={props.white}
                            yellow={props.yellow}
                            black={props.black}
                            red={props.red}
                            green={props.green}
                            selectColor={props.selectColor}
                            addClick={props.addClick}
                            color={props.curColor}
                            handleChangeComplete={props.handleChangeComplete}
                        />
                        </div>
                    </div>
                    <div className="col s3 offset-s2">
                        <div className="row">
                        <SizePicker
                            val_size={props.val_size}
                            handleSizeSlider={props.handleSizeSlider} 
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default PhotoBooth;
import React from 'react';
import './PhotoBooth.css';
import WebCam from '../../components/WebCam/WebCam';
import Drawing from '../../components/Drawing/Drawing';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import SizePicker from '../../components/SizePicker/SizePicker';
import NavBar from '../../components/NavBar/NavBar';
import {Modal, Button} from 'react-materialize'

const PhotoBooth = (props) => {

    return (
        <div>
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            <div className="row instructions">
                <Modal
	                header='So you want to start drawing?'
	                trigger={<Button>Instructions</Button>}
                >
                        <ul>
                            <li>• The web camera should be up and running, wave hello to yourself.</li>
                            <li>• When you are ready to snap a photo, click the camera icon in center of page.</li>
                            <li>• Once your picture is showing on the drawing canvas, you can begin drawing on it!</li>
                            <li>• The color choices are on the right side, along with the line thickness selector.</li>
                            <li>• If you would like to save your drawing, simply double click on the image and select "Save Image As".</li>
                        </ul>
                </Modal>
            </div>
            <div className="container">
                <div className="photoBooth">
                    <div className="row">
                        <div className="col s12">
                            <WebCam 
                                user={props.user}
                                handleLogout={props.handleLogout}
                                handleStartClick={props.handleStartClick} 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <Drawing
                                handleMouseUp={props.handleMouseUp}
                                handleMouseMove={props.handleMouseMove}
                                handleMouseDown={props.handleMouseDown}
                                redraw={props.redraw}
                                addClick={props.addClick}
                            />
                        </div>
                        <div className="col s3 offset-s2">
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
                        <div className="col s3 offset-s2">
                                <SizePicker
                                    val_size={props.val_size}
                                    handleSizeSlider={props.handleSizeSlider} 
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoBooth;
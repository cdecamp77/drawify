import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import SizePicker from '../SizePicker/SizePicker';


const Toolbar = (props) => {

    return (
        <div className="container">
            <div className="row">
                <ColorPicker
                    blue={props.blue}
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
            <div className="row">
                <SizePicker
                    val_size={props.val_size}
                    handleSizeSlider={props.handleSizeSlider} 
                    small={props.small}
                    normal={props.normal}
                    large={props.large}
                    huge={props.huge}
                />
            </div>
                    <div className="row">
                        <div id="toolButtons s12">
                            <a className="btn waves-effect waves-light s6" id="marker"><i className="small material-icons">brush</i>Brush</a>
                            <a className="btn waves-effect waves-light s6" onClick={props.eraser}><i className="small material-icons">edit</i>Eraser</a>
                        </div>
                    </div>
            </div>
    );
}

export default Toolbar;
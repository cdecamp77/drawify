import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker'


const Toolbar = (props) => {

    return (
        <div className="container">
            <div className="row">
                 <ColorPicker
                    blue={props.blue}
                    purple={props.purple}
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
                        <div id="sizeButtons s12">
                            <a className="btn waves-effect waves-light s3" id="small">SMALL</a>
                            <a className="btn waves-effect waves-light s3" id="normal">NORMAL</a>
                            <a className="btn waves-effect waves-light s3" id="large">LARGE</a>
                            <a className="btn waves-effect waves-light s3" id="huge">HUGE</a>
                        </div>
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
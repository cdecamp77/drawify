import React from 'react';
import { SliderPicker } from 'react-color';


const Toolbar = (props) => {

    return (
        <div className="container">
            <div className="row">
                <SliderPicker 
                color={props.background}
                onChangeComplete={props.onChangeComplete}
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
                            <a className="btn waves-effect waves-light s6" id="eraser"><i className="small material-icons">edit</i>Eraser</a>
                        </div>
                    </div>
            </div>
    );
}

export default Toolbar;
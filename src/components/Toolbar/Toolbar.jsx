import React from 'react';

const Toolbar = (props) => {

    return (
        <div className="container">
            <div className="row">
                        {/* <div id="clearButton">
                            <a className="btn waves-effect waves-light s12" id="clearCanvas"><i className="large material-icons">clear</i>Clear</a>
                        </div> */}
                    <div className="row">
                        <div id="colorButtons s12">
                            <a className="btn waves-effect waves-light s3" id="choosePurple" >PURPLE</a>
                            <a className="btn waves-effect waves-light s3" id="chooseGreen">GREEN</a>
                            <a className="btn waves-effect waves-light s3" id="chooseYellow">YELLOW</a>
                            <a className="btn waves-effect waves-light s3" id="chooseBrown">BROWN</a>
                        </div>
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
        </div>
    );
}

export default Toolbar;
import React from 'react';
import {Modal, Button} from 'react-materialize'

const Drawing = (props) => {
    return (
        <div>
            <canvas 
                id="photo" 
                className="output"
                onMouseUp={props.handleMouseUp}  
                onMouseDown={props.handleMouseDown} 
                onMouseMove={props.handleMouseMove}
                width="700"     
                height="500"
            >
            </canvas>
            <div className="row">
                <div className="fb-share-button" data-href="https://drawify.herokuapp.com/" data-layout="button" data-size="large"      data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdrawify.herokuapp.com%2F&amp;src=sdkpreparse">Share</a>
                </div>
            <div>
                <Modal
	                header='So you want to start drawing?'
	                trigger={<Button>Instructions</Button>}>
                        <ul>
                            <li>The web camera should be up and running, wave hello to yourself.</li>
                            <li>When you are ready to snap a photo, click the camera icon in center of page</li>
                            <li>Once your picture is showing on the drawing canvas, you can begin drawing on it!</li>
                            <li>The color choices are on the right side, along with the line thickness selector.</li>
                            <li>If you would like to save your drawing, simply double click on the image and select "Save Image As"</li>
                        </ul>
                </Modal>
            </div>
            </div>
        </div>
    );
}

export default Drawing;
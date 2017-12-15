import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {Slider, Slide} from 'react-materialize'


const Landing = (props) => {
    return (
        <div>
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            <div className="container">
                <Slider className="row">
                    <Slide
                        src="https://i.imgur.com/ion7CMf.jpg"
                        title="Welcome to Drawify">
                        Let's get to it!
                    </Slide>
                    <Slide
                        src="https://i.imgur.com/3TH5Sab.jpg"
                        title="Before we start."
                        placement="left">
                        Make sure to click "Allow" when prompted.
                    </Slide>
                    <Slide
                        src="https://i.imgur.com/8ltpnct.jpg"
                        title="Remember, have fun!"
                        placement="right">
                        Let the creativity begin!
                    </Slide>
                </Slider>
                <div id="begin-button" className="row center">
                    <a href="/photobooth" className="btn waves-light" waves="light">Let's Begin!</a>
                </div>
            </div>
        </div>
    );
};

export default Landing;
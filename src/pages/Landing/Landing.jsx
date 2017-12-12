import React from 'react';

const Landing = (props) => {
    return (
        <div className="container">
            <div className="jumbotron text-center">
                <h1><span className="fa fa-lock">Login with Facebook</span></h1>
            </div>
            <div className="s6">
                <div className="well">
                    <h3 className="text-primary"><span className="fa fa-facebook"></span>Facebook</h3>
                </div>
            </div>
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
        </div>
    );
};

export default Landing;
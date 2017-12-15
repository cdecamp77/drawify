import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import GalleryPage from '../GalleryPage/GalleryPage';
import Landing from '../Landing/Landing';
import PhotoBooth from '../PhotoBooth/PhotoBooth';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

let clickX = [];
let clickY = [];
let clickDrag = [];
let clickColor = [];
let clickSize = [];
let paint;
let radius;
let curTool = 'marker';
let curColor = 'black';
let curSize = 'normal';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            val_size: 2,
            constraints: {
                audio: false,
                video: {width: 500, height: 300}}
        };
        this.handleStartClick = this.handleStartClick.bind(this);
        this.takePicture = this.takePicture.bind(this);
    }

    // Line size range slider
    handleSizeSlider = (e) => {
       let obj = {};
       const value = e.target.value;
       obj[e.target.name] = value;
       this.setState(obj);

       if (value === "1") {
           curSize = 'small';
        } else if (value === "2") {
            curSize = 'normal';
        } else if (value === "3") {
            curSize = 'large';
        } else if (value === "4") {
            curSize = 'huge';
        }
   }


   // Color Choices
    blue = () => {
        curColor = 'blue';
    }
    
    yellow = () => {
        curColor = 'yellow';
    }
    
    black = () => {
        curColor = 'black';
    }
    
    green = () => {
        curColor = 'green';
    }
    
    red = () => {
        curColor = 'red';
    }
    
    white = () => {
        curColor = 'white';
    }
    
    // sets up the webcam
    componentDidMount() {
        // user info
        let user = userService.getUser();
        this.setState({user});

        // setting up video
        const constraints = this.state.constraints;
        const getUserMedia = (params) => (
            new Promise((successCallback, errorCallback) => {
                navigator.webkitGetUserMedia.call(navigator, params, successCallback, errorCallback);
            })
        );

        // gain access to webcam
        getUserMedia(constraints)
            .then((stream) => {
                const video = document.querySelector('video');
                const vendorURL = window.URL || window.webkitURL;
                video.src = vendorURL.createObjectURL(stream);
                video.play();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // handles the start of the webcam
    handleStartClick (event) {
        event.preventDefault();
        this.takePicture();
    }

    // snaps a picture and adds it to a canvas
    takePicture() {
        let canvas = document.querySelector('canvas');
        let context = canvas.getContext('2d');
        const video = document.querySelector('video');
        const photo = document.getElementById('photo');

        let width = canvas.width;
        let height = canvas.height;
        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    // adds the ability to draw lines
    redraw = () => {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');


        for (var i=0; i < clickX.length; i++) {
            if (clickSize[i] === 'small') {
                context.lineJoin = 'round';
                radius = 2;
            } else if (clickSize[i] === 'normal') {
                context.lineJoin = 'round';
                radius = 5;
            } else if (clickSize[i] === 'large') {
                context.lineJoin = 'round';
                radius = 10;
            } else if (clickSize[i] === 'huge') {
                context.lineJoin = 'round';
                radius = 20;
            }

            context.beginPath();
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i-1], clickY[i-1]);
            } else {
                context.moveTo(clickX[i]-1, clickY[i]);
            }
            context.lineTo(clickX[i], clickY[i]);
            context.strokeStyle = clickColor[i];
            context.lineJoin = 'round';
            context.lineWidth = radius;
            context.stroke();
            context.closePath();
        }
    }
    
    // gets the position of the mouse when clicked on the canvas
    addClick = (x, y, dragging) => {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
        if (curTool === 'eraser') {
            clickColor.push('white');
        } else {
            clickColor.push(curColor);
        }
        clickSize.push(curSize);
    }

    // handles the mouseDown functionality
    handleMouseDown = (e) => {
        let canvas = document.getElementById('photo')
        let mouseX = e.pageX - canvas.offsetLeft;
        let mouseY = e.pageY - canvas.offsetTop;
        paint = true;
        this.addClick(mouseX, mouseY, false);
        this.redraw();
    }

    // handles the mouse moving when drawing a line
    handleMouseMove = (e) => {
        let canvas = document.getElementById('photo');
        if (paint) {
            this.addClick(e.pageX - canvas.offsetLeft,
            e.pageY - canvas.offsetTop, true)
            this.redraw();
        }
    }

    // ends the dran line
    handleMouseUp = (e) => {
        paint = false;
        this.redraw();
    }

    // logout function
    handleLogout = () => {
        userService.logout();
        this.setState({user: null});
    }

    // sign up function
    handleSignup = () => {
        this.setState({user: userService.getUser()});
    }

    // login function
    handleLogin = () => {
        this.setState({user: userService.getUser()});
    }

    render() {
        return (
            <div>
                <Router>
                <Switch>
                    <Route exact path='/' render={() => 
                        <Landing 
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                        />
                    } />
                    <Route exact path='/photobooth' render={() =>
                        userService.getUser() ?
                        <PhotoBooth
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                        handleSizeSlider={this.handleSizeSlider}
                        blue={this.blue}
                        white={this.white}
                        yellow={this.yellow}
                        black={this.black}
                        red={this.red}
                        green={this.green}
                        selectColor={this.selectColor}
                        handleMouseUp={this.handleMouseUp}
                        handleMouseMove={this.handleMouseMove}
                        handleMouseDown={this.handleMouseDown}
                        redraw={this.redraw}
                        addClick={this.addClick}
                        val_size={this.state.val_size}
                        handleStartClick={this.handleStartClick} />
                        :
                        <Redirect to='/login' />
                    } />
                    
                    <Route exact path='/signup' render={(props) => 
                        <SignupPage
                            {...props}
                            handleSignup={this.handleSignup}
                        />
                    }/>
                    <Route exact path='/login' render={(props) => 
                        <LoginPage
                            {...props}
                            handleLogin={this.handleLogin}
                        />
                    }/>
                    <Route exact path='/gallery' render={() => (
                        userService.getUser() ? 
                        <GalleryPage 
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                        />
                        :
                        <Redirect to='/login' />
                    )}/>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
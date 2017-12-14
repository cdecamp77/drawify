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
let curColor = 'pink';
let curSize = 'normal';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            val_size: '',
            curColor: 'pink',
            background: '#fff',
            constraints: {
                audio: false,
                video: {width: 500, height: 300}}
        };
        this.handleStartClick = this.handleStartClick.bind(this);
        this.takePicture = this.takePicture.bind(this);
    }

    getInitialState = () => {
        return {
            curColor: '#333',
            curTool: 'marker',
            curSize: 'normal'
        }
    }

    handleSizeSlider = (e) => {
       let obj = {};
       const value = e.target.value;
       obj[e.target.name] = value;
       this.setState(obj);

       if (value === "1") {
           curSize = 'small';
            console.log(value);
        } else if (value === "2") {
            curSize = 'normal';
            console.log(value);
        } else if (value === "3") {
            curSize = 'large';
            console.log(value);
        } else if (value === "4") {
            curSize = 'huge';
            console.log(value);
        }
   }

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
    
    componentDidMount() {
        const constraints = this.state.constraints;
        const getUserMedia = (params) => (
            new Promise((successCallback, errorCallback) => {
                navigator.webkitGetUserMedia.call(navigator, params, successCallback, errorCallback);
            })
        );

        let user = userService.getUser();
        this.setState({user});

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

    handleStartClick (event) {
        event.preventDefault();
        this.takePicture();
    }

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

    redraw = () => {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');

        context.lineJoin = 'round';

        for (var i=0; i < clickX.length; i++) {
            if (clickSize[i] === 'small') {
                radius = 2;
            } else if (clickSize[i] === 'normal') {
                radius = 5;
            } else if (clickSize[i] === 'large') {
                radius = 10;
            } else if (clickSize[i] === 'huge') {
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
            context.lineWidth = radius;
            context.stroke();
            context.closePath();
        }
    }

    eraser = () => {
        curTool = 'eraser';
        if (curTool === 'eraser') {
            curColor = 'white';
            curTool = 'marker';
        } else {
            clickColor.push(curColor);
        }
        console.log('eraser');
    }
    
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

    clearCanvas = () => {
        
    }

    handleMouseDown = (e) => {
        let canvas = document.getElementById('photo')
        let mouseX = e.pageX - canvas.offsetLeft;
        let mouseY = e.pageY - canvas.offsetTop;
        paint = true;
        this.addClick(mouseX, mouseY, false);
        this.redraw();
    }

    handleMouseMove = (e) => {
        let canvas = document.getElementById('photo');
        if (paint) {
            this.addClick(e.pageX - canvas.offsetLeft,
            e.pageY - canvas.offsetTop, true)
            this.redraw();
        }
    }

    handleMouseUp = (e) => {
        paint = false;
        this.redraw();
    }

    handleLogout = () => {
        userService.logout();
        this.setState({user: null});
    }

    handleSignup = () => {
        this.setState({user: userService.getUser()});
    }

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
                        handleSizeSlider={this.handleSizeSlider}
                        blue={this.blue}
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
                        <GalleryPage />
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
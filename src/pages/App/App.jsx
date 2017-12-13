import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import GalleryPage from '../GalleryPage/GalleryPage';
import Landing from '../Landing/Landing';
import PhotoBooth from '../PhotoBooth/PhotoBooth';

let clickX = [];
let clickY = [];
let clickDrag = [];
let clickColor = [];
let clickSize = [];
let paint;
let radius;
let curTool = 'marker';
let curColor = '#fff';
let curSize = 'normal';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            constraints: {
            background: '#fff',
                audio: false,
                video: {width: 500, height: 300}}
        };
        this.handleStartClick = this.handleStartClick.bind(this);
        this.takePicture = this.takePicture.bind(this);
    }
    
    componentDidMount() {
        const constraints = this.state.constraints;
        const getUserMedia = (params) => (
            new Promise((successCallback, errorCallback) => {
                navigator.webkitGetUserMedia.call(navigator, params, successCallback, errorCallback);
            })
        );

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

    handleChangeComplete = (color) => {
        this.setState({background: color.hex });
    };

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
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = radius;
        context.stroke();
        }
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

    handleMouseUp= (e) => {
        paint = false;
        this.redraw();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => 
                        <Landing />
                    } />
                    <Route exact path='/photobooth' render={() =>
                        <PhotoBooth
                        handleMouseUp={this.handleMouseUp}
                        handleMouseMove={this.handleMouseMove}
                        handleMouseDown={this.handleMouseDown}
                        redraw={this.redraw}
                        addClick={this.addClick}
                        color={this.state.background}
                        onChangeComplete={this.handleChangeComplete}
                        handleStartClick={this.handleStartClick} />
                    } />
                    <Route exact path='/gallery' render={() =>
                        <GalleryPage />
                    } />
                </Switch>
            </div>
        )
    }
}

export default App;
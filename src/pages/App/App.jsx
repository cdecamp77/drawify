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
   
//    showActions(){
//       return(
//         <div className="action -bar"> 
//             <input type="range" min="0" max="4" name='val_size' value={this.state.val_size} onChange={(e) => {this.handleChange(e)}}/>  
//         </div>
//       )
//    }


    // const slider = document.getElementById("myRange");
    // const output = document.querySelector("span.value");
    // output.innerHTML = slider.value;

    // slider.oninput = function() {
    //     output.innerHTML = this.value;
    //     
    // }
    

    small = () => {
        curSize = 'small';
    }    
    
    normal = () => {
        curSize = 'normal';
    }    
    
    large = () => {
        curSize = 'large';
    }    
    
    huge = () => {
        curSize = 'huge';
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

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => 
                        <Landing />
                    } />
                    <Route exact path='/photobooth' render={() =>
                        <PhotoBooth
                        handleSizeSlider={this.handleSizeSlider}
                        small={this.small}
                        normal={this.normal}
                        large={this.large}
                        huge={this.huge}
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
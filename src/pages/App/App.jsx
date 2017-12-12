import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import GalleryPage from '../GalleryPage/GalleryPage';
import Landing from '../Landing/Landing';
import PhotoBooth from '../PhotoBooth/PhotoBooth';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            background: '#fff',
            constraints: {
                audio: false,
                video: {width: 500, height: 300}}
        };
        this.handleStartClick = this.handleStartClick.bind(this);
        this.takePicture = this.takePicture.bind(this);
        // this.clearPhoto = this.clearPhoto.bind(this);
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

        // clearPhoto();
    }

    // clearPhoto() {
    //     const canvas = document.querySelector('canvas');
    //     const photo = document.getElementById('photo');
    //     const context = canvas.getContext('2d');
    //     const { width, height } = this.state.contraints.video;
    //     context.fillStyle = '#FFF';
    //     context.fillRect(0,0,width, height);

    //     const data = canvas.toDataURL('image/png');
    //     photo.setAttribute('src', data);
    // }

    handleStartClick (event) {
        event.preventDefault();
        this.takePicture();
    }

    takePicture() {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
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

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => 
                        <Landing />
                    } />
                    <Route exact path='/photobooth' render={() =>
                        <PhotoBooth 
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
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import GalleryPage from '../GalleryPage/GalleryPage';
import WebCamPage from '../WebCamPage/WebCamPage';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = Object.assign(
            this.getInitialState()
        );
    }

    getInitialState() {
        return {
            curColor: "#ddd",
            curTool: "marker",
            curSize: "normal"
        };
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => 
                        <WebCamPage />
                    } />
                    <Route exact path='/images' render={() =>
                        <GalleryPage />
                    } />
                </Switch>
            </div>
        )
    }
}

export default App;
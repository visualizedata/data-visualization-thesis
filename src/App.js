import React, { Component } from 'react';
import ReactDOM from "react-dom";
import * as d3 from 'd3';
import _ from 'lodash';

//components
import Timeline from './vizComponents/Timeline'

import './css/style.css';
import plutoData from './assets/data/output';
import landUseMapping from './assets/data/landUseMapping';

var width = window.innerWidth * .8;
var height = window.innerHeight * .8;
var margin = {left: 100, right: 20, top: 100, bottom: 20};

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            buildings: [],
            landUseMapping: {}
        };
    }

    componentWillMount(){
        // process data
        let buildings = plutoData;
        this.setState({buildings, landUseMapping});
    }

    componentDidMount(){
        // console.log(this.state.buildings);
    }

    render() {
        var props = {
            width, height, margin
        };

        return (
            <div id='container'>
                <h2>Testing out React and D3</h2>
                <Timeline {...props} {...this.state}/>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
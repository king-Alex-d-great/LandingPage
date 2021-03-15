import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import {LandingPage} from './PressPlayLandingPage/index';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
<BrowserRouter><LandingPage /></BrowserRouter>, document.getElementById('root'));
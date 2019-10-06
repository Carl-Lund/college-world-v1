import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from "./components/App/App";
import College from "./components/College/College";
import Students from "./components/Students/Students";
import Sports from "./components/Sports/Sports";
import Objectives from "./components/Objectives/Objectives";
import Faculty from "./components/Faculty/Faculty";
import Store from "./components/Store/Store";
//import Buildings from "./components/Buildings/Faculty";
ReactDOM.render(<App />, document.getElementById('root'));
/*ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/college" component={College} />
        <Route path="/students" component={Students} />
        <Route path="/sports" component={Sports} />
        <Route path="/objectives" component={Objectives} />
        <Route path="/faculty" component={Faculty} />
        <Route path="/store" component={Store} />
    </Router>,
    document.getElementById('root'));*/


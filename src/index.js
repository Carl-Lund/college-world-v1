import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from "./components/App/App";
ReactDOM.render(<App />, document.getElementById('root'));

// import College from "./components/college-view/college-view";
// import Students from "./components/students-view/students-view";
//
// ReactDOM.render(<College />, document.getElementById('root'));
// ReactDOM.render(<Students />, document.getElementById('root'));

// Original default app code that react created.
// Leaving this in case we need to reference it.
//
//import App from './App';
//import * as serviceWorker from './serviceWorker';
// class Navigation extends React.Component {
//     render() {
//         return <h2>This is the navigation bar</h2>;
//     }
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

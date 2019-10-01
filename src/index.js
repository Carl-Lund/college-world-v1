import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navbar from './components/Navbar.js';
import ViewCollege from "./components/ViewCollege";
//import * as serviceWorker from './serviceWorker';
// class Navbar extends React.Component {
//     render() {
//         return <h2>This is the navigation bar</h2>;
//     }
// }
ReactDOM.render(<ViewCollege />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

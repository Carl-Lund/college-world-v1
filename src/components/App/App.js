import React from 'react';
//import logo from '../../assets/images/logo.svg';
// import './App.css';
import College from "../College/College";
import Students from "../Students/Students";
import Sports from "../Sports/Sports";
import Objectives from "../Objectives/Objectives";

export default class App extends React.Component {

  render () {
      return(
    <div className="App">
      <header className="App-header">
        <College />
        <Students />
        <Objectives />

          {/*  Original default app code...
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Link
        </a>

        <img src={logo} className="App-logo" alt="logo" />*/}

      </header>
    </div>
      );
  }
}


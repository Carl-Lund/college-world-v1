import React from 'react';
//import logo from '../../assets/images/logo.svg';
// import './App.css';
import College from "../College/College";
import Students from "../Students/Students";
import Sports from "../Sports/Sports";
import Faculty from "../Faculty/Faculty";
import Objectives from "../Objectives/Objectives";
import Store from "../Store/Store";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            everything: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/everything/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ isLoading:false, everything: data });
                console.log("Fetched college data " + data)
            });
    }

    render() {
        const { isLoading, everything} = this.state;
        if (isLoading || !everything ) {
            return <p>Loading...</p>;
        }
        return (

            <div className="App">
                <header className="App-header">
                    <h2></h2>
                    <College everything={everything} />
                    <Store everything={everything} />
                    <Students everything={everything}/>
                    <Objectives everything={everything}/>
                    <Sports everything={everything} />
                    <Faculty everything={everything} />
                </header>
            </div>
        );
    }
}


import React from 'react';
//import logo from '../../assets/images/logo.svg';
// import './App.css';
import College from "../College/College";
import Students from "../Students/Students";
import Sports from "../Sports/Sports";
import Navigation from "../Navigation/Navigation";


export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/store/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ data });
                console.log("Fetched item data " + this.state.data)
            });
    }

    render() {
        return (
            <div>
                <h2>Start of college view...</h2>
                <Navigation />
                {this.state.data && (
                    <h2>Item name = {this.state.data[0].name}</h2>
                )
                }
                {this.state.data && (
                    <h2>Description = {this.state.data[0].description}</h2>
                )
                }
            </div>
        );
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
}

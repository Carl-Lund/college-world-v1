import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Objectives extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/gates/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ data });
                console.log("Fetched objectives/gates data " + data)
            });
    }

    render(){
        return (
            <div>
                <h2>Start of objectives view...</h2>
                <Navigation />
                {this.state.data && (
                    <h2>Your current level is {this.state.data.level}</h2>
                )}
            </div>
        )


    }
}
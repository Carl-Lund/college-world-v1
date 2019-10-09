import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Buildings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/building/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ data });
                console.log("Fetched building data " + data)
            });
    }
    render() {
        return (
            <div>
                <h2>Start of buildings view</h2>
                {this.state.data && (
                    <h3>Building Name: {this.state.data[0].name}</h3>
                )
                }
                {this.state.data && (
                    <h3>Building Type: {this.state.data[0].kindOfBuilding}</h3>
                )
                }
            </div>
        )
    }
}
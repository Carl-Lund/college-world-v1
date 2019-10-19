import React from 'react';
import Select from "react-select";

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/{this.props.everything.college.runId}/nextDay')
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data)});
    }

    render() {
        return (
            <div className="container">
                <h3>Day {((this.props.everything.college.hoursAlive - 1) / 24 + 1)}</h3>
                <button onClick={this.fetchData()}>Next Day</button>
            </div>
        );
    }
}
import React from 'react';
import Select from "react-select";

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/college/' + this.props.everything.college.runId + '/nextDay';
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data)});
    }

    render() {
        return (
            <div>
                <h4 class="white">Day {((this.props.everything.college.hoursAlive - 1) / 24 + 1)}</h4>
                <button class="btn" onClick={this.fetchData}>Next Day</button>
            </div>
        );
    }
}
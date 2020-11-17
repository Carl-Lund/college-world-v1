import React from 'react';
import Select from "react-select";

export default class CurrentDay extends React.Component {
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
            <div className="container">
                <h2>Week {((this.props.everything.college.hoursAlive - 1) / 24 / 7 + 1)}</h2>
            </div>
        );
    }
}
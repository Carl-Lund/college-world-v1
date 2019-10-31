import React from 'react';
import Select from "react-select";

export default class CurrentBalance extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/college/' + this.props.everything.college.runId;
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data)});
    }

    render() {
        return (
            <div className="container">
                <h2>${((this.props.everything.college.availableCash))}</h2>
            </div>
        );
    }
}
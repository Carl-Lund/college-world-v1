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

    pauseUnpause() {
        this.props.everything.college.isTimePaused = !(this.props.everything.college.isTimePaused);
        this.props.replaceEverything(this.props.everything);
    }

    render() {
        return (
            <div className="container">
                <h4>Day {((this.props.everything.college.hoursAlive - 1) / 24 + 1)}</h4>
                <div id="day-timer" className="progress" style={{width: '30%'}}>
                    <div className="progress-bar progress-bar-striped active" role="progressbar"
                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                        7 / 24 Hours
                    </div>
                </div>
                <button onClick={this.props.pauseUnpause}>Pause Time</button>
            </div>
        );
    }
}
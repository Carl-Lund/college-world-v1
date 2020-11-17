import React from 'react';
import Select from "react-select";

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.playPressed = this.playPressed.bind(this);
        this.pausePressed = this.pausePressed.bind(this);
        this.ffPressed = this.ffPressed.bind(this);
    }

    fetchData() {
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/college/' + this.props.everything.college.runId + '/nextDay';
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data)});
    }

    componentDidMount() {
        document.getElementById("playButton").disabled = true;
    }

    playPressed() {
        document.getElementById("playButton").disabled = true;
        document.getElementById("pauseButton").disabled = false;
        document.getElementById("ffButton").disabled = false;
        this.props.changeTimeFunction(0);
    }

    pausePressed() {
        document.getElementById("playButton").disabled = false;
        document.getElementById("pauseButton").disabled = true;
        document.getElementById("ffButton").disabled = false;
        this.props.changeTimeFunction(1);
    }

    ffPressed() {
        document.getElementById("playButton").disabled = false;
        document.getElementById("pauseButton").disabled = false;
        document.getElementById("ffButton").disabled = true;
        this.props.changeTimeFunction(2);
    }

    render() {
        return (
            <div className="container">
                <h4>Week {Math.round((this.props.everything.college.hoursAlive - 1) / 24 / 7 + 1)}</h4>

                <button className="btn btn-default" id="playButton" onClick={this.playPressed}><span class="sr-only">Play</span><img src="https://image.flaticon.com/icons/svg/27/27223.svg" height="15" width="15"/></button>&nbsp;
                <button className="btn btn-default" id="pauseButton" onClick={this.pausePressed}><span className="sr-only">Pause</span><img src="https://image.flaticon.com/icons/svg/151/151859.svg" height="15" width="15"/></button>&nbsp;
                <button className="btn btn-default" id="ffButton" onClick={this.ffPressed}><span className="sr-only">Fast Forward</span><img src="https://image.flaticon.com/icons/svg/254/254422.svg" height="15" width="15"/></button>&nbsp;
                <button className="btn btn-default" id="nextWeekButton"onClick={this.fetchData}>Next {this.props.everything.college.timeAdvanceBy}</button>
            </div>
        );
    }

}
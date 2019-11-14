import React from 'react';
import Day from "../Day/Day";
import Tuition from "../College/Tuition";
import PlayMode from "../College/PlayMode";

export default class CurrentLevel extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

        return (
            <div className="container dash-banner">
                <div className="row">
                    <div className="col-sm-9">
                        <h1>{this.props.everything.college.runId}</h1>
                        <h3>Level {this.props.everything.objectives.currentLevel} {this.props.everything.objectives.studentCount}/
                            {this.props.everything.objectives.studentCount +
                            this.props.everything.objectives.studentsNeededForNextLevel}</h3>
                    </div>
                    <div className="col-sm-3">
                        <h5>{this.props.everything.college.numberStudentsAdmitted} Students</h5>
                        <h5>{this.props.everything.college.studentFacultyRatioRating} Student to Faculty Ratio</h5>
                        <h5>{this.props.everything.college.numberStudentsAccepted} Students Considering</h5>
                    </div>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70"
                         aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="fake-navbar text-center">
                            FAKE NAV BAR
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="fake-tickertape text-center">
                            FAKE NEWS BAR
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 no-padding">
                        <img src="resources/images/homepage-banner.png"></img>
                        <div className="balance">
                            <h4>Balance</h4>
                            <h4>${this.props.everything.college.availableCash}</h4>
                            <Day everything={this.props.everything} changeTimeFunction = {this.props.changeTimeFunction } replaceEverything={this.props.replaceEverything}/>
                        </div>

                        <Tuition everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                        <PlayMode everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        );
    }
}
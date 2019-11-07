import React from 'react';
import Day from "../Day/Day";

export default class CurrentLevel extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

        return (
            <div className="container dash-banner">
                <div class="row">
                    <div class="col-sm-9">
                        <h2>{this.props.everything.college.runId}</h2>
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
                        <h4>Balance</h4>
                        <h4>${this.props.everything.college.availableCash}</h4>
                        <Day everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <img src="resources/images/homepage-banner.png"></img>
                    </div>
                </div>
            </div>
        );
    }
}
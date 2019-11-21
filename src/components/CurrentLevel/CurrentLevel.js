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
            <div className="container">
                <div className="row m-2">
                    <div className="col-sm text-center topbar">
                        <img className="topbar-icon" src="resources/images/college_world_icons/dollar_character.png"></img>
                        <div className="topbar-text">
                            <h4><strong>{this.props.everything.college.availableCash}</strong></h4>
                            <h6>Total Balance</h6>
                        </div>
                    </div>
                    <div className="col-sm text-center topbar">
                        <img className="topbar-icon" src="resources/images/college_world_icons/current_date.png"></img>
                        <div className="topbar-text">
                            <h4><strong>Sept 13</strong></h4>
                            <h6>Current Date</h6>
                        </div>
                    </div>
                    <div className="col-sm text-center topbar">
                        <img className="topbar-icon" src="resources/images/college_world_icons/total_students.png"></img>
                        <div className="topbar-text">
                            <h4><strong>{this.props.everything.college.numberStudentsAdmitted}</strong></h4>
                            <h6>Total Students</h6>
                        </div>
                    </div>
                    <div className="col-sm text-center topbar">
                        <img className="topbar-icon" src="resources/images/college_world_icons/percentage.png"></img>
                        <div className="topbar-text">
                            <h4><strong>{this.props.everything.college.studentFacultyRatioRating}</strong></h4>
                            <h6>Student/Faculty Ratio</h6>
                        </div>
                    </div>
                    <div className="col-sm text-center topbar" id="last-bar">
                        <img className="topbar-icon" src="resources/images/college_world_icons/question_mark.png"></img>
                        <div className="topbar-text">
                            <h4><strong>{this.props.everything.college.numberStudentsAccepted}</strong></h4>
                            <h6>Students Considering</h6>
                        </div>
                    </div>
                </div>


                <div className="card-deck">
                        <div className="card card-body col-sm-6">
                            <h1 className="card-title">{this.props.everything.college.runId}</h1>
                            <h3>Level {this.props.everything.objectives.currentLevel} {this.props.everything.objectives.studentCount}/
                                {this.props.everything.objectives.studentCount +
                                this.props.everything.objectives.studentsNeededForNextLevel}</h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar"
                                     // this.props.everything.objectives.studentCount / this.props.everything.objectives.studentsNeededForNextLevel * 100
                                     aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                </div>
                            </div>
                        </div>

                        <div className="card card-body col-sm-6">
                            <Tuition everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                            <Day everything={this.props.everything} changeTimeFunction = {this.props.changeTimeFunction } replaceEverything={this.props.replaceEverything}/>
                        </div>
                </div>
            </div>
        );
    }
}
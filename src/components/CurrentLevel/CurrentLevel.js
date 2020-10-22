import React from 'react';
import Day from "../Day/Day";
import Tuition from "../College/Tuition";
import ProgressBar from 'react-bootstrap/ProgressBar'
import PlayMode from "../College/PlayMode";
export default class CurrentLevel extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }
        let maxStudents = this.props.everything.objectives.studentCount + this.props.everything.objectives.studentsNeededForNextLevel;

        let cashColor = "black";
        if(this.props.everything.college.availableCash <= 20000){
            cashColor = "red";
        }

        return (
            <div className="container">
                <div className="row m-2">
                    <div className="col-sm text-center topbar navbar navbar-default navbar-fixed-top">
                        <img className="topbar-icon" src="resources/images/college_world_icons/dollar_character.png"></img>
                        <div className="topbar-text">
                            <h4><strong style={{color:cashColor}}>{this.props.everything.college.availableCash.toLocaleString()}</strong></h4>
                            <h6>Total Balance</h6>
                        </div>
                    </div>
                    {/*<div className="col-sm text-center topbar">*/}
                    {/*    <img className="topbar-icon" src="resources/images/college_world_icons/current_date.png"></img>*/}
                    {/*    <div className="topbar-text">*/}
                    {/*        <h4><strong>{this.props.everything.college.currentDate}</strong></h4>*/}
                    {/*        <h6>Current Date</h6>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
                                {this.props.everything.objectives.studentsNeededForLevel[this.props.everything.objectives.currentLevel + 1]}</h3>
                            <ProgressBar now={this.props.everything.objectives.studentCount} max={this.props.everything.objectives.studentsNeededForLevel[this.props.everything.objectives.currentLevel + 1]}/>
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
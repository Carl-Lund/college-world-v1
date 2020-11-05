import React from 'react';
import CurrentLevel from "../CurrentLevel/CurrentLevel";
import CurrentObjectives from "./CurrentObjectives";
import CompletedObjectives from "./CompletedObjectives";
import "./Objectives.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Achievements from "./Achievements";
/*import OptionalObjectives from "./OptionalObjectives";*/

export default class Objectives extends React.Component {

    render(){
        return (
            <div class="Objectives-list">
                <div className="title">
                    <h1 className="banner">Objectives and Achievements</h1>
                </div>
                <div className="name">
                    <h1 className="card-title">{this.props.everything.college.runId}</h1>
                    <h3>Level {this.props.everything.objectives.currentLevel} {this.props.everything.objectives.studentCount}/
                        {this.props.everything.objectives.studentsNeededForLevel[this.props.everything.objectives.currentLevel + 1]}</h3>
                    <ProgressBar now={this.props.everything.objectives.studentCount} max={this.props.everything.objectives.studentsNeededForLevel[this.props.everything.objectives.currentLevel + 1]}/>
                </div>
                <div className="achievements">
                    <h3 className="my-3"> Locked Achievements: </h3>
                    <Achievements everything={this.props.everything}/>
                </div>
                <div className="curr-obj">
                    <h3 className="my-3"> Current Objectives: </h3>
                    <CurrentObjectives everything={this.props.everything}/>
                </div>
                {/*<div className="opt-obj">
                    <h3 className="my-3"> Optional Tasks: </h3>
                    <OptionalObjectives everything={this.props.everything}/>
                </div>*/}
            </div>
        )
    }
}
import React from 'react';
import CurrentObjectives from "./CurrentObjectives";
import "./Objectives.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Achievements from "./Achievements";
import CompletedAchievements from "./CompletedAchievements";

export default class Objectives extends React.Component {

    render(){
        return (
            <div class="Objectives-list">
                <div className="name">
                    <h1 className="card-title">{this.props.everything.college.runId}</h1>
                    <h3>Level {this.props.everything.objectives.currentLevel}</h3>
                    <h3>{this.props.everything.objectives.studentCount} Students / {this.props.everything.objectives.studentsNeededForLevel[this.props.everything.objectives.currentLevel + 1]} Students Needed to Level Up</h3>
                    <ProgressBar now={this.props.everything.objectives.studentCount} max={this.props.everything.objectives.studentsNeededForLevel[this.props.everything.objectives.currentLevel + 1]}/>
                </div>
                <div className="achievements">
                    <h3 className="my-3"> Locked Achievements: </h3>
                    <Achievements everything={this.props.everything}/>
                </div>
                <div className="completed-achievements">
                    <h3 className="my-3"> Unlocked Achievements: </h3>
                    <CompletedAchievements everything={this.props.everything}/>
                </div>
                <div className="curr-obj">
                    <h3 className="my-3"> Current Objectives: </h3>
                    <CurrentObjectives everything={this.props.everything}/>
                </div>
            </div>
        )
    }
}
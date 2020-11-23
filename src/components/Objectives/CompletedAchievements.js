import React from 'react';
import CompletedAchievementsTable from "./CompletedAchievementsTable";
import "./Objectives.css";

export default class CompletedAchievements extends React.Component {

    render() {
        return (
            <div className="well well-sm">
                <div className="Achievements">
                    <CompletedAchievementsTable everything = {this.props.everything} replaceEverything={this.props.replaceEverything}/>
                </div>
            </div>
        );
    }
}
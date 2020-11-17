import React from 'react';
import CompletedAchievementsTable from "./CompletedAchievementsTable";
import "./Objectives.css";

export default class CompletedAchievements extends React.Component {

    render() {
        console.log(this.props.everything);
        return (
            <div className="well well-sm">
                <div className="Achievements">
                    <CompletedAchievementsTable everything = {this.props.everything}/>
                </div>
            </div>
        );
    }
}
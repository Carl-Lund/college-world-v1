import React from 'react';
import AchievementsTable from "./AchievementsTable";
import "./Objectives.css";

export default class Achievements extends React.Component {

    render() {
        return (
            <div className="well well-sm">
                <div className="Achievements">
                    <AchievementsTable everything = {this.props.everything} replaceEverything={this.props.replaceEverything}/>
                </div>
            </div>
        );
    }
}
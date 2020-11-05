import React from 'react';
import AchievementsTable from "./AchievementsTable";
import "./Objectives.css";

export default class Achievements extends React.Component {

    render() {
        console.log(this.props.everything);
        return (
            <div className="well well-sm">
                <div className="Achievements">
                    <AchievementsTable everything = {this.props.everything}/>
                </div>
            </div>
        );
    }
}
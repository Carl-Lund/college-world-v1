import React from 'react';
import CurrentObjectivesTable from "./CurrentObjectivesTable";
import "./Objectives.css";

export default class CurrentObjectives extends React.Component {

    render() {
        console.log(this.props.everything);
        return (
            <div className="well well-sm">
                <div className="gateList">
                    <CurrentObjectivesTable everything = {this.props.everything}/>
                </div>
            </div>
        );
    }
}
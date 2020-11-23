import React from 'react';
import CompletedObjectivesTable from "./CompletedObjectivesTable";
import "./Objectives.css";

export default class CurrentObjectives extends React.Component {

    render() {
        return (
            <div className="well well-sm">
                <div className="gateList">
                    <CompletedObjectivesTable everything = {this.props.everything}/>
                </div>
            </div>
        );
    }
}
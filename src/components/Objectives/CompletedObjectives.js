import React from 'react';
import CompletedObjectivesTable from "./CompletedObjectivesTable";
import "./Objectives.css";

export default class CompletedObjectives extends React.Component {

    render() {
        console.log(this.props.everything);
        return (
            <div className="well well-sm">
                <div className="gateList">
                    <CompletedObjectivesTable everything = {this.props.everything}/>
                </div>
            </div>
        );
    }
}
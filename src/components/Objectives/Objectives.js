import React from 'react';
import CurrentLevel from "../CurrentLevel/CurrentLevel";
import CurrentObjectives from "./CurrentObjectives";
import CompletedObjectives from "./CompletedObjectives";
import "./Objectives.css";

export default class Objectives extends React.Component {

    render(){
        return (
            <div class="Objectives-list">
                <CurrentLevel everything={this.props.everything}/>
                <h3> Current Objectives: </h3>
                <CurrentObjectives everything={this.props.everything}/>
                <h3> Completed Objectives: </h3>
                <CompletedObjectives everything={this.props.everything}/>
            </div>

        )
    }
}
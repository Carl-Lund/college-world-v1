import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Objectives extends React.Component {

    render(){
        return (
            <div>
                <h2>Start of objectives view...</h2>
                <Navigation />
                {this.props.everything.objectives && (
                    <h2>Your current level is {this.props.everything.objectives[0].level}</h2>
                )}
            </div>
        )

    }
}
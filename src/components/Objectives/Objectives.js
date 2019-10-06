import React from 'react';

export default class Objectives extends React.Component {

    render(){
        return (
            <div>
                {this.props.everything.objectives && (
                    <h2>Your current level is {this.props.everything.objectives.currentLevel}</h2>
                )}
            </div>
        )

    }
}
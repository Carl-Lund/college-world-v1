import React from 'react';

export default class Objectives extends React.Component {

    render(){
        return (
            <div>
                {this.props.everything.objectives && (
                    <h2>Your current level is {this.props.everything.objectives[0].level}</h2>
                )}
            </div>
        )

    }
}
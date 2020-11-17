import React from 'react';
import "./Objectives.css";

export default class AchievementsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="pre-scrollable" style={{maxHeight: '150px'}}>
                <ul className="list-group">
                    {createTable(this.props.everything.objectives.achievements)}
                </ul>
            </div>
        );
    }
}

function createTable(achievements) {
    let table=[];

    for(let i =0; i < achievements.length; i++) {
        if(achievements[i].locked == true) {
            table.push(<li className="list-group-item">
                    <p>{achievements[i].name}</p>
                    <p>{"Reward: $" + achievements[i].cashReward}</p>
                    <p>{achievements[i].description}</p>
                </li>
            );
        }
    }
    return table
}
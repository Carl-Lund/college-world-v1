import React from 'react';
import "./Objectives.css";

export default class CompletedAchievementsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="pre-scrollable" style={{maxHeight: '250px'}}>
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
        if(achievements[i].locked == true) continue;
            table.push(<li className="list-group-item">
                    <p>{achievements[i].name}</p>
                    <div className="col-md-2" style={{height: '100px'}}>
                        <img className="img-responsive" src={achievements[i].iconPath}/>
                    </div>
                </li>
            );
    }
    return table
}
import React from 'react';
import "./Objectives.css";

export default class CurrentObjectivesTable extends React.Component {
    constructor(props) {
        super(props);
        this.currentObjectivesTable = createTable(this.props.everything.objectives);
    }

    render(){
        return(
            <div className="pre-scrollable" style={{maxheight: '750px'}}>
                <ul className="list-group">
                    {this.currentObjectivesTable}
                </ul>
            </div>
        );
    }
}

function createTable(data) {
    let table=[];

    for(let i =1; i <=5; i++) {
        if (i <= data.currentLevel) continue;
        table.push(<h3>Level {i}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.studentsNeededForLevel[i]} Students</h3>);
    }
    return table
}
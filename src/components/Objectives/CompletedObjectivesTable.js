import React from 'react';
import "./Objectives.css";

export default class CompletedObjectivesTable extends React.Component {
    constructor(props) {
        super(props);
        this.completedObjectivesTable = createTable(this.props.everything.objectives);
    }

    render(){
        return(
            <div className="pre-scrollable">
                <ul className="list-group">
                    {this.completedObjectivesTable}
                </ul>
            </div>
        );
    }
}

function createTable(data) {
    let table=[];

    for(let i =1; i <=5; i++) {
        if (i <= data.currentLevel) continue;
        table.push(<h3>Level {i}     {data.studentsNeededForLevel[i]} Students</h3>);
    }

}
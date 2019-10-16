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

        for(let j =0; j<=data.gates.length; j++) {
            if (data.gates[j].level == i) {
                table.push(<li className="list-group-item">
                    <div className="col-md-2" style={{width: '100px'}}>
                        <img className="img-responsive" style="" src="data.gates[j].iconPath"/>
                    </div>
                    <h4><strong>data.gates[j].key</strong></h4>
                    <p>data.gates[j].description</p>
                    </li>
                    );
            }
        }
    }
    return table
}
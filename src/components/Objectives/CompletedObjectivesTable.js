import React from 'react';
import "./Objectives.css";

export default class CompletedObjectivesTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="pre-scrollable" style={{maxheight: '750px'}}>
                <ul className="list-group">
                    {createTable(this.props.everything.objectives)}
                </ul>
            </div>
        );
    }
}

function createTable(objectives) {
    let table=[];

    for(let i =1; i <=5; i++) {
        if (i >= objectives.currentLevel) continue;

        for(let j =0; j< objectives.gates.length; j++) {
            if (objectives.gates[j].level == i) {
                table.push(<li className="list-group-item">
                        <div className="col-md-2" style={{width: '100px'}}>
                            <img className="img-responsive" src={objectives.gates[j].iconPath}/>
                        </div>
                        <h4><strong>{objectives.gates[j].key}</strong></h4>
                    <p>{objectives.gates[j].description}<br></br></p>
                    <h1>Completed!&nbsp;<span className="glyphicon glyphicon-ok"></span></h1>
                    </li>
                );
            }
        }
    }
    return table
}
import React from 'react';
import '../Faculty/Faculty.css';
import FacultyMember from "./FacultyMember";

export default class FacultyTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            facultyTable: createTable(this.props.everything.faculty, this.props)
        }

    }

    render() {
        return(
                <div className="well well-sm text-center">
                    <h3 className="facultyH3">Faculty Members</h3>
                    <div className="pre-scrollable">
                        <ul className="list-group">
                            {this.state.facultyTable}
                        </ul>
                    </div>
                </div>
        );
    }
}

function createTable(faculty, props){
    let table = [];

    if (faculty === null || faculty === null)
        return table;

    for(let i = 0; i < faculty.length; i++){
        table.push(handleMember(faculty, i, props))
    }

    return table;
}

function handleMember(facultyArray, index, props){
    return(
        <li class = "list-group-item" onClick = {() => props.facultySwitch(index)}>
            <b class = "facultyName">{facultyArray[index].facultyName}</b>
        </li>
    );
}
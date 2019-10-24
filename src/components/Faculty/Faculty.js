import React from 'react';
import '../Faculty/Faculty.css';
import {Link} from "react-router-dom";
import FacultyMember from "./FacultyMember";

export default class Faculty extends React.Component{
    constructor(props){
        super(props);
        this.facultyTable = createTable(this.props.everything.faculty);
    }

    render() {
        const title = this.props.title
        return (
            <div>
                <div className="col-sm-6">
                    <div className="well well-sm">
                        <h3>{title}</h3>
                        <div className="pre-scrollable">
                            <ul className="list-group">
                                {this.facultyTable}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function createTable(faculty){
    let table = [];

    for(let i = 0; i < faculty.length - 1; i++){
        table.push(<FacultyMember facultyMember = {faculty[i]} facultyNumber={i}/>)
    }

    return table;
}
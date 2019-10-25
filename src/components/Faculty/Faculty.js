import React from 'react';
import '../Faculty/Faculty.css';
import {Link} from "react-router-dom";
import FacultyMember from "./FacultyMember";
import NewsItem from "../News/NewsItem";

export default class Faculty extends React.Component{
    constructor(props){
        super(props);
        this.facultyTable = createTable(this.props.everything);
    }

    render() {
        return (
            <div>
                <div className="col-sm-6">
                    <div className="well well-sm">
                        <h3>Faculty</h3>
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

function createTable(everything){
    let table = [];

    if (everything === null || everything.faculty === null)
        return table;

    for(let i = 0; i < everything.faculty.length; i++){
        table.push(<FacultyMember faculty = {everything.faculty[i]} facultyNumber={i}/>)
    }

    return table;
}
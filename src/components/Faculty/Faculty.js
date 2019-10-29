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
                <div class="jumbotron">
                    <div className="col-md-2">
                        <img className="img-responsive" src="resources/images/student.png"></img>
                    </div>
                    <h2><b>Faculty</b></h2>
                    <h3>{this.props.everything.faculty.length} faculty members</h3>
                </div>
                <div class="container">
                    <div className="well well-sm">
                        <h3>Faculty Members</h3>

                        <ul className="list-group">
                            {this.facultyTable}
                        </ul>

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
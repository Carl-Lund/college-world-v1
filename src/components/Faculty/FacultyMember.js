import React from 'react';
import '../Faculty/Faculty.css';

export default class FacultyMember extends React.Component{
    render() {
        const faculty = this.props.faculty;
        const facultyNumber = this.props.facultyNumber;
        return(
           <li class = "list-group-item" onClick = {() => this.props.facultySwitch(this.props.facultyNumber)}>
               <b class = "facultyName">{faculty.facultyName}</b>
            </li>
        );
    }
}

//<button id = "details" className="btn btn-primary" type="button" data-toggle="collapse"
//data-target = "#collapseMenu" aria-expanded="false" aria-controls="collapseExample">Details</button>
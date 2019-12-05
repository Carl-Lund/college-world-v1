import React from 'react';
import '../Faculty/Faculty.css';
import {Link} from "react-router-dom";

export default class FacultyMember extends React.Component{
    render() {
        const faculty = this.props.faculty;
        const facultyNumber = this.props.facultyNumber;

        return(
           <li class = "list-group-item text-center" onClick="handleClick(facultyNumber)">
               <b>{faculty.facultyName}</b>
            </li>
        );
    }
}

function handleClick(index) {
    const selectedItem = this.props.faculty[index];
}

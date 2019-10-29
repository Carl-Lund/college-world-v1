import React from 'react';
import {Link} from "react-router-dom";

export default class FacultyMember extends React.Component{
    render() {
        const faculty = this.props.faculty;
        const facultyNumber = this.props.facultyNumber;

        return(
           <li class = "list-group-item">
               <b class = "facultyName">{faculty.facultyName}</b>
                <button id = "details" className="btn btn-primary" type="button" data-toggle="collapse"
                        data-target = "#collapseMenu" aria-expanded="false" aria-controls="collapseExample">Details</button>

                <div class="collapse" id = "collapseMenu">
                    <div className="card card-body">
                        Title: {faculty.title}<br/>
                        Faculty ID: {faculty.facultyID}<br/>
                        Department: {faculty.departmentName}<br/>
                        Happiness: {faculty.happiness}<br/>
                        Performance: {faculty.performance}<br/>
                    </div>
                </div>

               <div class = "salary">Salary: ${faculty.salary}</div>

                <button id="raise" class="btn btn-info" name="facultyRaise + {i}">Give Raise</button>
                <button id="fire" class="btn btn-info" name="removeFaculty + {i}">Fire Faculty</button>
            </li>
        );
    }
}

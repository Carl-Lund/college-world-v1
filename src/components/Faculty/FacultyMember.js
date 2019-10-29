import React from 'react';
import {Link} from "react-router-dom";

export default class FacultyMember extends React.Component{
    render() {
        const faculty = this.props.faculty;
        const facultyNumber = this.props.facultyNumber;

        return(
           <li class = "list-group-item">
                {faculty.facultyName}
                <Link class = "btn btn-info" data-toggle = {"collapse"}>Details</Link>

                <div className="collapse">
                    <div className="well well-sm">
                        Title: {faculty.title}<br/>
                        Faculty ID: {faculty.facultyID}<br/>
                        Department: {faculty.departmentName}<br/>
                        Happiness: {faculty.happiness}<br/>
                        Performance: {faculty.performance}<br/>
                    </div>
                </div>

                Salary: ${faculty.salary}

                <Link id="raise" class="btn btn-info" name="facultyRaise + {i}">Give Raise</Link>
                <Link id="fire" class="btn btn-info" name="removeFaculty + {i}">Fire Faculty</Link>
            </li>
        );
    }
}
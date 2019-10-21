import React from 'react';
import {Link} from "react-router-dom";

export default class FacultyMember extends React.Component{
    render() {
        const facultyMember = this.props.faculty;

        return(
            <li class = "list-item">
                {facultyMember.facultyName}
                <Link class = "btn btn-info" data-toggle = {"collapse"}>Details</Link>

                <div className="collapse">
                    <div className="well well-sm">
                        Title: {facultyMember.title}<br/>
                        Faculty ID: {facultyMember.facultyID}<br/>
                        Department: {facultyMember.departmentName}<br/>
                        Happiness: {facultyMember.happiness}<br/>
                        Performance: {facultyMember.performance}<br/>
                    </div>
                </div>

                Salary: ${facultyMember.salary}

                <Link id="raise" class="btn btn-info" name="facultyRaise + {i}">Give Raise</Link>
                <Link id="fire" class="btn btn-info" name="removeFaculty + {i}">Fire Faculty</Link>
            </li>
        );
    }
}
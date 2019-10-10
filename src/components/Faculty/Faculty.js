import React from 'react';
import '../Faculty/Faculty.css';
import {Link} from "react-router-dom";

export default class Faculty extends React.Component{

    render() {
        let table = [];

        let professors = [];
        //create the titles
        professors.push(<td id = "title">PROFESSORS</td>);

        table.push(<tr>{professors}</tr>);

        //this.props.everything.faculty[i].variable

        for(let i = 0; i < this.props.everything.faculty.length; i++){
            professors = [];
            professors.push(
                <tr id = "facultyMember">
                    <td id = "facultyName">{this.props.everything.faculty[i].facultyName}</td>
                    <td>
                        <Link to={i} class = "btn btn-info" data-toggle = {"collapse"}>Details</Link>
                        <div id = {i} class = "collapse">
                            <div class = "well well-sm">
                                Title: {this.props.everything.faculty[i].title}<br />
                                Faculty ID: {this.props.everything.faculty[i].facultyID}<br />
                                Department: {this.props.everything.faculty[i].departmentName}<br />
                                Happiness: {this.props.everything.faculty[i].happiness}<br />
                                Performance: {this.props.everything.faculty[i].performance}<br />
                            </div>
                        </div>
                        <td id = "salary">Salary: ${this.props.everything.faculty[i].salary}</td>
                    </td>
                    <td>
                        <Link to = {i} id="raise" class="btn btn-info" name="facultyRaise + {i}">Give Raise</Link>
                        <Link to = {i} id="fire" class="btn btn-info" name="removeFaculty + {i}">Fire Faculty</Link>

                    </td>
                </tr>);

            table.push(<tr>{professors}</tr>);
        }

        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="col-md-2">
                        <img className="img-responsive" src="resources/images/student.png"></img>
                    </div>

                    <h1>FACULTY</h1>
                    <h3>{this.props.everything.faculty.length} Faculty Members</h3>
                </div>

                <table>
                    {table}
                </table>
            </div>


        );
    }
}
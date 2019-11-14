import React from 'react';
import '../Faculty/Faculty.css';
import FacultyTable from "./FacultyTable";

export default class Faculty extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedFaculty: 0
        }
    }

    facultySwitch = (s) => {
        this.setState({
            selectedFaculty: s
        });
    }

    render() {
        return (
            <div class = "container">

                <div class="jumbotron">
                    <div className="col-md-2">
                        <img className="img-responsive" src="resources/images/student.png"></img>
                    </div>
                    <h2><b>Faculty</b></h2>
                    <h3>{this.props.everything.faculty.length} faculty members</h3>
                </div>

                <FacultyTable everything = {this.props.everything} facultySwitch = {this.facultySwitch}/>

                <div class = "col-md-6">
                    <h2 class = "memberInfoTitle">Faculty Member Details</h2>
                    <div class = "memberInfo">
                        <h3>{this.props.everything.faculty[this.state.selectedFaculty].facultyName}</h3>
                        <h3>Department</h3>
                        <h3>Salary: </h3>
                        <h3>ID: </h3>
                        <h3>Happiness: </h3>
                        <h3>Performance: </h3>
                    </div>
                </div>

                <div className="clearfix"></div>
                <div class = "col-sm-6">
                    <h3><b>Academic Department Ratings</b></h3>
                    <table class = "table table-condensed" id = "tableContainer">
                        <thread>
                            <tr>
                                <th>Department names</th>
                            </tr>
                        </thread>
                        <tbody>
                            <tr><td>Nursing: 75</td></tr>
                            <tr><td>Sports Science and Fitness: 75</td></tr>
                            <tr><td>Arts and Sciences: 75</td></tr>
                            <tr><td>Business: 75</td></tr>
                            <tr><td>Overall Academic Rating: 75</td></tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}


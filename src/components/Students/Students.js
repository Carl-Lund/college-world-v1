import React from 'react';
import StudentsTable from "./StudentsTable";
import StudentsPanel from "./StudentPanel";
import StudentFeedback from "./StudentFeedback";
import "./Students.css";
import StudentAcademicHappiness from "./StudentAcademicHappiness";
import StudentBuildingHappiness from "./StudentBuildingHappiness";
import StudentProfessorHappiness from "./StudentProfessorHappiness";
import StudentOverallHappiness from "./StudentOverallHappiness";
import StudentHealthHappiness from "./StudentHealthHappiness";
import StudentFinancialHappiness from "./StudentFinancialHappiness";

export default class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStudent: 0
        };
    }

    studentSwitch = (s) => {
        this.setState({
            selectedStudent: s
        });
    }

    render() {
        console.log(this.props.everything);
        if (this.props.everything == null) {
            return(<h4>No students.</h4>);
        }

        return (
            <div className="container" style={{maxHeight: "90%"}}>
                <div className="cardDeck">
                    <h1 class="student-happiness-header">Student Happiness Statistics</h1>
                    <div className="card-deck my-3">
                        <StudentOverallHappiness everything={this.props.everything}/>
                        <StudentAcademicHappiness everything={this.props.everything}/>
                        <StudentBuildingHappiness everything={this.props.everything}/>
                        <StudentProfessorHappiness everything={this.props.everything}/>
                        <StudentHealthHappiness everything={this.props.everything}/>
                        <StudentFinancialHappiness everything={this.props.everything}/>

                    </div>
                    <div className="card my-3">
                        <StudentFeedback student = {this.props.everything.students[this.state.selectedStudent]}/>
                        <div className="row px-0" style={{height: '800px', marginTop: '20px'}}>
                            <StudentsTable everything = {this.props.everything} studentSwitch = {this.studentSwitch}/>
                            <StudentsPanel student = {this.props.everything.students[this.state.selectedStudent]}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react';
import StudentsTable from "./StudentsTable";
import StudentsPanel from "./StudentPanel";
import StudentFeedback from "./StudentFeedback";
import "./Students.css";
import StudentAcademicHappiness from "./StudentAcademicHappiness";
import StudentBuildingHappiness from "./StudentBuildingHappiness";
import StudentOverallHappiness from "./StudentOverallHappiness";
import StudentSafetyHappiness from "./StudentSafetyHappiness";
import StudentFinancialHappiness from "./StudentFinancialHappiness";
import StudentSocialHappiness from "./StudentSocialHappiness";
import StudentSportsHappiness from "./StudentSportsHappiness";

export default class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStudent: 0,
        };
    }

    studentSwitch = (i) => {
        this.setState({
            selectedStudent: i
        });
    }

    render() {
        if (this.props.everything === undefined) {
            return(<h4>No students.</h4>);
        }

        if((this.state.selectedStudent === null) || (this.state.selectedStudent >= this.props.everything.students.length)){
            this.studentSwitch(0);
        }

        return (
            <div className="container" style={{maxHeight: "90%"}}>
                <div className="cardDeck">
                    <h1 class="student-happiness-header">Student Body Happiness Statistics</h1>
                    <div className="card-deck my-3">
                        <StudentAcademicHappiness everything={this.props.everything}/>
                        <StudentOverallHappiness everything={this.props.everything}/>
                        <StudentSportsHappiness everything={this.props.everything}/>
                    </div>
                    <div className="card-deck my 3">
                        <StudentBuildingHappiness everything={this.props.everything}/>
                        <StudentSafetyHappiness everything={this.props.everything}/>
                        <StudentSocialHappiness everything={this.props.everything}/>
                        <StudentFinancialHappiness everything={this.props.everything}/>
                    </div>
                    <div className="card my-3"  style={{width: '100%', display: "inline-block"}}>
                        <StudentFeedback student = {this.props.everything.students[this.state.selectedStudent]}/>
                        <StudentsPanel student = {this.props.everything.students[this.state.selectedStudent]}everything = {this.props.everything}/>
                        {/*Z was here*/}
                        <div className="row px-0" style={{height: '800px', marginTop: '20px', float: 'left', width: '65%'}}>
                            <StudentsTable everything = {this.props.everything} studentSwitch = {this.studentSwitch}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react';
import StudentsTable from "./StudentsTable";
import StudentsPanel from "./StudentPanel";
import StudentFeedback from "./StudentFeedback";
import "./Students.css";

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
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron" style={{height: '800px'}}>
                        <StudentFeedback student = {this.props.everything.students[this.state.selectedStudent]}/>
                        <StudentsTable everything = {this.props.everything} studentSwitch = {this.studentSwitch}/>
                        <StudentsPanel student = {this.props.everything.students[this.state.selectedStudent]}/>
                    </div>
                </div>
            </div>
        );
    }
}
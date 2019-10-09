import React from 'react';
import StudentsTable from "./StudentsTable";
import StudentsPanel from "./StudentPanel";
import StudentFeedback from "./StudentFeedback";
import "./Students.css";

export default class Students extends React.Component {

    render() {
        console.log(this.props.everything);
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron" style={{height: '800px'}}>
                        <StudentFeedback student = {this.props.everything.students[0]}/>
                        <StudentsTable everything = {this.props.everything}/>
                        <StudentsPanel student = {this.props.everything.students[0]}/>
                    </div>
                </div>
            </div>
        );
    }
}
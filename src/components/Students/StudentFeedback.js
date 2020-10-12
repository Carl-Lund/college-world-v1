import React from 'react';
import "./Students.css"
import Navigation from "../Navigation/Navigation";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row px-0" style={{marginTop: "10px"}}>
                <div className="col-md-2">
                    <img className="img-responsive" style={{height: '175px', width: '175px'}} src= {this.props.student.avatarIcon.avatarUrl}></img>
                </div>
                <div className="col-md-10" style={{padding: '10px'}}>
                    <div className="id-card">
                        <h3><strong>{this.props.student.name}</strong></h3>
                        <h5><strong>ID: </strong>{this.props.student.id}</h5>
                        <h5><strong>Gender: </strong>{this.props.student.gender.personGender}</h5>
                        <h5><strong>Advisor: </strong>{this.props.student.advisor.facultyName}</h5>
                        <strong>{this.props.student.feedback}</strong>
                    </div>
                </div>
            </div>
        );
    }
}
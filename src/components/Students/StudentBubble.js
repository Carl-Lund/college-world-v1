import React from 'react';
import "./Students.css"
import Navigation from "../Navigation/Navigation";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="studentElement" id={this.props.student.idNumber}>
                <img src="resources/images/student.png"></img>
                <p>{this.props.student.name.split(" ")[1] + ", " + this.props.student.name.split(" ")[0].charAt(0)}</p>
            </div>
        );
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
    }

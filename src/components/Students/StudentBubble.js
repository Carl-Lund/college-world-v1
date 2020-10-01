import React from 'react';
import "./Students.css"
import Navigation from "../Navigation/Navigation";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="studentElement" id={this.props.student.idNumber} style={{boxShadow: "0 0 5px 3px " + this.bubbleColoring(this.props.student.happiness)}}
                onClick = {() => this.props.studentSwitch(this.props.studentNumber)}>
                <img src="resources/images/student.png"></img>
                <p>{this.props.student.name.split(" ")[1] + ", " + this.props.student.name.split(" ")[0].charAt(0)}</p>
            </div>
        );
    }

    bubbleColoring(happiness) {
        return 'rgb(' + scale(happiness, 50, 100, 255, 0) + ',' +  scale(happiness, 0, 50, 0, 255) + ', 0)';
    }
}

/**
 *
 * @param num       value to base scale off of
 * @param in_min    min value for inputs range
 * @param in_max    max value for inputs range
 * @param out_min   min value for outputs range
 * @param out_max   max value for outputs range
 * @return          scaled value
 */
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

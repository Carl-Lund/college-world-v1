import React from 'react';
import "../Students/Students.css"
import Avatar from "avataaars-updated";

export default class StudentsTable extends React.Component {
    render() {
        return (
            <div className="studentElement" student={this.props.student} style={{boxShadow: "0 0 3px 3px " + this.bubbleColoring(this.props.student.happiness)}}
            onClick={ () =>this.props.showapp(this.props.student)}
            >
                <Avatar className="avatar" style={{height: '55px', width: '55px'}}
                        avatarStyle='Circle'
                        topType={this.props.student.avatar.top}
                        facialHairType={this.props.student.avatar.facialHair}
                        facialHairColor={this.props.student.avatar.facialHairColor}
                        clotheType={this.props.student.avatar.clothes}
                        eyeType={this.props.student.avatar.eyes}
                        eyebrowType={this.props.student.avatar.eyebrows}
                        mouthType={this.props.student.avatar.mouth}
                        skinColor={this.props.student.avatar.skinColor}
                />
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

import React from 'react';
import "./Students.css"
import Avatar from "avataaars-updated";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
        // this.checkStudentExists = this.checkStudentExists.bind(this);
    }

    // checkStudentExists = () => {
    //     if(this.props.student == null) {
    //         this.props.student =
    //     }
    // }

    render() {
        return (
            <div className="row px-0" style={{marginTop: "10px"}}>
                {/*{this.checkStudentExists()}*/}
                <div className="col-md-2">
                    <Avatar style={{height: '175px', width: '175px'}}
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
                </div>
                <div className="col-md-10" style={{padding: '10px'}}>
                    <div className="id-card">
                        <h3><strong>{this.props.student.name}</strong></h3>
                        <h5><strong>ID: </strong>{this.props.student.id}</h5>
                        <h5><strong>Gender: </strong>{this.props.student.gender.personGender}</h5>
                        <h5><strong>Advisor: </strong>{this.props.student.advisor}</h5>
                        <h5><strong>Year: </strong>{this.props.student.classYear}</h5>
                        <strong>"{this.props.student.feedback}"</strong>
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react';
import '../Faculty/Faculty.css';
import FacultyTable from "./FacultyTable";
import FacultyRatings from "./FacultyRatings";

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
                <div class="jumbotron clearfix">
                    <div className="img">
                        <img className="img-responsive" src="resources/images/student.png"></img>
                    </div>
                    <div className="title">
                        <h1><b>Faculty</b> <small>{this.props.everything.faculty.length} members</small></h1>
                    </div>

                </div>
                <div class="row">

                    <div className="col-md-4">
                        <FacultyTable everything = {this.props.everything} facultySwitch = {this.facultySwitch}/>
                    </div>

                    <div class = "col-md-4 text-center">
                        <h2 class = "memberInfoTitle">Faculty Member Details</h2>
                        <div class = "memberInfo">
                            <h3>{this.props.everything.faculty[this.state.selectedFaculty].facultyName}</h3>
                            <h3>{this.props.everything.faculty[this.state.selectedFaculty].department}</h3>
                            <h3>Salary: ${this.props.everything.faculty[this.state.selectedFaculty].salary}</h3>
                            <h3>ID: {this.props.everything.faculty[this.state.selectedFaculty].facultyID}</h3>
                            <h3>Happiness: {this.props.everything.faculty[this.state.selectedFaculty].happiness} </h3>
                            <h3>Performance: {this.props.everything.faculty[this.state.selectedFaculty].performance}</h3>
                        </div>
                        <div class = "facultyButtons">
                            <button type="submit" className="btn btn-info" onClick={fireFaculty()} name="fireFaculty">Fire Faculty</button>
                            <button type="submit" className="btn btn-info" onClick={giveRaise()} name="giveRaise">Give Raise</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <FacultyRatings everything = {this.props.everything}/>
                    </div>
                </div>


                <div className="clearfix"></div>


            </div>
        );
    }
}

function fireFaculty(){

}

function giveRaise(){

}

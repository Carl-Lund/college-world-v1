import React from 'react';
import '../Faculty/Faculty.css';
import FacultyRatings from "./FacultyRatings";

export default class Faculty extends React.Component{

    constructor(props){
        super(props);
        this.fireFaculty = this.fireFaculty.bind(this);
        this.facultySwitch = this.facultySwitch.bind(this);
        this.state = {
            selectedFaculty: 0
        }
    }

    facultySwitch = (s) => {
        console.log("SWITCHED SELECTED MEMBER");
        this.setState({
            selectedFaculty: s
        });
    }

    fireFaculty(){
        console.log("IN FIRE FACULTY");
        const address = "http://localhost:8080/enccollegeworld_war_exploded/faculty/" + this.props.everything.college.runId + "/fire/" + this.state.selectedFaculty + "/";
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
        console.log("UPDATE EVERYTHING DAMMIT " + address);
    }

    giveRaise(){
        console.log("GIVIN SOME FUCKIN CASH");
        const address = "http://localhost:8080/enccollegeworld_war_exploded/faculty/" + this.props.everything.college.runId + "/raise/" + this.state.selectedFaculty + "/";
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
        console.log("UPDATE EVERYTHING DAMMIT");
    }

    render() {
        this.facultyTable = createTable(this.props.everything.faculty, this.facultySwitch);

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
                    <div className="col-md-2">
                    </div>

                <div className="col-md-4">
                    {this.facultyTable}
                </div>


                <div class = "col-md-4 text-right">
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
                        <button type="submit" className="btn btn-info" onClick={this.fireFaculty} name="fireFaculty">Fire Faculty</button>
                        <button type="submit" className="btn btn-info" onClick={this.giveRaise} name="giveRaise">Give Raise</button>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>


                <div className="clearfix"></div>
                <FacultyRatings everything = {this.props.everything}/>

            </div>
        );
    }
}

function createTable(faculty, facultySwitch){
    let table = [];

    if (faculty === null || faculty === null)
        return table;

    for(let i = 0; i < faculty.length; i++){
        table.push(handleMember(faculty, i, facultySwitch))
    }

    return table;
}

function handleMember(facultyArray, index, facultySwitch){
    return(
        <li class = "list-group-item" onClick = {() => facultySwitch(index)}>
            <b class = "facultyName">{facultyArray[index].facultyName}</b>
        </li>
    );
}
import React from 'react';
import '../Faculty/Faculty.css';
import FacultyRatings from "./FacultyRatings";
import TipsBox from "../College/TipsBox";

export default class Faculty extends React.Component{

    constructor(props){
        super(props);
        this.fireFaculty = this.fireFaculty.bind(this);
        this.facultySwitch = this.facultySwitch.bind(this);
        this.hideShowTipsText = this.hideShowTipsText.bind(this);
        this.state = {
            selectedFaculty: 0,
            hideShowTipsText : "Show Tips",
            isHide: false,
            showNextTip: true
        }
    }

    hideShowTipsText = () => {
        let tips = document.getElementById('hideTips');
        if(this.state.isHide){
            this.state.hideShowTipsText = "Hide tips"
            this.setState({isHide: false})
            tips.style.display = "block";
        }else {
            this.state.hideShowTipsText = "Show tips"
            this.setState({isHide: true})
            tips.style.display = "none";
        }
        this.setState({ hideShowTipsText: this.state.hideShowTipsText});
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
    }

    giveRaise(){
        const address = "http://localhost:8080/enccollegeworld_war_exploded/faculty/" + this.props.everything.college.runId + "/raise/" + this.state.selectedFaculty + "/";
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
        console.log("UPDATE EVERYTHING");
    }

    getListAsOpts(listOfOptions){
        let results = [];
        if(listOfOptions != null) {
            for (let i = 0; i < listOfOptions.length; i++) {
                results.push(
                    <option>{listOfOptions[i]}</option>
                )
            }
        }
        return results;
    }

    hireFacultyComponent(academics){
        return (<div className="col-sm-4">
            <div className="well well-sm">
                <div className="form-group">
                    <label id="salaryLabel">Pick an annual salary, a department, and a position
                        if you would like to add a new faculty member</label>
                </div>
                <div className="form-group">
                    <select className="form-control" id="salaryDropdown" name="salaryDropdown">
                        {this.getListAsOpts(academics.facultySalaries)}
                    </select>
                    <br/>
                    <select class=" form-control" id=" departmentDropdown" name=" departmentDropdown">
                        {this.getListAsOpts(academics.schools)}
                    </select>
                    <br/>
                    <input type=" submit" class=" btn btn-info" name=" addFaculty" value=" Add Faculty"/><br/>
                    <br/>
                </div>
            </div>
        </div>);
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
                    <div className="faculty-tips">
                        <button type="button" onClick={this.hideShowTipsText} className="btn btn-info">{this.state.hideShowTipsText}</button>
                        <div id="hideTips">
                            <TipsBox everything = {this.props.everything} name = {'Academic'} tips = {this.props.everything.college.collegeTips.academicTips}/>
                        </div>
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

                {this.hireFacultyComponent(this.props.everything.academics)}


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
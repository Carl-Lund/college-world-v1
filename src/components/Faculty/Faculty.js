import React from 'react';
import '../Faculty/Faculty.css';
import FacultyRatings from "./FacultyRatings";
import Avatar from "avataaars-updated";

export default class Faculty extends React.Component{

    constructor(props){
        super(props);
        this.fireFaculty = this.fireFaculty.bind(this);
        this.facultySwitch = this.facultySwitch.bind(this);
        this.hideShowTipsText = this.hideShowTipsText.bind(this);
        this.giveRaise = this.giveRaise.bind(this);
        this.hireFacultyComponent = this.hireFacultyComponent.bind(this);
        this.hireFaculty = this.hireFaculty.bind(this);
        this.onChangeSelectDepartment = this.onChangeSelectDepartment.bind(this);
        this.onChangeSelectSalary = this.onChangeSelectSalary.bind(this);

        this.state = {
            selectedFaculty: 0,
            hideShowTipsText: "Hide Tips",
            isHide: false,
            showNextTip: true,
            salary: '6000',
            department: "Arts and Sciences"
        }
    }

    hideShowTipsText = () => {
        let tips = document.getElementById('hideTips');
        if(this.state.isHide){
            this.setState({hideShowTipsText: "Hide tips"})
            this.setState({isHide: false})
            tips.style.display = "block";
        }else {
            this.setState({hideShowTipsText: "Show tips"})
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
        const address = "http://localhost:8080/enccollegeworld_war_exploded/faculty/" + this.props.everything.college.runId + "/fire/" + this.state.selectedFaculty + "/";
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
        this.setState({
            selectedFaculty:0
        });
    }

    hireFaculty(){
        const address = "http://localhost:8080/enccollegeworld_war_exploded/faculty/" + this.props.everything.college.runId + "/hire/" + this.state.salary + "/" + this.state.department + "/";
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
                    <option>${listOfOptions[i].toLocaleString()}</option>
                )
            }
        }
        return results;
    }

    getDeptListAsOpts(listOfOptions){
        let results = [];
        if(listOfOptions != null) {
            for (let i = 0; i < listOfOptions.length; i++) {
                results.push(
                    <option>{listOfOptions[i].departmentName}</option>
                )
            }
        }
        return results;
    }

    onChangeSelectSalary= (value) => {
        console.log('The value is: ' + value.toString())
        this.setState({salary: value.toString()})
    }

    onChangeSelectDepartment= (value) => {
        console.log('The value is: ' + value.toString())
        this.setState({department: value.toString()})
    }

    hireFacultyComponent(academics){
        return (<div className="col-sm-4">
            <div className="well well-sm">
                <div className="form-group">
                    <label id="salaryLabel">Pick an annual salary, a department, and a position
                        if you would like to add a new faculty member</label>
                </div>
                <div className="form-group">
                    <select onChange={e => this.onChangeSelectSalary(e.target.value)} className="form-control" id="salaryDropdown" name="salaryDropdown">
                        {this.getListAsOpts(academics.facultySalaries)}
                    </select>
                    <br/>
                    <select onChange={e => this.onChangeSelectDepartment(e.target.value)} class=" form-control" id=" departmentDropdown" name=" departmentDropdown">
                        {this.getDeptListAsOpts(academics.unlockedDepts)}
                    </select>
                    <br/>
                    <button type="submit" className="btn btn-info" onClick={this.hireFaculty} name="addFaculty">Add Faculty</button>
                    <br/>
                </div>
            </div>
        </div>);
    }

    // Returns a string describing a faculty member's relative happiness
    // Adapted from determineHappiness() in StudentPanel.js
    determineHappiness(facultyMember){
        let facultyHappiness = this.props.everything.faculty[facultyMember].happiness;

        if(facultyHappiness >= 95){
            return "Very Happy";
        }
        else if(facultyHappiness >= 80){
            return "Happy";
        }
        else if(facultyHappiness > 70){
            return "Slightly Happy";
        }
        else if(facultyHappiness >= 60){
            return "Neutral";
        }
        else if(facultyHappiness >= 45){
            return "Slightly Unhappy";
        }
        else if(facultyHappiness >= 30){
            return "Unhappy";
        }
        else {
            return "Very Unhappy";
        }
    }

    render() {
        // this.facultyTable = createTable(this.props.everything.faculty, this.facultySwitch, this.props.everything.faculty.departmentName);

        return (
            <div class = "container">

                <div class="jumbotron clearfix">
                    <div className="img">
                        <img alt="studentImage" className="img-responsive" src="resources/images/student.png"></img>
                    </div>
                    <div className="title">
                        <h1><b>Faculty</b> <small>{this.props.everything.faculty.length} members</small></h1>
                    </div>
                </div>
                <div class="row">
                    <div className="col-md-2">
                    </div>

                <div className="col-md-4">
                    <h2 style={{textAlign: "center"}}>School of Arts and Sciences</h2>
                    {createTable(this.props.everything.faculty, this.facultySwitch, "Arts and Sciences")}
                    <br></br>
                    <h2 style={{textAlign: "center"}}>School of Business</h2>
                    {createTable(this.props.everything.faculty, this.facultySwitch, "Business")}
                    <br></br>
                    <h2 style={{textAlign: "center"}}>School of Nursing</h2>
                    {createTable(this.props.everything.faculty, this.facultySwitch, "Nursing")}
                    <br></br>
                    <h2 style={{textAlign: "center"}}>School of Sports Science and Fitness</h2>
                    {createTable(this.props.everything.faculty, this.facultySwitch, "Sports Science and Fitness")}
                </div>


                <div class = "col-md-4 text-right">
                    <h2 class = "memberInfoTitle">Faculty Member Details</h2>
                    <div class = "memberInfo">
                        <h3 class = "memberName"><strong>{this.props.everything.faculty[this.state.selectedFaculty].name}</strong></h3>
                        <h3><strong>Department: </strong>{this.props.everything.faculty[this.state.selectedFaculty].departmentName}</h3>
                        <h3><strong>Salary: </strong>${this.props.everything.faculty[this.state.selectedFaculty].salary.toLocaleString()}</h3>
                        <h3><strong>ID: </strong>{this.props.everything.faculty[this.state.selectedFaculty].facultyID}</h3>
                        <h3><strong>Happiness: </strong>{this.determineHappiness(this.state.selectedFaculty)} </h3>
                        <h3><strong>Performance: </strong>{this.props.everything.faculty[this.state.selectedFaculty].performance}</h3>
                        <br></br>
                        <div className="facultyButtons">
                            <button type="submit" className="btn btn-info" id="fireButton" onClick={this.fireFaculty} name="fireFaculty">Fire Faculty</button>
                            <button type="submit" className="btn btn-info" id="raiseButton" onClick={this.giveRaise} name="giveRaise">Give Raise</button>
                        </div>
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

function createTable(faculty, facultySwitch, department){
    let table = [];

    if (faculty === null || faculty === null)
        return table;

    for(let i = 0; i < faculty.length; i++){
        if(faculty[i].departmentName === department){
            table.push(handleMember(faculty, i, facultySwitch))
        }
    }

    return table;
}

function handleMember(facultyArray, index, facultySwitch){
    let person = facultyArray[index];
    return(

        <li className = "list-group-item2 list-group-item"  onClick = {() => facultySwitch(index)}>
            <Avatar style={{height: '60px', width: '60px'}}
                    avatarStyle='Circle'
                    topType={person.avatar.top}
                    facialHairType={person.avatar.facialHair}
                    facialHairColor={person.avatar.facialHairColor}
                    clotheType={person.avatar.clothes}
                    eyeType={person.avatar.eyes}
                    eyebrowType={person.avatar.eyebrows}
                    mouthType={person.avatar.mouth}
                    skinColor={person.avatar.skinColor}
            />
            <b class = "facultyName">{person.name}</b>
        </li>
    );
}
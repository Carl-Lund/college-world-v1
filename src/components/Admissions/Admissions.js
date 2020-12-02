import React from 'react';
import CollegeHappiness from "../CollegeDashboard/CollegeHappiness";
import CollegeRetention from "../CollegeDashboard/CollegeRetention";
import CollegeBuildings from "../CollegeDashboard/CollegeBuildings";
import CollegeFinancialHappiness from "../CollegeDashboard/CollegeFinancialHappiness";
import CollegeRecreationalHappiness from "../CollegeDashboard/CollegeRecreationalHappiness";
import CollegeStudentHealth from "../CollegeDashboard/CollegeStudentHealth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Controls from "../Admissions/Controls";
import Freshmen from "./FreshmenPanel";
import PopupEventHandler from "../PopupEvents/PopupEventHandler";
import Traits from "../Navigation/NavigationModals/Traits";
import Application from "./Application";
import './Admissions.css'

export default class Admissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationAppear : false,
            currentStudent: null
        };
        this.setApplicationShow = (value) => {this.setState({applicationAppear:value})}
        this.handleCloseApplication = () => this.setApplicationShow(false);

        this.handleShowApplication = (data) => {
            this.state.currentStudent = data;
            this.setApplicationShow(true);
        }
    }

    render() {
        let availableBeds = 0;
        let takenBeds = 0;
        let availablePlates = 0;
        let takenPlates = 0;
        let availableDesks = 0;
        let takenDesks = 0;
        for(let i = 0; i < this.props.everything.buildings.length; i++) {
            if (this.props.everything.buildings[i].isBuilt && this.props.everything.buildings[i].kindOfBuilding == "DORM") {
                availableBeds += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenBeds += this.props.everything.buildings[i].numStudents;
            }
            if (this.props.everything.buildings[i].isBuilt && this.props.everything.buildings[i].kindOfBuilding == "DINING") {
                availablePlates += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenPlates += this.props.everything.buildings[i].numStudents;
            }
            if (this.props.everything.buildings[i].isBuilt && this.props.everything.buildings[i].kindOfBuilding == "ACADEMIC") {
                availableDesks += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenDesks += this.props.everything.buildings[i].numStudents;
            }
        }
        let totalPotentialStudents = this.props.everything.admissions.groupA.length +
            this.props.everything.admissions.groupB.length +
            this.props.everything.admissions.groupC.length;
        return(
            <div>
                <h2 className="header">Admissions</h2>
                    <div className="row m-2">
                        <div className="col-sm text-center topbar navbar navbar-default navbar-fixed-top">
                            <img className="topbar-icon" src="resources/images/college_world_icons/total_students.png"></img>
                            <div className="topbar-text">
                                <h4><strong>{this.props.everything.college.studentsGraduating}</strong></h4>
                                <h6>Graduating Students</h6>
                            </div>
                        </div>
                        <div className="col-sm text-center topbar">
                            <img className="topbar-icon" src="resources/images/student.png"></img>
                            <div className="topbar-text">
                                <h4><strong>{this.props.everything.objectives.studentCount}</strong></h4>
                                <h6>Total Enrolled Students</h6>
                            </div>
                        </div>
                        <div className="col-sm text-center topbar">
                            <img className="topbar-icon" src="resources/images/presentation.png"/>
                            <div className="topbar-text">
                                <h4><strong>{this.props.everything.admissions.openCapacity}</strong></h4>
                                <h6>Currently Open Space</h6>
                            </div>
                        </div>
                        <div className="col-sm text-center topbar" id="last-bar">
                            <img className="topbar-icon" src="resources/images/college_world_icons/question_mark.png"></img>
                            <div className="topbar-text">
                                <h4><strong>{totalPotentialStudents}</strong></h4>
                                <h6>Students Considering</h6>
                            </div>
                        </div>
                    </div>
                <Application student = {this.state.currentStudent} show={this.state.applicationAppear} handleClose={this.handleCloseApplication} />
                <div className="card-deck my-3">
                    <CollegeHappiness everything={this.props.everything}/>
                    <CollegeRetention everything={this.props.everything}/>
                    <CollegeBuildings everything={this.props.everything}/>
                    <CollegeStudentHealth everything={this.props.everything}/>
                    <CollegeRecreationalHappiness everything={this.props.everything}/>
                    <CollegeFinancialHappiness everything={this.props.everything}/>
                </div>
                <div>
                    <Controls everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                </div>
                <Container>
                    <Row>
                    <div className="col-sm-4" id="border">
                        <Freshmen popup={this.handleShowApplication} label = {"Group A"} admissions={this.props.everything.admissions.groupA} everything={this.props.everything}/>
                    </div>
                    <div className="col-sm-4" id="border">
                        <Freshmen popup={this.handleShowApplication} label = {"Group B"} admissions={this.props.everything.admissions.groupB} everything={this.props.everything}/>
                    </div>
                    <div className="col-sm-4" id="border">
                        <Freshmen popup={this.handleShowApplication} label = {"Group C"} admissions={this.props.everything.admissions.groupC} everything={this.props.everything}/>
                    </div>
                    </Row>
                </Container>
            </div>
            );
        }
}

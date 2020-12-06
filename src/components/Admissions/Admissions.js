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
import Academics from "./AdmissionsEffects/Academics";
import Athletics from "./AdmissionsEffects/Athletics";
import Social from "./AdmissionsEffects/Social";

export default class Admissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationAppear : false,
            currentStudent: null
        };
        this.oldNumStudents = this.props.everything.college.numberStudentsAdmitted;
        this.newNumStudents = this.props.everything.admissions.openCapacity;
        this.setApplicationShow = (value) => {this.setState({applicationAppear:value})}
        this.handleCloseApplication = () => this.setApplicationShow(false);

        this.handleShowApplication = (data) => {
            this.state.currentStudent = data;
            this.setApplicationShow(true);
        }
    }

    calculateAcademicImpact(){
        const oldAcademicRating = this.props.everything.college.academicRating;
        const newAcademicRating = this.props.everything.admissions.academicRatingImpact;

        if(newAcademicRating > 0){
            return (((oldAcademicRating*this.oldNumStudents)+(newAcademicRating*this.newNumStudents))/(this.oldNumStudents + this.newNumStudents));
        }
        else{
            return oldAcademicRating;
        }
    }

    calculateAthleticImpact(){
        const oldAthleticRating = this.props.everything.college.athleticRating;
        const newAthleticRating = this.props.everything.admissions.athleticRatingImpact;

        if(newAthleticRating > 0){
            return (((oldAthleticRating*this.oldNumStudents)+(newAthleticRating*this.newNumStudents))/(this.oldNumStudents + this.newNumStudents));
        }
        else{
            return oldAthleticRating;
        }
    }

    calculateSocialImpact(){
        const oldSocialRating = this.props.everything.college.socialRating;
        const newSocialRating = this.props.everything.admissions.socialRatingImpact;

        if(newSocialRating > 0){
            return (((oldSocialRating*this.oldNumStudents)+(newSocialRating*this.newNumStudents))/(this.oldNumStudents + this.newNumStudents));
        }
        else{
            return oldSocialRating;
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
                <div>
                    <h3>Green = Old rating</h3><br/>
                    <h3>Blue = Potential rating after admitting selected group</h3>
                </div>
                <div className="card-deck my-3">
                    <Academics oldRating={this.props.everything.college.academicRating} impact={this.calculateAcademicImpact()}/>
                    <Athletics oldRating={this.props.everything.college.athleticRating} impact={this.calculateAthleticImpact()}/>
                    <Social oldRating={this.props.everything.college.socialRating} impact={this.calculateSocialImpact()}/>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /><br /><br />





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

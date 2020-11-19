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
        return(
            <div>
                <Application student = {this.state.currentStudent} show={this.state.applicationAppear} handleClose={this.handleCloseApplication} />
                <h2 className="header">Admissions</h2>
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

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
import Freshmen from "../Admissions/FreshmenPannel";
import PopupEventHandler from "../PopupEvents/PopupEventHandler";

export default class Admissions extends React.Component {
    render() {
        return(
            <div>
                <h2>Admissions</h2>
                <PopupEventHandler everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                <div className="card-deck my-3">
                    <CollegeHappiness everything={this.props.everything}/>
                    <CollegeRetention everything={this.props.everything}/>
                    <CollegeBuildings everything={this.props.everything}/>
                    <CollegeStudentHealth everything={this.props.everything}/>
                    <CollegeRecreationalHappiness everything={this.props.everything}/>
                    <CollegeFinancialHappiness everything={this.props.everything}/>
                </div>
                <div>
                    <Controls everything={this.props.everything}/>
                </div>
                <Container>
                    <Row>
                    <div className="col-sm-4">
                        <Freshmen Pannel everything={this.props.everything}/>
                    </div>
                    <div className="col-sm-4">
                        <Freshmen Pannel everything={this.props.everything}/>
                    </div>
                    <div className="col-sm-4">
                        <Freshmen Pannel everything={this.props.everything}/>
                    </div>
                    </Row>
                </Container>
            </div>
            );
        }
}

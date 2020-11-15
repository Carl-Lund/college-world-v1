import React, { useState, useEffect } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Notification from "./NavigationModals/Notifications";
import Calendar from "./NavigationModals/Calendar";
import Traits from "./NavigationModals/Traits";

export default class TopNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {appear : false, calendarAppear : false, traitsAppear : false};

        this.setShow = (value) => {this.setState({appear:value})}
        this.handleClose = () => this.setShow(false);
        this.handleShow = () => this.setShow(true);

        this.setCalendarShow = (value) => {this.setState({calendarAppear:value})}
        this.handleCloseCalendar = () => this.setCalendarShow(false);
        this.handleShowCalendar = () => this.setCalendarShow(true);

        this.setTraitsShow = (value) => {this.setState({traitsAppear:value})}
        this.handleCloseTraits = () => this.setTraitsShow(false);
        this.handleShowTraits = () => this.setTraitsShow(true);
    }

    fetchData() {
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/college/' + this.props.everything.college.runId + '/nextDay';
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data)});
    }

    render() {
        let collegeName = this.props.collegeName;
        let currentBalance = this.props.everything.college.availableCash.toLocaleString();
        let studentFacultyRatio = this.props.everything.college.studentFacultyRatioRating;
        let timeUntilNextSemester = 75 - Math.round((this.props.everything.college.hoursAlive - 1) / 24 + 1);
        let totalStudents = this.props.everything.college.numberStudentsAdmitted;

        return (
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/college">{collegeName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Net Balance: <br />
                            ${currentBalance}</Nav.Link>
                        <Nav.Link>Seats Occupied: <br />
                            {totalStudents}</Nav.Link>
                        <Nav.Link>Student Faculty Ratio:<br />
                            {studentFacultyRatio}</Nav.Link>
                        <Nav.Link >
                            <Button onClick={this.handleShow} variant="primary">Notifications <span className="badge badge-light">{this.props.everything.popupEvent.length}</span></Button>
                            <Notification show={this.state.appear} handleClose={this.handleClose} everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            <Navbar.Collapse class = "justify-content-end">
                <Nav>
                    <Nav.Item>
                        <Button onClick={this.handleShowTraits} variant="info">Traits</Button>
                        <Traits everything={this.props.everything} show={this.state.traitsAppear} handleClose={this.handleCloseTraits} />
                    </Nav.Item>
                    <Nav.Link href="#link">
                        <Button onClick={this.handleShowCalendar} variant="light">Calendar
                            <img className="nav-item-icons" src="resources/images/calendar.png"></img>
                            <span className="badge badge-light">{timeUntilNextSemester}</span>
                        </Button>
                        <Calendar show={this.state.calendarAppear} handleClose={this.handleCloseCalendar} />
                    </Nav.Link>
                    <Nav.Link >
                        <Button onClick={this.fetchData} variant="success">Jump To Next Week</Button>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
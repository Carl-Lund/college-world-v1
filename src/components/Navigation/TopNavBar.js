import React, { useState, useEffect } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Notification from "../Notifications/Notifications";

export default class TopNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {appear : false};
        this.setShow = (value) => {this.setState({appear:value})}
        // const [show, setShow] = useState(false);
        this.handleClose = () => this.setShow(false);
        this.handleShow = () => this.setShow(true);
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
                <Navbar.Brand href="#home">{collegeName}</Navbar.Brand>
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
                            {/*() => this.setShow(true)*/}
                            {/*() => this.setShow(false)*/}
                            <Button onClick={this.handleShow} variant="primary">Notifications <span className="badge badge-light">4</span></Button>
                            <Notification show={this.state.appear} handleClose={this.handleClose} />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            <Navbar.Collapse class = "justify-content-end">
                <Nav>
                    <Nav.Link href="#link">Time Until Next Semester:<br />
                        {timeUntilNextSemester}
                    </Nav.Link>
                    <Nav.Link >
                        <Button onClick={this.fetchData} variant="success">Jump To Next Day</Button>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
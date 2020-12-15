import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Notification from "./NavigationModals/Notifications";
import Calendar from "./NavigationModals/Calendar";
import Tips from "./NavigationModals/Tips";

export default class TopNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {appear : false, calendarAppear : false, tipsAppear : false, busy : false};

        this.setShow = (value) => {this.setState({appear:value})}
        this.handleClose = () => this.setShow(false);
        this.handleShow = () => this.setShow(true);

        this.setCalendarShow = (value) => {this.setState({calendarAppear:value})}
        this.handleCloseCalendar = () => this.setCalendarShow(false);
        this.handleShowCalendar = () => this.setCalendarShow(true);

        this.setTipsShow = (value) => {this.setState({tipsAppear:value})}
        this.handleCloseTips = () => this.setTipsShow(false);
        this.handleShowTips = () => this.setTipsShow(true);
    }

    fetchData() {
        this.setState({busy:true})
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/college/' + this.props.everything.college.runId + '/nextDay';
        fetch(address)
            .then(response => response.json())
            .then(data => {
                this.props.replaceEverything(data);
                this.setState({busy:false});
            });

    }

    render() {
        let collegeName = this.props.collegeName;
        let currentBalance = this.props.everything.college.availableCash.toLocaleString();
        let totalStudents = this.props.everything.objectives.studentCount;

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
                        <Nav.Link >
                            <Button onClick={this.handleShow} variant="primary">Notifications <span className="badge badge-light">{this.props.everything.popupEvent.length}</span></Button>
                            <Notification show={this.state.appear} handleClose={this.handleClose} everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Item>
                        <Button onClick={this.handleShowTips} variant="info">Tips</Button>
                        <Tips everything={this.props.everything} show={this.state.tipsAppear} handleClose={this.handleCloseTips} />
                    </Nav.Item>
                    <Nav.Link href="#link">
                        <Button onClick={this.handleShowCalendar} variant="light">
                            <img alt="calendarImage" className="nav-item-icons" src="resources/images/calendar.png"></img>
                            <span className="badge badge-light">{this.props.everything.college.timeLeftInSemester} {this.props.everything.college.timeAdvanceBy}s Left in Semester</span>
                        </Button>
                        <Calendar year={this.props.everything.college.year} show={this.state.calendarAppear} handleClose={this.handleCloseCalendar} />
                    </Nav.Link>
                    <Nav.Link >
                        <Button variant={"success"} disabled={this.state.busy} onClick={() => {this.state.busy? console.log("stop it") : this.fetchData()}}>{this.state.busy? 'Please wait' : 'Jump To Next ' + this.props.everything.college.timeAdvanceBy}</Button>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
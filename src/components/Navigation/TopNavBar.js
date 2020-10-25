import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Badge from '@material-ui/core/Badge';
// import MailIcon from '@material-ui/icons/Mail';

export default class SideNavBar extends React.Component {

    render() {
        let collegeName = "PlaceHolder";
        // let collegeName = this.props.everything.collegeName;

        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">{collegeName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Level: </Nav.Link>
                        <Nav.Link href="#home">Total Balance</Nav.Link>
                        <Nav.Link href="#link">Seats Occupied</Nav.Link>
                        <Nav.Link href="#link">Student Faculty Ratio</Nav.Link>
                        <NavDropdown title="Notifications" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Message 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Message 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Message 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                {/*<Badge badgeContent={4} color="primary">*/}
                                {/*    <MailIcon />*/}
                                {/*</Badge>*/}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Time Until Next Semester</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
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
                        <Nav.Link>Total Balance</Nav.Link>
                        <Nav.Link>Seats Occupied</Nav.Link>
                        <Nav.Link>Student Faculty Ratio</Nav.Link>
                        <Nav.Link><button type="button" className="btn btn-primary">
                            Notifications <span className="badge badge-light">4</span>
                        </button></Nav.Link>
                        {/*<NavDropdown title="Notifications" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Message 1</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">Message 2</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Message 3</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                            {/*</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                        <Nav.Link href="#link">Time Until Next Semester</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
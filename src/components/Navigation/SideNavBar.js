import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Notification from "./NavigationModals/Notifications";

export default class SideNavBar extends React.Component {

    render() {

        let collegeName = this.props.collegeName;
        let currentBalance = this.props.everything.college.availableCash.toLocaleString();
        let studentFacultyRatio = this.props.everything.college.studentFacultyRatioRating;
        let timeUntilNextSemester = 75 - Math.round((this.props.everything.college.hoursAlive - 1) / 24 + 1);
        let totalStudents = this.props.everything.college.numberStudentsAdmitted;

        return(
            <div className="col-md-2">
                <nav className="sidebar bg-light col-md-2">
                    <div className="sidebar-sticky">
                        <img id="logo" src="resources/images/college_world_icons/logo.png"></img>
                        <ul className="nav flex-column">
                            {/*<li className="nav-item"><Link to='/launch'>Launch</Link></li>*/}
                            <li className="nav-item">
                                <Link to='/college'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/dashboard_information_bar.png"></img>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/schooltraits'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/about__information_bar.png"></img>
                                    School Traits
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/students'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
                                    Students
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admissions'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/admission.png"></img>
                                    Admissions
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/building'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/buildings_information_bar.png"></img>
                                    Building
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/sports'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/sports_information_bar.png"></img>
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/faculty'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
                                    Faculty
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/finances'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/dollar_character.png"></img>
                                    Finances
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/objectives'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/objectives_information_bar.png"></img>
                                    Objectives
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/store'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/store_information_bar.png"></img>
                                    Store
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/about__information_bar.png"></img>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/launch'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/exit_information_bar.png"></img>
                                    Exit
                                </Link>
                            </li>
                        </ul>
                        {/*<button class="btn btn-success playmode">PLAY MODE</button>*/}
                    </div>
                </nav>
            </div>

        );
    }
}
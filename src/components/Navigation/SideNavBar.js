import React from 'react';
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
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
        let page = this.props.pageActive;
        return(
            <div className="col-md-2">
                <nav className="sidebar bg-light col-md-2">
                    <div className="sidebar-sticky">
                        <img id="logo" src="resources/images/college_world_icons/logo.png"></img>
                        <ul className="nav flex-column">
                            {/*<li className="nav-item"><Link to='/launch'>Launch</Link></li>*/}

                            <li>
                                <NavLink
                                    to='/college'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/dashboard_information_bar.png"></img>
                                    Dashboard
                                </NavLink>
                                {/*<Link to='/college'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/dashboard_information_bar.png"></img>*/}
                                {/*    <h3 className='active' onClick={this.props.pages.dashboard} >Dashboard</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/schooltraits'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/about__information_bar.png"></img>
                                    School Traits
                                </NavLink>
                                {/*<Link to='/schooltraits'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/about__information_bar.png"></img>*/}
                                {/*    <h3 onClick={this.props.pages.traits}> School Traits</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/students'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
                                    Students
                                </NavLink>
                                {/*<Link to='/students'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>*/}
                                {/*    <h3 onClick={this.props.pages.students}> Students</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/admissions'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/admission.png"></img>
                                    Admissions
                                </NavLink>
                                {/*<Link to='/admissions'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/admission.png"></img>*/}
                                {/*    <h3 onClick={this.props.pages.admissions}> Admissions</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/building'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/buildings_information_bar.png"></img>
                                    Buildings
                                </NavLink>
                                {/*<Link to='/building'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/buildings_information_bar.png"></img>*/}
                                {/*    <h3 onClick={this.props.pages.buildings}>Buildings</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/sports'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/sports_information_bar.png"></img>
                                    Sports
                                </NavLink>
                                {/*<Link to='/sports'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/sports_information_bar.png"></img>*/}
                                {/*    <h3 onClick={this.props.pages.sports}> Sports</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/faculty'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
                                    Faculty
                                </NavLink>
                                {/*<Link to='/faculty'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>*/}
                                {/*    <h3 onClick={this.props.pages.faculty}>Faculty</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/finances'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/dollar_character.png" height="27"></img>
                                    Finance
                                </NavLink>
                                {/*<Link to='/finances'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/dollar_character.png" height="27"></img>*/}
                                {/*    <h3 onClick={this.props.pages.finance}>Finance</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/objectives'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/objectives_information_bar.png"></img>
                                    Objectives
                                </NavLink>
                                {/*<Link to='/objectives'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/objectives_information_bar.png"></img>*/}
                                {/*    <h3 onClick={this.props.pages.objectives}>Objectives</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/store'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/store_information_bar.png"></img>
                                    Store
                                </NavLink>
                                {/*<Link to='/store'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/store_information_bar.png"></img>*/}
                                {/*    <h3 onClick={this.props.pages.store}>Store</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/about__information_bar.png"></img>
                                    About
                                </NavLink>
                                {/*<Link to='/about'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/about__information_bar.png"></img>*/}
                                {/*    <h3 onClick={this.props.pages.about}>About</h3>*/}
                                {/*</Link>*/}
                            </li>
                            <li>
                                <NavLink
                                    to='/launch'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/exit_information_bar.png"></img>
                                    Exit
                                </NavLink>
                                {/*<Link to='/launch'>*/}
                                {/*    <img className="nav-item-icons" src="resources/images/college_world_icons/exit_information_bar.png"></img>*/}
                                {/*    Exit*/}
                                {/*</Link>*/}
                            </li>
                        </ul>
                        {/*<button class="btn btn-success playmode">PLAY MODE</button>*/}
                    </div>
                </nav>
            </div>

        );

    }
}
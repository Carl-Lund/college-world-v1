import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Notification from "../Notifications/Notifications";

export default class SideNavBar extends React.Component {

    render() {

        let collegeName = this.props.collegeName;
        let currentBalance = this.props.everything.college.availableCash.toLocaleString();
        let studentFacultyRatio = this.props.everything.college.studentFacultyRatioRating;
        let timeUntilNextSemester = 75 - Math.round((this.props.everything.college.hoursAlive - 1) / 24 + 1);
        let totalStudents = this.props.everything.college.numberStudentsAdmitted;


        return (
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
                                <Link to='/students'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
                                    Students
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admissions'>
                                    <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
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
                            {/*<li><Link to='/currentBalance'>Balance</Link></li>*/}
                            {/*<li><Link to='/currentDay'>Current Day</Link></li>*/}
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
                        {/*</div>*/}
                    </div>
                </nav>
            </div>
            // <div className="col-md-2">
            //     <Navbar sticky="top" className="sidebar col-md-2" bg="dark" variant="dark" expand="lg">
            //         <div className="sidebar-sticky">
            //             {/*<Navbar.Brand><img id="logo" src="resources/images/college_world_icons/logo.png"></img></Navbar.Brand>*/}
            //             <ul className="nav flex-column">
            //
            //                 <li><Navbar.Brand className="row"  href="#home">{collegeName}</Navbar.Brand></li>
            //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //             <Navbar.Collapse id="basic-navbar-nav">
            //                 <Nav className="mr-auto">
            //                     <li><Nav.Item>Total Balance: <br />
            //                         ${currentBalance}</Nav.Item></li>
            //                     <li><Nav.Item>Seats Occupied: <br />
            //                         {totalStudents}</Nav.Item></li>
            //                         <li><Nav.Item>Student Faculty Ratio:<br />
            //                         {studentFacultyRatio}</Nav.Item></li>
            //                     <li><Nav.Item>
            //                         <Button  variant="primary"> Notifications <span className="badge badge-light">4</span></Button>
            //                         <Notification />
            //                     </Nav.Item></li>
            //
            //                 </Nav>
            //             </Navbar.Collapse>
            //             <Navbar.Collapse class = "justify-content-end">
            //                 <Nav>
            //                     <Nav.Item >
            //                         <Button onClick={this.fetchData} variant="success">Jump To Next Day</Button>
            //                     </Nav.Item>
            //                     <Nav.Item href="#link">Time Until Next Semester:<br />
            //                         {timeUntilNextSemester}
            //                     </Nav.Item>
            //                 </Nav>
            //             </Navbar.Collapse>
            //             </ul>
            //         </div>
            //     </Navbar>
            // </div>
        );
    }
}
//
//             <ul className="nav flex-column">
//                 <li className="nav-item">
//                     <Link to='/college'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/dashboard_information_bar.png"></img>
//                         Dashboard
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to='/students'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
//                         Students
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to='/admissions'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
//                         Admissions
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to='/building'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/buildings_information_bar.png"></img>
//                         Building
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to='/sports'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/sports_information_bar.png"></img>
//                         Sports
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to='/faculty'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
//                         Faculty
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to='/objectives'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/objectives_information_bar.png"></img>
//                         Objectives
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to='/store'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/store_information_bar.png"></img>
//                         Store
//                     </Link>
//                 </li>
//                 {/*<li><Link to='/currentBalance'>Balance</Link></li>*/}
//                 {/*<li><Link to='/currentDay'>Current Day</Link></li>*/}
//                 <li className="nav-item">
//                     <Link to='/about'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/about__information_bar.png"></img>
//                         About
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to='/launch'>
//                         <img className="nav-item-icons" src="resources/images/college_world_icons/exit_information_bar.png"></img>
//                         Exit
//                     </Link>
//                 </li>
//             </ul>
//             {/*<button class="btn btn-success playmode">PLAY MODE</button>*/}
//             {/*</div>*/}
//         </div>
//     </nav>
// </div>
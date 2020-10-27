import React from 'react';
import {Link} from "react-router-dom";

export default class SideNavBar extends React.Component {

    render() {
        return (
            <aside className="col-md-2">
                <nav className="sidebar bg-light col-md-2">
                    <div className="sidebar-sticky">
                        <img id="logo" src="resources/images/college_world_icons/logo.png"></img>

                        {/*<div className="balance">*/}
                        {/*    <img id="dollar-sign" src="resources/images/college_world_icons/dollar_character.png"></img>*/}
                        {/*    <h3><strong>420,420</strong></h3>*/}
                        {/*    <h5>Total Balance</h5>*/}
                        {/*</div>*/}
                        {/*<div className="nav flex-column">*/}
                        {/*    <button type="button" className="navbar-toggle" data-toggle="collapse"*/}
                        {/*            data-target="#myNavbar">*/}
                        {/*        <span className="icon-bar"></span>*/}
                        {/*        <span className="icon-bar"></span>*/}
                        {/*        <span className="icon-bar"></span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*<div className="collapse navbar-collapse" id="myNavbar">*/}
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
            </aside>
        );
    }
}
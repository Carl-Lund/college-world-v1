import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import CollegeLaunchPad from "../College/CollegeLaunchPad";
import Students from "../Students/Students";
import Sports from "../Sports/Sports";
import Faculty from "../Faculty/Faculty";
import Objectives from "../Objectives/Objectives";
import Store from "../Store/Store";
import About from "../About/About";
import Buildings from "../Buildings/Buildings";
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentBalance from "../CurrentBalance/CurrentBalance";
import CollegeOpenCreate from "../College/CollegeOpenCreate";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import PlayMode from "../College/PlayMode";
import PopupEventHandler from "../PopupEvents/PopupEventHandler";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launchStatus: 'collegeNotChosen',
            everything: null,
            collegeName: ""
        };
        this.replaceEverything = this.replaceEverything.bind(this)
        this.setCollegeName = this.setCollegeName.bind(this)
        this.setLaunchStatus = this.setLaunchStatus.bind(this)
        this.changeTimeFunction = this.changeTimeFunction.bind(this);
        this.getNavBar = this.getNavBar.bind(this);
        this.getSideBar = this.getSideBar.bind(this);

        this.timing = 2000;
        this.debugDaySpeedRef = React.createRef();
    }

    replaceEverything(newEverything) {
        this.setState({launchStatus:'loadingDone', everything: newEverything})
    }

    setCollegeName(newCollegeName) {
        this.setState({collegeName:newCollegeName})
    }

    setLaunchStatus(newLaunchStatus) {
        this.setState({launchStatus:newLaunchStatus})
    }

    changeTimeFunction = (f) => {
        // debug
        this.timing = this.debugDaySpeedRef.current.value;
        if (this.timing < 1000) {
            console.log("Timing less than 1000");
            this.timing = 2000;
        }
        if (f === 0) {
            console.log("PLAY");
            clearInterval(this.timer);
            this.timer = setInterval(() => this.advanceDay(), this.timing);
        } else if (f === 1) {
            console.log("PAUSE");
            clearInterval(this.timer);
        } else if (f === 2) {
            console.log("FAST FORWARD");
            clearInterval(this.timer);
            this.timer = setInterval(() => this.advanceDay(), this.timing/2);
        }
    }

    componentWillUnmount() {
        console.log("App unmounting.");
        clearInterval(this.timer);
        this.timer = null;
    }

    componentDidMount() {
        this.setState({ launchStatus: 'loadingInProgress' });
        clearInterval(this.timer);
        // debug
        this.timing = this.debugDaySpeedRef.current.value;
        if (this.timing < 1000) {
            console.log("Timing less than 1000");
            this.timing = 2000;
        }
        // Comment out the line below if you want to have timer off by default.
        //this.timer = setInterval(() => this.advanceDay(), this.timing);

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/everything/' + this.state.collegeName)
            .then(response => response.json())
            .then(data => {this.setState({ launchStatus:'loadingDone', everything: data });
                console.log("Fetched college data " + data)
            });
    }

    advanceDay = () => {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/' + this.state.collegeName + '/nextDay')
            .then(response => response.json())
            .then(data => {
                this.setState({isLoading: false, everything: data});
                this.setState({isLoading: false, everything: data});
                clearInterval(this.timer);
                // debug
                this.timing = this.debugDaySpeedRef.current.value;
                if (this.timing < 1000) {
                    console.log("Timing less than 1000");
                    this.timing = 2000;
                }
                this.timer = setInterval(() => this.advanceDay(), this.timing);
                console.log(data);
            });
    }

    getNavBar() {
        const {launchStatus, everything, collegeName} = this.state;
        if((everything === null) || (everything === "")) {
            if(window.location.pathname!="/launch")
                return (<a href="/launch">go to /launch</a>);
            else
                return (<div/>);
        }

        return (<Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">{collegeName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }

    getSideBar() {
        const {launchStatus, everything, collegeName} = this.state;

        if((everything === null) || (everything === "")) {
            return (<div/>);
        }

        return (<aside className="col-md-2">

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
        </aside>);
    }
    render() {
        const {launchStatus, everything, collegeName} = this.state;

        //
        // if (launchStatus || !everything ) {
        //      return (<div><CollegeLaunchPad collegeName={collegeName} launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName} setLaunchStatus={this.setLaunchStatus} /></div>);
        // }

        return (
            <div>
                <Router>
                    <div className="container-fluid">
                        {this.getNavBar()}
                        <div className="row">
                        {this.getSideBar()}
                        <main className="col-md-10">
                            <Route path="/launch" render={() => <CollegeOpenCreate collegeName={collegeName} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName}  setLaunchStatus={this.setLaunchStatus}/>} />
                            <Route path="/about" render={() => <About everything={everything} />} />
                            <Route path="/college" render={() => <CollegeLaunchPad collegeName={collegeName} launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName} changeTimeFunction={this.changeTimeFunction} />}/>
                            <Route path="/building" render={() => <Buildings everything={everything} replaceEverything={this.replaceEverything} />} />
                            <Route path="/students" render={() => <Students everything={everything} />} />
                            <Route path="/objectives" render={() => <Objectives everything={everything} />} />
                            <Route path="/store" render={() => <Store everything={everything} />} />
                            <Route path="/faculty" render={() => <Faculty everything={everything} replaceEverything={this.replaceEverything}/>} />
                            <Route path="/sports" render={() => <Sports collegeName={collegeName} everything={everything} collegeName={collegeName} launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName}  />}/>
                            <Route path="/about" render={() => <About everything={everything} />} />
                            <Route path="/currentDay" render={() => <CurrentDay everything={everything} />} />
                            <Route path="/currentBalance" render={() => <CurrentBalance everything={everything} />} />
                        </main>
                    </div>
                </div>
                </Router>
                <div className="well well-sm">
                    Refresh Speed (ms)
                    <input id="debugDaySpeed" ref={this.debugDaySpeedRef} type={"number"} placeholder={"1000 ms"} defaultValue={"2000"}/>
                </div>
            </div>

        );
    }
}


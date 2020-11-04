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
import Admissions from "../Admissions/Admissions";
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentBalance from "../CurrentBalance/CurrentBalance";
import CollegeOpenCreate from "../College/CollegeOpenCreate";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SideNavBar from '../Navigation/SideNavBar'
import TopNavBar from '../Navigation/TopNavBar'
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

        return (<TopNavBar collegeName={collegeName} everything={everything} replaceEverything={this.replaceEverything}/>);

    }

    getSideBar() {
        const {launchStatus, everything, collegeName} = this.state;

        if((everything === null) || (everything === "")) {
            return (<div/>);
        }

        return (<SideNavBar collegeName={collegeName} everything={everything}/>);
    }

    render() {
        const {launchStatus, everything, collegeName} = this.state;

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
                            <Route path="/admissions" render={() => <Admissions everything={everything} />} />
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


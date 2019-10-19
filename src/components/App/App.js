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

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launchStatus: 'collegeNotChosen',
            everything: null
        };
        this.replaceEverything = this.replaceEverything.bind(this)
    }

    replaceEverything(newEverything) {
        this.setState({launchStatus:false, everything: newEverything})
    }

    componentDidMount() {
        this.setState({ launchStatus: 'loadInProgress' });

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/everything/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ launchStatus:'loadingDone', everything: data });
                console.log("Fetched college data " + data)
            });
    }

    render() {
        const { launchStatus, everything} = this.state;
        if (launchStatus || !everything ) {
            return (<div><CollegeLaunchPad launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything}/></div>);
        }

        return (
            <Router>
                <div>
                <aside>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li><a href="college">Dashboard</a></li>
                                    <li><a href="students">Students</a></li>
                                    <li><a href="building">Buildings</a></li>
                                    <li><a href="sports">Sports</a></li>
                                    <li><a href="faculty">Faculty</a></li>
                                    <li><a href="objectives">Objectives</a></li>
                                    <li><a href="store">Store</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </aside>

                <main>
                    <Route path="/about" render={() => <About everything={everything} />} />
                    <Route path="/college" render={() => <CollegeLaunchPad launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything}/>}/>
                    <Route path="/building" render={() => <Buildings everything={everything} replaceEverything={this.replaceEverything} />} />
                    <Route path="/students" render={() => <Students everything={everything} />} />
                    <Route path="/objectives" render={() => <Objectives everything={everything} />} />
                    <Route path="/store" render={() => <Store everything={everything} />} />
                    <Route path="/faculty" render={() => <Faculty everything={everything} />} />
                    <Route path="/sports" render={() => <Sports everything={everything} />} />
                    <Route path="/about" render={() => <About everything={everything} />} />
                </main>
                </div>
            </Router>
        );
    }
}


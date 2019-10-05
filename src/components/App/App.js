import React from 'react';
//import logo from '../../assets/images/logo.svg';
// import './App.css';
import College from "../College/College";
import Students from "../Students/Students";
import Sports from "../Sports/Sports";
import Objectives from "../Objectives/Objectives";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            collegeData: null,
            objectivesData: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ isLoading:false, collegeData: data, objectivesData: null });
                console.log("Fetched college data " + data)
            });

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/gates/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ isLoading:false, collegeData:this.state.collegeData, objectivesData: data });
                console.log("Fetched objectives/gates data " + data)
            });



    }

    render() {
        const { isLoading, collegeData, objectivesData } = this.state;
        if (isLoading || !collegeData || !objectivesData) {
            return <p>Loading...</p>;
        }
        return (
            <div className="App">
                <header className="App-header">
                    <College collegeData={collegeData} objectivesData={objectivesData}/>
                    <Students/>
                    <Objectives/>
                </header>
            </div>
        );
    }
}


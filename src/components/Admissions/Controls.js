import React from 'react';
import Button from "react-bootstrap/Button";
import './Admissions.css'


export default class Controls extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                groupA: "selected",
                groupB: "not-selected",
                groupC: "not-selected"
            }
            this.setSelections()
            this.changeGroupSelectionA = this.changeGroupSelectionA.bind(this);
            this.changeGroupSelectionB = this.changeGroupSelectionB.bind(this);
            this.changeGroupSelectionC = this.changeGroupSelectionC.bind(this);

        }
    changeGroupSelectionA() {
            console.log("A");
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/admission/" + this.props.everything.college.runId + "/changeGroup/" + encodeURI("GroupA")
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
        this.setState({groupA: "selected", groupB: "not-selected", groupC: "not-selected"})
    }

    changeGroupSelectionB() {
        console.log("B");
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/admission/" + this.props.everything.college.runId + "/changeGroup/" + encodeURI("GroupB")
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
        this.setState({groupA: "not-selected", groupB: "selected", groupC: "not-selected"})
    }

    changeGroupSelectionC() {
        console.log("C");
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/admission/" + this.props.everything.college.runId + "/changeGroup/" + encodeURI("GroupC")
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
        this.setState({groupA: "not-selected", groupB: "not-selected", groupC: "selected"})
    }

    setSelections() {
        let group = this.props.everything.admissions.selectedGroup;
        console.log("CALLED " + group);
        if(group === "GroupA") {
            this.state.groupA.setState( "selected");
            this.state.groupB.setState("not-selected");
            this.state.groupC.setState("not-selected");
        }
        else if(group === "GroupB") {
            this.state.groupA.setState("not-selected");
            this.state.groupB.setState("selected");
            this.state.groupC.setState("not-selected");
        }
        else {
            this.state.groupA.setState("not-selected");
            this.state.groupB.setState("not-selected");
            this.state.groupC.setState("selected");
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    {/*<div className="col-sm-3"></div>*/}
                    <div className="col-sm-4" id="button" align="center">
                        <Button id={this.state.groupA} variant="primary" onClick={this.changeGroupSelectionA}> Accept Group A </Button>
                    </div>
                    <div className="col-sm-4" id="button" align="center">
                        <Button id={this.state.groupB}  variant="primary" onClick={this.changeGroupSelectionB}> Accept Group B </Button>
                    </div>
                    <div className="col-sm-4" id="button" align="center">
                        <Button id={this.state.groupC} variant="primary" onClick={this.changeGroupSelectionC}> Accept Group C </Button>
                    </div>
                </div>
            </div>
        );
    }
}
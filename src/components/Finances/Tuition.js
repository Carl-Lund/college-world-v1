import React from 'react';
import "./finances.css"
import Button from "react-bootstrap/Button";

export default class Tuition extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.updateCollegeOnServer = this.updateCollegeOnServer.bind(this);
        this.state = {tuition:this.props.everything.college.yearlyTuitionCost};
    }

    handleOnChange(e) {
        let value = Number(e.target.value); // Converting to a number still works CopyPaste Case.
        if(!isNaN(value)) { // Checks if the incoming value is a number.
            value = // Restricts number to 0-100000 also eliminates trailing zeros.
                (value[0] === '0' && value.length > 1) ? value.slice(1) : // Gets interpreted as a String.
                (value > 100000) ? 100000 : value;
            this.setState({tuition:value});
        }
    }

    setTuition() {
        this.props.everything.college.yearlyTuitionCost = this.state.tuition;
        this.props.replaceEverything(this.props.everything);
        this.updateCollegeOnServer(this.props.everything.college)
    }

    updateCollegeOnServer(college) {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/{this.props.everything.college.runId}',
            {
                method: 'POST',
                body: JSON.stringify(college)
            }
        )
            .then(response => response.json())
            .then(data => {
            });
    }

    render() {
        return (
            <div className="tuition">
                <h4>Tuition</h4>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={this.state.tuition}
                            onChange={this.handleOnChange}
                        />
                        <Button className="form-button" variant="success" onClick={() => this.setTuition()}>Set Tuition</Button>
                    </div>
            </div>

        );
    }
}
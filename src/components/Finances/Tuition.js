import React from 'react';

export default class Tuition extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.updateCollegeOnServer = this.updateCollegeOnServer.bind(this);
    }

    handleOnChange(e) {
        let value = e.target.value
        if(!isNaN(value)) { // Checks if the incoming value is a number.
            value = // Restricts number to 0-100000 also eliminates trailing zeros.
                (value === "") ? 0 :
                (value[0] === '0' && value.length > 1) ? value.slice(1) :
                (value > 100000) ? 100000 : value;
            this.props.everything.college.yearlyTuitionCost = value;
            this.props.replaceEverything(this.props.everything);
            this.updateCollegeOnServer(this.props.everything.college)
        }
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
        const tuition = this.props.everything.college.yearlyTuitionCost;
        return (
            <div className="tuition">
                <h4>Tuition</h4>
                    <div className="form-group">
                        <input
                            className="form-control"
                            value={tuition}
                            onChange={this.handleOnChange}
                        />
                    </div>

            </div>

        );
    }
}
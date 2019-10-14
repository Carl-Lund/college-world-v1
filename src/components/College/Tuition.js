import React from 'react';

export default class Tuition extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.updateCollegeOnServer = this.updateCollegeOnServer.bind(this);
    }

    handleOnChange(e) {
        this.props.everything.college.yearlyTuitionCost = e.target.value;
        this.props.replaceEverything(this.props.everything);
        this.updateCollegeOnServer(this.props.everything.college);
    }

    updateCollegeOnServer(college) {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/acorn',
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
            <div className="col-sm-3">
                <div className="well well-sm">
                    <legend>Tuition</legend>
                    <input
                        value={tuition}
                        onChange={this.handleOnChange}
                    />
                </div>
            </div>

        );
    }
}
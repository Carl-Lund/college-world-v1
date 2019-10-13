import React from 'react';

export default class Tuition extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.updateCollegeOnServer = this.updateCollegeOnServer.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ isLoading:false, everything: data });
                console.log("Fetched college data " + data)
            });

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
            <div className="container">
                <fieldset>
                    <legend>Tuition</legend>
                    <input
                        value={tuition}
                        onChange={this.handleOnChange}
                    />
                </fieldset>
            </div>
        );
    }
}
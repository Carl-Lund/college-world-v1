import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class College extends React.Component {
    constructor(props) {
        super(props);

        // The state hold information about the college retrieved from College World App
        this.state = {
            collegeData: null,
        };
    }
    componentDidMount() {
        // Fetch data through the REST College World interface
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/acorn')
            .then(response => response.json())
            .then(collegeData => {this.setState({ collegeData });
                console.log("Fetched college data " + collegeData)
            });
    }

    render() {
        return (
            <div>
                <h2>Start of college view...</h2>
                <Navigation />
                {this.state.collegeData && (
                    <h2>College balance = {this.state.collegeData.availableCash}</h2>
                    )
                }

            </div>
        );
    }
}
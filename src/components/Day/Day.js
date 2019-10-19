import React from 'react';

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData = () => {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/acorn/nextDay')
            .then(response => response.json())
            .then(data => {this.setState({ isLoading:false, everything: data });
                this.props.replaceEverything(data)
            });
    }

    render() {
        return (
            <div className="container">
                <h3>Day {((this.props.everything.college.hoursAlive - 1) / 24 + 1)}</h3>
                <button onClick={this.fetchData}>Next Day</button>
            </div>
        );
    }
}
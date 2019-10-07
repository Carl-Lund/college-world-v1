import React from 'react';

export default class Day extends React.Component {
    fetchData = () => {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/acorn/nextDay')
            .then(response => response.json())
            .then(data => {this.setState({ isLoading:false, everything: data });
                console.log("Fetched college data " + data)
            });
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-2">
                    <div className="row">
                        <div className="well well-sm">
                            <h3>Day {((this.props.everything.college.hoursAlive-1)/24 + 1)}</h3>
                                <button onClick={this.fetchData}>Next Day</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
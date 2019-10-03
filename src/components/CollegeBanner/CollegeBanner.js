import React from 'react';

export default class College extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collegedata: null,
            gatedata: null,
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/acorn')
            .then(response => response.json())
            .then(collegedata => {this.setState({ collegedata });
                console.log("Fetched college data " + collegedata)
            });
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/gates/acorn')
            .then(response => response.json())
            .then(gatedata => {this.setState({ gatedata });
                console.log("Fetched college data " + gatedata)
            });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        {this.state.collegedata && (
                            <h2>College balance = ${this.state.collegedata.availableCash}</h2>
                        )
                        }
                        <div className="col-md-12">
                            <h2>You are on level [] </h2>
                            <h3>You need [] students to get to the next level.</h3>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h2>Balance</h2>h
                    </div>
                </div>
            </div>
        );
    }
}
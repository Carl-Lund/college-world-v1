import React from 'react';

export default class College extends React.Component {

    render() {
        if (!this.props.collegeData) {
            return <p>Loading...</p>;
        }

         return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <h2>College balance = ${this.props.collegeData.availableCash}</h2>
                        <div className="col-md-12">
                            <h2>You are on level {this.props.objectivesData[0].level} </h2>
                            <h3>You need [] students to get to the next level.</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
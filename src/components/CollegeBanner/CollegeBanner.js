import React from 'react';

export default class College extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

         return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <h2>College balance = ${this.props.everything.college.availableCash}</h2>
                        <div className="col-md-12">
                            <h2>You are on level {this.props.everything.objectives.currentLevel} </h2>
                            <h3>You need {this.props.everything.objectives.studentsNeededForNextLevel} students to get to the next level.</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
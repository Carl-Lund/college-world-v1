import React from 'react';
import Day from "../Day/Day";

export default class CurrentLevel extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

        return (
            <div className="container">
                <div className="well well-sm">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>You are on level {this.props.everything.objectives.currentLevel} </h3>
                            <h4>You need {this.props.everything.objectives.studentsNeededForNextLevel} students to get
                                to the next level.</h4>
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
                                    {this.props.everything.objectives.studentCount} /
                                    {this.props.everything.objectives.studentCount +
                                    this.props.everything.objectives.studentsNeededForNextLevel} students
                                </div>
                            </div>
                            <h4>Balance ${this.props.everything.college.availableCash}</h4>

                            <Day everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
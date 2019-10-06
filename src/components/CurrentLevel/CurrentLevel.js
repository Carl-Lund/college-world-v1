import React from 'react';

export default class CurrentLevel extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>You are on level {this.props.everything.objectives.currentLevel} </h2>
                            <h3>You need {this.props.everything.objectives.studentsNeededForNextLevel} students to get
                                to the next level.</h3>
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
                                    {this.props.everything.objectives.studentCount} /
                                    {this.props.everything.objectives.studentCount +
                                    this.props.everything.objectives.studentsNeededForNextLevel} students
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
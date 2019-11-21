import React from 'react';
import CollegeHappiness from "../CollegeDashboard/CollegeHappiness";
import CollegeRetention from "../CollegeDashboard/CollegeRetention";
import StudentStatistics from "../CollegeDashboard/StudentStatistics";
import Tuition from "../College/Tuition";
import PlayMode from "../College/PlayMode";

export default class CollegeDashboard extends React.Component {

    render() {
        return (
            <div className="card-deck my-3">
                <CollegeHappiness everything={this.props.everything}/>
                <CollegeRetention everything={this.props.everything}/>
            </div>
        );
    }
}
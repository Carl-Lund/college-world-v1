import React from 'react';
import CollegeHappiness from "../CollegeDashboard/CollegeHappiness";
import CollegeRetention from "../CollegeDashboard/CollegeRetention";
import CollegeBuildings from "../CollegeDashboard/CollegeBuildings";
import CollegeFinancialHappiness from "../CollegeDashboard/CollegeFinancialHappiness";
import CollegeRecreationalHappiness from "../CollegeDashboard/CollegeRecreationalHappiness";
import CollegeStudentHealth from "../CollegeDashboard/CollegeStudentHealth";
import StudentStatistics from "../CollegeDashboard/StudentStatistics";
import Tuition from "../College/Tuition";
import PlayMode from "../College/PlayMode";

export default class Admissions extends React.Component {
    render() {

        return (
            <div className="card-deck my-3">
                <CollegeHappiness everything={this.props.everything}/>
                <CollegeRetention everything={this.props.everything}/>
                <CollegeBuildings everything={this.props.everything}/>
                <CollegeStudentHealth everything={this.props.everything}/>
                <CollegeRecreationalHappiness everything={this.props.everything}/>
                <CollegeFinancialHappiness everything={this.props.everything}/>
            </div>
        );
    }
}

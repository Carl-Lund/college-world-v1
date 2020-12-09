import React from 'react';
import CollegeHappiness from "../CollegeDashboard/CollegeHappiness";
import CollegeRetention from "../CollegeDashboard/CollegeRetention";
import CollegeBuildings from "../CollegeDashboard/CollegeBuildings";
import CollegeFinancialHappiness from "../CollegeDashboard/CollegeFinancialHappiness";
import CollegeRecreationalHappiness from "../CollegeDashboard/CollegeRecreationalHappiness";
import CollegeStudentHealth from "../CollegeDashboard/CollegeStudentHealth";
import StudentStatistics from "../CollegeDashboard/StudentStatistics";
import Tuition from "../Finances/Tuition";
import PlayMode from "../College/PlayMode";
export default class CollegeDashboard extends React.Component {

    render() {
        return (
            <div className="card-deck my-3">
                <CollegeHappiness studentBodyHappiness={this.props.everything.college.studentBodyHappiness}/>
                <CollegeRetention retentionRate={this.props.everything.college.retentionRate}/>
                <CollegeBuildings totalBuildingHealth={this.props.everything.college.totalBuildingHealth}/>
                <CollegeStudentHealth studentHealthRating = {this.props.everything.college.studentHealthRating}/>
                <CollegeRecreationalHappiness studentRecreationalHappiness={this.props.everything.college.studentRecreationalHappiness}/>
                <CollegeFinancialHappiness studentFinancialHappiness={this.props.everything.college.studentFinancialHappiness}/>
                </div>
        );
    }
}
import React from 'react';
import CollegeHappiness from "../CollegeDashboard/CollegeHappiness";
import CollegeRetention from "../CollegeDashboard/CollegeRetention";
import CollegeFinancialHappiness from "../CollegeDashboard/CollegeFinancialHappiness";
import CollegeRecreationalHappiness from "../CollegeDashboard/CollegeRecreationalHappiness";
import CollegeStudentHealth from "../CollegeDashboard/CollegeStudentHealth";
export default class CollegeDashboard extends React.Component {

    render() {
        return (
            <div className="card-deck my-3">
                <CollegeHappiness studentBodyHappiness={this.props.everything.college.studentBodyHappiness}/>
                <CollegeRetention retentionRate={this.props.everything.college.retentionRate}/>
                <CollegeStudentHealth studentHealthRating = {this.props.everything.college.studentHealthRating}/>
                <CollegeRecreationalHappiness studentRecreationalHappiness={this.props.everything.college.studentSocialHappiness}/>
                <CollegeFinancialHappiness studentFinancialHappiness={this.props.everything.college.studentCostHappiness}/>
                </div>
        );
    }
}
import React from 'react';
import StudentsTable from "./StudentsTable";
import StudentsPanel from "./StudentPanel";
import StudentFeedback from "./StudentFeedback";
import "./Students.css";
import StudentAcademicHappiness from "./StudentAcademicHappiness";
import StudentBuildingHappiness from "./StudentBuildingHappiness";
import StudentProfessorHappiness from "./StudentProfessorHappiness";
import StudentOverallHappiness from "./StudentOverallHappiness";
import StudentHealthHappiness from "./StudentHealthHappiness";
import StudentFinancialHappiness from "./StudentFinancialHappiness";
import TipsBox from "../College/TipsBox";

export default class Students extends React.Component {
    constructor(props) {
        super(props);
        this.hideShowTipsText = this.hideShowTipsText.bind(this);
        this.state = {
            selectedStudent: 0,
            hideShowTipsText : "Hide Tips",
            isHide: false,
            showNextTip: true
        };
    }

    studentSwitch = (s) => {
        this.setState({
            selectedStudent: s
        });
    }

    hideShowTipsText = () => {
        let tips = document.getElementById('hideTips');
        if(this.state.isHide){
            this.state.hideShowTipsText = "Hide tips"
            this.setState({isHide: false})
            tips.style.display = "block";
        }else {
            this.state.hideShowTipsText = "Show tips"
            this.setState({isHide: true})
            tips.style.display = "none";
        }
        this.setState({ hideShowTipsText: this.state.hideShowTipsText});
    }

    render() {
        console.log(this.props.everything);
        if (this.props.everything == null) {
            return(<h4>No students.</h4>);
        }

        return (
            <div className="container" style={{maxHeight: "90%"}}>
                <div className="cardDeck">
                    <h1 class="student-happiness-header">Student Body Happiness Statistics</h1>
                    <div className="card-deck my-3">
                        <StudentOverallHappiness everything={this.props.everything}/>
                        <StudentAcademicHappiness everything={this.props.everything}/>
                        <StudentBuildingHappiness everything={this.props.everything}/>
                        <StudentProfessorHappiness everything={this.props.everything}/>
                        <StudentHealthHappiness everything={this.props.everything}/>
                        <StudentFinancialHappiness everything={this.props.everything}/>
                    </div>
                    <div className="social-tips">
                        <button type="button" onClick={this.hideShowTipsText} className="btn btn-info">{this.state.hideShowTipsText}</button>
                        <div id="hideTips">
                            <TipsBox everything = {this.props.everything} name = {'Social'} tips = {this.props.everything.college.collegeTips.socialTips}/>
                        </div>
                    </div>
                    <div className="card my-3"  style={{width: '100%', display: "inline-block"}}>
                        <StudentFeedback student = {this.props.everything.students[this.state.selectedStudent]}/>
                        <StudentsPanel student = {this.props.everything.students[this.state.selectedStudent]}/>
                        <div className="row px-0" style={{height: '800px', marginTop: '20px', float: 'left', width: '65%'}}>
                            <StudentsTable everything = {this.props.everything} studentSwitch = {this.studentSwitch}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
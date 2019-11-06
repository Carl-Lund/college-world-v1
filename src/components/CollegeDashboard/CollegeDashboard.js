import React from 'react';
import CollegeHappiness from "../CollegeDashboard/CollegeHappiness";
import CollegeRetention from "../CollegeDashboard/CollegeRetention";
import StudentStatistics from "../CollegeDashboard/StudentStatistics";
import Tuition from "../College/Tuition";
import PlayMode from "../College/PlayMode";

export default class CollegeDashboard extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <CollegeHappiness everything={this.props.everything}/>
                    <CollegeRetention everything={this.props.everything}/>
                    {/*<StudentStatistics everything={this.props.everything}/>*/}
                    {/*<Tuition everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>*/}
                    {/*<PlayMode everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>*/}
                </div>
            </div>
        );
    }
}
import React from 'react';
import College from "./College";
import CollegeOpenCreate from "./CollegeOpenCreate";

export default class CollegeLaunchPad extends React.Component {

    render() {
        const everything = this.props.everything;
        const launchStatus = this.props.launchStatus;

        if (launchStatus === 'loadingDone') {
            return (<College isLoading={this.props.isLoading} everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>);
        }

        if (launchStatus === 'collegeNotChosen' || launchStatus === 'loadingInProgress') {
            return (<CollegeOpenCreate collegeName={this.props.collegeName} everything={this.props.everything} replaceEverything={this.props.replaceEverything} setCollegeName={this.props.setCollegeName}  setLaunchStatus={this.props.setLaunchStatus}/>);
        }

        return (
            <div>
                <h4>Waiting: {launchStatus}</h4>
            </div>
        );
    }
}
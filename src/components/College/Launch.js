import React from 'react';
import CollegeOpenCreate from "./CollegeOpenCreate";

export default class Launch extends React.Component {

    render() {
        const everything = this.props.everything;
        const launchStatus = this.props.launchStatus;

        return (
            <div>
                <CollegeOpenCreate collegeName={this.props.collegeName} everything={this.props.everything} replaceEverything={this.props.replaceEverything} setCollegeName={this.props.setCollegeName}  setLaunchStatus={this.props.setLaunchStatus}  setPage={this.props.setPage}/>
            </div>
        );
    }
}
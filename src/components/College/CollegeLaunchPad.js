import React from 'react';
import College from "./College";
import CollegeOpenCreate from "./CollegeOpenCreate";

export default class CollegeLaunchPad extends React.Component {

    render() {
        const everything = this.props.everything;
        const launchStatus = this.props.launchStatus;

        return (
            <div>
                 <College launchStatus={this.props.launchStatus} everything={this.props.everything} replaceEverything={this.props.replaceEverything} changeTimeFunction = {this.props.changeTimeFunction}/>
            </div>
        );
    }
}
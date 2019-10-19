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

        if (launchStatus === 'loadingDone') {
            return (<CollegeOpenCreate everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>);
        }

        return (
            <div>
                <h4>Loading...</h4>
            </div>
        );
    }
}
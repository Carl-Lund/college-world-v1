import React from 'react';
import College from "./College";

export default class CollegeLaunchPad extends React.Component {

    render() {
        return (
            <div>
                 <College launchStatus={this.props.launchStatus} everything={this.props.everything} replaceEverything={this.props.replaceEverything} changeTimeFunction = {this.props.changeTimeFunction}/>
            </div>
        );
    }
}
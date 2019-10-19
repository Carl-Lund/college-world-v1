import React from 'react';
import College from "./College";
import CollegeOpenCreate from "./CollegeOpenCreate";

export default class CollegeLaunchPad extends React.Component {

    render() {
        const everything = this.props.everything;
        const isLoading = this.props.isLoading;

        return (
            <div>
                {(isLoading)
                    ? <CollegeOpenCreate everything={this.props.everything}
                                         replaceEverything={this.props.replaceEverything}/>
                    : <College isLoading={this.props.isLoading} everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>}
            </div>
        );
    }
}
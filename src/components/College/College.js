import React from 'react';
import CollegeBanner from "../CollegeBanner/CollegeBanner";

export default class College extends React.Component {

    render() {
        return (
            <div>
                <CollegeBanner everything={this.props.everything} collegeData={this.props.collegeData} objectivesData={this.props.objectivesData}/>
            </div>
        );
    }
}
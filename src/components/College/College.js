import React from 'react';
import Navigation from "../Navigation/Navigation";
import CollegeBanner from "../CollegeBanner/CollegeBanner";

export default class College extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <CollegeBanner collegeData={this.props.collegeData} objectivesData={this.props.objectivesData}/>
            </div>
        );
    }
}
import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import StackedProgressbar from "./StackedProgressBar";

export default class SocialStatBar extends React.Component {

    render() {

        return (
            <div className="col-sm-2">
                <div className="collegeHappinessBar">
                    <h3 className="text-center">SOCIAL</h3>
                    <br></br>
                    <StackedProgressbar image={"resources/images/socialtrait.png"} impact={this.props.impact} oldRating={this.props.oldRating}/>
                    <br/>
                </div>
            </div>
        );
    }
}
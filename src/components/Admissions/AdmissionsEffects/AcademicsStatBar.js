import React from 'react';
import StackedProgressbar from './StackedProgressBar';
import 'react-circular-progressbar/dist/styles.css';
export default class AcademicsStatBar extends React.Component {

    render() {

        return (
            <div className="col-sm-2">
                <div className="collegeHappinessBar">
                    <h3 className="text-center">ACADEMICS</h3>
                    <br></br>
                    <StackedProgressbar image={"resources/images/academictrait.png"} impact={this.props.impact} oldRating={this.props.oldRating}/>
                    <br/>
                </div>
            </div>
        );
    }
}
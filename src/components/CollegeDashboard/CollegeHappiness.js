import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class CollegeHappiness extends React.Component {

    render() {

        return (
            <div className="col-sm-2">
                <div className="well well-sm">
                    <h4>Happiness</h4>
                    <CircularProgressbar value={this.props.everything.college.studentBodyHappiness} text={this.props.everything.college.studentBodyHappiness} strokeWidth={12} />
                    <br/>
                    <button type="button" href="#happinessDetails" className="btn btn-light"
                            data-toggle="collapse">Details
                    </button>
                    <div id="happinessDetails" className="collapse">
                        The happiness of the students depends on their health, academic success,
                        tuition bills, and how much fun they are having.
                    </div>
                </div>
            </div>
        );
    }
}
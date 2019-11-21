import React from 'react';
import {CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

export default class CollegeRetention extends React.Component {

    render() {

        function getColor(value) {
            let temp;
            temp='#4287f5';
            if (value>=60)
                temp='#37db45';
            else if (value<=49)
                temp='#fc3d17';
            else if (value<=59)
                temp='#fce517';

            return temp;
        }

        let color = getColor(this.props.everything.college.retentionRate);
        return (
            <div className="col-sm-4">
                <div class="card card-body ">
                    <h3 class="card-title">Retention</h3>
                    <CircularProgressbar value={this.props.everything.college.retentionRate} text={this.props.everything.college.retentionRate} strokeWidth={12} styles={buildStyles({pathColor: color, textColor: color})}/>
                    <br/>
                    {/*<button href="#retentionDetails" type="button" className="btn btn-light"*/}
                    {/*        data-toggle="collapse">Details*/}
                    {/*</button>*/}
                    <div id="retentionDetails" className="collapse">
                        The rate is the percentage of students that remained at the college during the last week.
                    </div>
                </div>
            </div>

        );
    }
}
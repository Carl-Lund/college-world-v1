import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class StudentProfessorHappiness extends React.Component {

    render() {

        function getColor(value) {
            let temp;
            temp='#4287f5';
            if (value>=70)
                temp='#37db45';
            else if (value<=39)
                temp='#fc3d17';
            else if (value<=49)
                temp='#ffae17';
            else if (value<=59)
                temp='#fce517';
            else if (value<=69)
                temp='#d3ff21';

            return temp;
        }

        let color=getColor(this.props.everything.college.studentProfessorHappiness);

        return (
            <div className="col-sm-2">
                <div className="studentHappinessBars">
                    <h3 className="text-center">Professors</h3>
                    <CircularProgressbarWithChildren value={this.props.everything.college.studentProfessorHappiness} styles={buildStyles({pathColor: color})}>
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 10, marginTop: -5 }}
                            src="https://image.flaticon.com/icons/svg/1023/1023656.svg"
                        />
                        <div style={{ fontSize: 12}}>
                            <strong>{this.props.everything.college.studentProfessorHappiness}%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                    <br/>
                    {/*<button type="button" href="#happinessDetails" className="btn btn-light"*/}
                    {/*        data-toggle="collapse">Details*/}
                    {/*</button>*/}
                    <div id="happinessDetails" className="collapse">
                        The professor happiness of the students depends on the performance of the faculty.
                    </div>
                </div>
            </div>
        );
    }
}
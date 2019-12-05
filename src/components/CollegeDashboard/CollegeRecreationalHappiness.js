import React from 'react';
import {CircularProgressbar, buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class CollegeRecreationalHappiness extends React.Component {

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

        let color=getColor(33);

        return (
            <div className="col-sm-2">
                <div>
                    <h3 className="text-center">Recreational Satisfaction</h3>
                    <CircularProgressbarWithChildren value={33} styles={buildStyles({pathColor: color})}>
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 30, marginTop: -5 }}
                            src="https://image.flaticon.com/icons/svg/992/992604.svg"
                        />
                        <div style={{ fontSize: 12, marginTop: -5 }}>
                            <strong>33%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                    {/*<button type="button" href="#happinessDetails" className="btn btn-light"*/}
                    {/*        data-toggle="collapse">Details*/}
                    {/*</button>*/}
                    <div id="happinessDetails" className="collapse">
                        The happiness of the students depends on their health, academic success,
                        tuition bills, and how much fun they are having.
                    </div>
                </div>
            </div>
        );
    }
}
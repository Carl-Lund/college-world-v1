import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
                    <h3>Recreational Happiness</h3>
                    <CircularProgressbar
                        value={33}
                        text={"33%"}
                        strokeWidth={50}
                        styles={buildStyles({
                            strokeLinecap: "butt",
                            textColor:"#61605d",
                            pathColor:color,
                    })}/>
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
import React from 'react';
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Ratings.css"
export default class CollegeRecreationalHappiness extends React.Component {

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

        let color=getColor(this.props.studentRecreationalHappiness);

        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                The recreational satisfaction is based on how well the school's sports teams are doing
            </Tooltip>
        );
        return (
            <div className="col-sm-2">
                <div>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 450 }}
                        overlay={renderTooltip}
                    >
                        <h3 className="text-center">Recreational Satisfaction
                            <img
                                alt="recreationalImage"
                                className="info"
                                src="resources/images/info.png"
                            />
                        </h3>
                    </OverlayTrigger>
                    <CircularProgressbarWithChildren value={this.props.studentRecreationalHappiness} styles={buildStyles({pathColor: color})}>
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            alt="recreationalImage"
                            className="circular-progress-indicator-large"
                            src="/resources/images/progress_icons/relax.png"
                        />
                        <div style={{ fontSize: 12}}>
                            <strong>{this.props.studentRecreationalHappiness}%</strong>
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
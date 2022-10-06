import React from 'react';
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Ratings.css"

export default class CollegeRetention extends React.Component {

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

        let color = getColor(this.props.retentionRate);
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                The retention rating is based on the faculty's performance and simply retention
            </Tooltip>
        );
        return (
            <div className="col-sm-2">
                <div className="collegeHappinessBar">
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 450 }}
                        overlay={renderTooltip}
                    >
                        <h3 className="text-center">Retention
                            <img
                                alt="retentionImage"
                                className="info"
                                src="resources/images/info.png"
                            />
                        </h3>
                    </OverlayTrigger>
                    <CircularProgressbarWithChildren value={this.props.retentionRate} styles={ buildStyles({pathColor: color})}>
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            alt="retentionImage"
                            className="circular-progress-indicator-large"
                            src="/resources/images/progress_icons/customer.png"
                        />
                        <div style={{ fontSize: 12}}>
                            <strong>{this.props.retentionRate}%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
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
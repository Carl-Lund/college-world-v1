import React from 'react';
import { buildStyles, CircularProgressbarWithChildren, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Ratings.css"

export default class CollegeFinancialHappiness extends React.Component {

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

        let color=getColor(this.props.studentFinancialHappiness);
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                The financial satisfaction is based on the tuition satisfaction
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
                        <h3 className="text-center">Financial Satisfaction
                            <img
                                alt="financialIcon"
                                className="info"
                                src="resources/images/info.png"
                            />
                        </h3>
                    </OverlayTrigger>
                    <CircularProgressbarWithChildren value={this.props.studentFinancialHappiness} styles={buildStyles({pathColor: color})}>
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            alt="financialIcon"
                            className="circular-progress-indicator-large"
                            src="/resources/images/progress_icons/money.png"
                        />
                        <div style={{ fontSize: 12}}>
                            <strong>{this.props.studentFinancialHappiness}%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                    <br/>
                </div>
            </div>
        );
    }
}
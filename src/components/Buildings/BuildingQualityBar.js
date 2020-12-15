import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ProgressBar from "react-bootstrap/ProgressBar";

export default class BuildingQualityBar extends React.Component {

    render() {

        function getColor(value) {
            let temp;
            temp='#4287f5';
            if (value>=79)
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

        let color=getColor(this.props.totalBuildingHealth);



        return (
            <div  style={{width: 150}}>
                <h3>Average Building Quality</h3>
                <ProgressBar now={this.props.totalBuildingHealth} max={100} />
                <div style={{ fontSize: 12}}>
                    <strong>{this.props.totalBuildingHealth}%</strong>
                </div>
            </div>
        );
    }
}
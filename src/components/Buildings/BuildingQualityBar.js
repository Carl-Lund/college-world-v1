import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from "react-bootstrap/ProgressBar";

export default class BuildingQualityBar extends React.Component {

    render() {
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
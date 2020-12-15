import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../CollegeDashboard/Ratings.css";
export default class CurrentLevel extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                The student population/The number of students neccessary to level up
            </Tooltip>
        );
        return (
            <div className="container">
                <div className="card-deck">
                    <div className="card card-body col-sm-6">
                        <h1 className="card-title">{this.props.everything.college.runId}</h1>
                        <h2>Level {this.props.everything.objectives.currentLevel} </h2>
                        <ProgressBar now={this.props.everything.objectives.studentCount} max={this.props.everything.objectives.studentsNeededForLevel[this.props.everything.objectives.currentLevel + 1]}/>
                        <OverlayTrigger
                            placement="bottom-left"
                            delay={{ show: 250, hide: 450 }}
                            overlay={renderTooltip}
                        >
                            <h3>{this.props.everything.objectives.studentCount}/{this.props.everything.objectives.studentsNeededForLevel[this.props.everything.objectives.currentLevel + 1]}
                                <img
                                    alt="studentImage"
                                    className="info"
                                    src="resources/images/info.png"
                                />
                            </h3>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        );
    }
}
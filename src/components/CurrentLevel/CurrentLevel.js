import React from 'react';
import Day from "../Day/Day";
import Tuition from "../Finances/Tuition";
import ProgressBar from 'react-bootstrap/ProgressBar'
import PlayMode from "../College/PlayMode";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
export default class CurrentLevel extends React.Component {

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }
        let maxStudents = this.props.everything.objectives.studentCount + this.props.everything.objectives.studentsNeededForNextLevel;

        let cashColor = "black";
        if(this.props.everything.college.availableCash <= 20000){
            cashColor = "red";
        }
        let totalPotentialStudents = this.props.everything.admissions.groupA.length +
            this.props.everything.admissions.groupB.length +
            this.props.everything.admissions.groupC.length;

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
                            <h3>{this.props.everything.objectives.studentCount}/{this.props.everything.objectives.studentsNeededForLevel[this.props.everything.objectives.currentLevel + 1]}</h3>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        );
    }
}
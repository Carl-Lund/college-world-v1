import React from "react";
import Controls from "../Students/StudentsTable";
import StudentsTable from "../Students/StudentsTable";
import PotentialStudentTable from "./PotentialStudentTable";

export default class FreshmenPanel extends React.Component {
    render() {
        return(
            <PotentialStudentTable showapp={this.props.popup} label = {this.props.label} admissions={this.props.admissions} everything = {this.props.everything} />
        );
    }
}
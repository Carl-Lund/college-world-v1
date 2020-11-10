import React from "react";
import Controls from "../Students/StudentsTable";
import StudentsTable from "../Students/StudentsTable";
import PotentialStudentTable from "./PotentialStudentTable";

export default class FreshmenPannel extends React.Component {

    render() {
        return(
            <PotentialStudentTable everything = {this.props.everything} />
        );
    }
}
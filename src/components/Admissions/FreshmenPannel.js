import React from "react";
import Controls from "../Students/StudentsTable";
import StudentsTable from "../Students/StudentsTable";

export default class FreshmenPannel extends React.Component {

    render() {
        return(
            <StudentsTable everything = {this.props.everything} />
        );
    }
}
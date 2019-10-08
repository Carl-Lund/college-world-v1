import React from 'react';
import StudentsTable from "./StudentsTable";

export default class Students extends React.Component {

    render() {
        return (
            <div>
                <StudentsTable everything = {this.props.everything}/>
            </div>
        );
    }
}
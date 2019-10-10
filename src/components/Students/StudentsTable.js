import React from 'react';
import "./Students.css"
import StudentBubble from './StudentBubble.js';
import Navigation from "../Navigation/Navigation";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
        this.studentTable = createTable(this.props.everything.students);
    }
    
     render() {
        return (
            <div>
                <div className="col-sm-8">
                    <div className="well well-sm">
                        <h4>{this.props.everything.students.length} Students</h4>
                        <div className="pre-scrollable">
                            <div className="studentContainer">
                                {this.studentTable}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        /*
        <Navigation />
        return <h2>This is the overall college view.</h2>;
        */
    }
}

function createTable(data) {
    let table = [];
    console.log(data[2]);
    
    for (let i = 0; i < data.length; i++) {
        table.push(<StudentBubble student = {data[i]}/>)
    }
    return table
}

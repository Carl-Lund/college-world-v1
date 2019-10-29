import React from 'react';
import "./Students.css"
import StudentBubble from './StudentBubble.js';
import Navigation from "../Navigation/Navigation";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studentTable: createTable(this.props.everything.students,  null, this.props)
        }
        this.sort = React.createRef();
    }

    updateTable = () => {
        this.setState({studentTable: createTable(this.props.everything.students, this.sort.current.value, this.props)});
    }

     render() {
        return (
                <div className="col-sm-8" style={{height: '80%'}}>
                    <span className={"label label-info"}>Sort: </span>
                    <select ref={this.sort} onChange={this.updateTable}>
                        <option value={"aToZ"}>Alphabetical A-Z</option>
                        <option value={"zToA"}>Alphabetical Z-A</option>
                        <option value={"overallHappinessHToL"}>Overall Happiness High-Low</option>
                        <option value={"overallHappinessLToH"}>Overall Happiness Low-High</option>
                    </select>
                    <div className="well well-sm" style={{height: '100%'}}>
                        <h4>{this.props.everything.students.length} Students</h4>
                        <div className="pre-scrollable" style={{height: '94%', maxHeight: 'none'}}>
                            <div className="studentContainer">
                                {this.state.studentTable}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

function createTable(students, sort, props) {
    let table = [];
    var studentsArray = Object.keys(students).map(function (key) { return students[key]; });

    if (sort === "aToZ" || typeof sort === typeof null) {
        studentsArray.sort(function(a, b) {
            var nameA = a.name.toUpperCase().split(' ')[1];
            var nameB = b.name.toUpperCase().split(' ')[1];
            if(nameA < nameB) { return -1; }
            if(nameA > nameB) { return 1; }
            return 0;
        });
    }
    else if (sort === "zToA") {
        studentsArray.sort(function(a, b) {
            var nameA = a.name.toUpperCase().split(' ')[1];
            var nameB = b.name.toUpperCase().split(' ')[1];
            if(nameA > nameB) { return -1; }
            if(nameA < nameB) { return 1; }
            return 0;
        });
    }
    else if (sort === "overallHappinessHToL") {
        studentsArray.sort(function(a, b) {
            var happyA = a.happinessLevel;
            var happyB = b.happinessLevel;
            return happyA-happyB;
        });
        studentsArray.reverse();
    }
    else if (sort === "overallHappinessLToH") {
        studentsArray.sort(function(a, b) {
            var happyA = a.happinessLevel;
            var happyB = b.happinessLevel;
            return happyA-happyB;
        });
    } else {
        console.log("invalid sort method");
    }

    for (let i = 0; i < students.length; i++) {
        table.push(<StudentBubble student = {studentsArray[i]} studentNumber = {Object.keys(props.everything.students).find(key => props.everything.students[key] === studentsArray[i])} studentSwitch = {props.studentSwitch}/>)
    }
    return table
}

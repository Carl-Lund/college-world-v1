import React from 'react';
import "../Students/Students.css"
import PotentialStudentBubble from './PotentialStudentBubble.js';

export default class PotentialStudentTable extends React.Component {
    initial = 0;
    final = 25;

    constructor(props) {
        super(props);

        this.state = {
            potentialStudentTable: this.createTable(this.props.admissions, null, this.props, this.initial, this.final)
        }
        this.sort = React.createRef();
    }


    updateTable = () => {
        this.setState({potentialStudentTable: this.createTable(this.props.admissions, this.sort.current.value, this.props, this.initial, this.final)});
        this.updateButtons();
    }

    render() {
        return (
            <div className="col-sm-3" style={{height: '80%', maxWidth: '100%', marginLeft: '.75em'}}>
                <h3 className="studentGroups">{this.props.label}</h3>
                <h4>{this.props.admissions.length} Total Students</h4>
                <br></br>
                <h5 style={{display: 'inline-block'}}>Showing students: {this.initial} - {this.final}</h5>
                <div className="well well-sm" style={{height: '100%'}}>
                    <div className="potentialStudentContainer" style={{width: "100%"}}>
                        {this.state.potentialStudentTable}
                    </div>
                </div>
            </div>
        );
    }


    createTable(students, sort, props, initial, final) {
        let table = [];
        let studentsArray = Object.keys(students).map(function (key) {
            return students[key];
        });

        if (sort === "aToZ" || typeof sort === typeof null) {
            studentsArray.sort(function (a, b) {
                var nameA = a.name.toUpperCase().split(' ')[1];
                var nameB = b.name.toUpperCase().split(' ')[1];
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        } else if (sort === "zToA") {
            studentsArray.sort(function (a, b) {
                let nameA = a.name.toUpperCase().split(' ')[1];
                let nameB = b.name.toUpperCase().split(' ')[1];
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
        } else if (sort === "overallHappinessHToL") {
            studentsArray.sort(function (a, b) {
                var happyA = a.happiness;
                var happyB = b.happiness;
                return happyA - happyB;
            });
            studentsArray.reverse();
        } else if (sort === "overallHappinessLToH") {
            studentsArray.sort(function (a, b) {
                let happyA = a.happiness;
                let happyB = b.happiness;
                return happyA - happyB;
            });
        } else {
            console.log("invalid sort method");
        }

        for (let i = initial; i < studentsArray.length; i++) {
            console.log(studentsArray[i]);
            table.push(<PotentialStudentBubble showapp={this.props.showapp} student={studentsArray[i]}
                                               studentSwitch={props.studentSwitch}/>)
        }

        return table
    }
}

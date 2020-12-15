import React from 'react';
import "../Students/Students.css"
import PotentialStudentBubble from './PotentialStudentBubble.js';

export default class PotentialStudentTable extends React.Component {
    initial = 0;
    final = 30;
    move = 30;

    constructor(props) {
        super(props);
        this.state = {
            prevButton: true,
            nextButton: false,
            potentialStudentTable: this.createTable(this.props.admissions, null, this.props, this.initial, this.final)
        }
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    next = () => {
        this.initial += this.move;
        this.final += this.move;

        if(this.final >= this.props.admissions.length) {
            this.final = this.props.admissions.length;
            this.initial = this.final-this.move;
        }
        this.updateTable();
    }

    prev = () => {
        this.initial -= this.move;
        this.final -= this.move;

        if(this.initial <= 0){
            this.initial = 0;
            this.final = this.move;
        }
        this.updateTable();
    }

    updateTable = () => {
        this.setState({potentialStudentTable: this.createTable(this.props.admissions, this.props, this.initial, this.final)});
        this.updateButtons();
    }

    updateButtons = () => {
        this.setState({prevButton:false})
        this.setState({nextButton:false})
        if(this.initial <= 0) {
            this.setState({prevButton:true})
        }
        if(this.final >= this.props.admissions.length) {
            this.setState({nextButton:true})
        }
    }

    render() {
        return (
            <div className="col-sm-3" style={{maxWidth: '100%'}}>
                <h3 className="studentGroups">{this.props.label}</h3>
                <h4>{this.props.admissions.length} Total Students</h4>
                <br></br>
                <h5 style={{display: 'inline-block'}}>Showing students: {this.initial} - {this.final}</h5>
                <div className="well well-sm" style={{height: '100%'}}>
                    <button type="button" id={this.props.label + '-prev'} className="btn btn-primary" disabled={this.state.prevButton} onClick={this.prev} style={{margin:'0.5em'}}>Previous Page</button>
                    <button type="button" id={this.props.label + '-next'} className="btn btn-primary" disabled={this.state.nextButton} onClick={this.next} style={{margin:'0.5em'}}>Next Page</button>
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

        for (let i = this.initial; i < Math.min(final, studentsArray.length); i++) {
            table.push(<PotentialStudentBubble showapp={this.props.showapp} student={studentsArray[i]}
                                               studentSwitch={props.studentSwitch}/>)
        }
        return table
    }
}

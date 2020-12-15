import React from 'react';
import "./Students.css"
import StudentBubble from './StudentBubble.js';

export default class StudentsTable extends React.Component {
    initial = 0;
    final = 40;
    move = 40;
    constructor(props) {
        super(props);

        this.state = {
            studentTable: createTable(this.props.everything.students,  null, this.props, this.initial, this.final)
        }
        this.sort = React.createRef();
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }


    updateTable = () => {
        this.setState({studentTable: createTable(this.props.everything.students, this.sort.current.value, this.props, this.initial, this.final)});
        this.updateButtons();
    }

    updateButtons = () => {
        let btnnext = document.getElementById('s-nextBtn');
        let btnprev = document.getElementById('s-prevBtn');
        btnnext.disabled = false;
        btnprev.disabled = false;
        if(this.initial <= 0) {
            btnprev.disabled = true;
        }
        if(this.final >= this.props.everything.students.length) {
            btnnext.disabled = true;
        }
    }
     render() {
        return (
            <div className="col-sm-8" style={{height: '80%', maxWidth: '100%', marginLeft: '.75em'}}>
                <h4>{this.props.everything.students.length} Total Students</h4>
                <span className={"label label-info"}>Sort: </span>
                <select ref={this.sort} onChange={this.updateTable}>
                    <option value={"aToZ"}>Alphabetical A-Z</option>
                    <option value={"zToA"}>Alphabetical Z-A</option>
                    <option value={"overallHappinessHToL"}>Overall Happiness High-Low</option>
                    <option value={"overallHappinessLToH"}>Overall Happiness Low-High</option>
                </select>
                <br></br>
                <h5 style={{display: 'inline-block'}}>Showing students: {this.initial} - {this.final}</h5>
                <button type="button" id="s-prevBtn" className="btn btn-primary" onClick={this.prev} style={{margin:'0.5em'}}>Previous Page</button>
                <button type="button" id="s-nextBtn" className="btn btn-primary" onClick={this.next} style={{margin:'0.5em'}}>Next Page</button>
                <div className="well well-sm" style={{height: '100%'}}>
                    <div className="studentContainer" style={{width: "100%"}}>
                        {this.state.studentTable}
                    </div>
                </div>
            </div>
        );
    }

    next = () => {
        this.initial += this.move;
        this.final += this.move;

        if(this.final >= this.props.everything.students.length) {
            this.final = this.props.everything.students.length;
            this.initial = this.final-40;
        }
        this.updateTable();
    }

    prev = () => {
        this.initial -= this.move;
        this.final -= this.move;

        if(this.initial <= 0){
            this.initial = 0;
            this.final = 40;
        }
        this.updateTable();
    }
}

function createTable(students, sort, props, initial, final) {
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
            var happyA = a.happiness;
            var happyB = b.happiness;
            return happyA-happyB;
        });
        studentsArray.reverse();
    }
    else if (sort === "overallHappinessLToH") {
        studentsArray.sort(function(a, b) {
            var happyA = a.happiness;
            var happyB = b.happiness;
            return happyA-happyB;
        });
    } else {
        console.log("invalid sort method");
    }
    if( studentsArray != null) {
        for (let i = initial; i < Math.min(final, studentsArray.length); i++) {
            table.push(<StudentBubble student={studentsArray[i]}
                                      studentNumber={Object.keys(props.everything.students).find(key => props.everything.students[key] === studentsArray[i])}
                                      studentSwitch={props.studentSwitch}/>)
        }
    }
    return table
}

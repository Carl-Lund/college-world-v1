import React from 'react';
import "./Sports.css"

import ReactTable from "react-table";
import "react-table/react-table.css";
import ReactDOM from "react-dom";


export default class CoachesTable extends React.Component {

    constructor(props) {
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.getSalary = this.getSalary.bind(this);
        this.showCoachDetails = this.showCoachDetails.bind(this);
        this.loadCollege = this.loadCollege.bind(this);
        this.fireOrGiveRaise = this.fireOrGiveRaise.bind(this);
    }

    render() {
        const columns = [
        {
            Header: 'Icons',
            Cell: (row) =>
                <div className="icon-col">
                    <img alt="coachAvatar" className= "coachIcon" src={this.props.coaches[row.index].avatarIcon.avatarUrl}></img>
                </div>
        },
        {
            Header: 'Coach name',
            accessor: 'facultyName' // String-based value accessors!
        }, {
            Header: 'Salary',
            Cell: (row) =>
                <div className="container">
                    <div className="row">
                <div className="col-sm-4">
                    <button type="button" onClick={() => this.showDetails(row)} className="btn btn-info">Details</button>

            </div>
                    <div className="col-sm-8">
                        <h5>Salary: {this.getSalary(row.index)}</h5>
                    </div>
                </div>
                    <div className="row">
                        <div id={"showCoach"+row.index} className="detailsInfo">
                            <div className="jumbotronTransp">{this.showCoachDetails(row.index)}</div>
                        </div>
                    </div>
                    </div>

        },{
            Header: 'More options',
            Cell: (row) =>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <button onClick={() => this.fireOrGiveRaise(this.props.coaches[row.index], "GIVE_RAISE")} className="btn btn-info">Give Raise</button>
                        </div>
                        <div className="col-sm-6">
                            <button onClick={() => this.fireOrGiveRaise(this.props.coaches[row.index], "FIRE_COACH")} className="btn btn-info">Fire Coach</button>
                        </div>
                    </div>
                </div>
        }]

        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-0">
                            </div>
                            <div className="col-sm-12">
                                <h4>COACHES:</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <ReactTable
                                    // user can no longer change table size
                                    resizable={false}
                                    // by making the showPageSizeOptions false, it takes away the option of choosing a number of rows
                                    showPageSizeOptions= {false}
                                    // by making the showPagination false, it does not allow user to choose next page in the table
                                    showPagination={false}
                                    data={this.props.coaches}
                                    columns={columns}
                                    minRows = {0}
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );

    }


    getSalary(coachId) {
        return "$"+this.props.coaches[coachId].salary.toLocaleString();
    }

    showCoachDetails(coachId) {
        let team = [];
        // team.push(<h4>{this.props.student[0].name}</h4>)
        team.push(<h4>Sport: {this.props.coaches[coachId].sportName}</h4>)
        team.push(<h4>Performance: {this.props.coaches[coachId].performance}</h4>)
        return team
    }

    fireOrGiveRaise(coachModel, actionId){
        const addNewTeam = [
            {coachModel: coachModel, actionId: actionId, collegeId: this.props.collegeName}
        ];

        console.log('DATA: ' + JSON.stringify(addNewTeam))

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/coachesOptions/'+ this.props.collegeName,
            {
                method: 'POST',
                body: JSON.stringify(addNewTeam)
            }
        )
            .then(response => response.json())
            .then(data => {
                this.loadCollege()
                console.log('Selected: ' + data.ok)
                console.log('Sesdsdd: ' + data.title)
            });
    }

    showDetails(row) {
        let id = 'showCoach' + row.index;
        let details = ReactDOM.findDOMNode(document.getElementById(id));
        if(details === null){
            console.log(row.index);
        }
        else if(details.style.display === "block"){
            details.style.display = "none";
        }
        else{
            details.style.display = "block";
        }
    }


    loadCollege(){
        if (this.props.collegeName === "")
            return;

        console.log("Loading college");
        const address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/everything/'+ this.props.collegeName;
        console.log(address);
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });


    }
}



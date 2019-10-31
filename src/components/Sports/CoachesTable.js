import React from 'react';
import "./Sports.css"

import ReactTable from "react-table";
import "react-table/react-table.css";


export default class CoachesTable extends React.Component {

    constructor(props) {
        super(props);

        this.getSalary = this.getSalary.bind(this);
        this.showCoachDetails = this.showCoachDetails.bind(this);
        this.loadCollege = this.loadCollege.bind(this);
        this.fireOrGiveRaise = this.fireOrGiveRaise.bind(this);
    }

    render() {
        const columns = [{
            Header: 'Coach name',
            accessor: 'facultyName' // String-based value accessors!
        }, {
            Header: 'Salary',
            Cell: (row) =>
                <div className="container">
                    <div className="row">
                <div className="col-sm-4">
                <button type="button" className="btn btn-info" data-toggle="collapse"
                        data-target={"#showCoach" + row.index}>Details
                </button>

            </div>
                    <div className="col-sm-8">
                        <h5>Salary: {this.getSalary(row.index)}</h5>
                    </div>
                </div>
                    <div className="row">
                        <div id={"showCoach"+row.index} className="collapse">
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
                            <div className="col-sm-10">
                                <ReactTable
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
        return "$"+this.props.coaches[coachId].salary;
    }

    showCoachDetails(coachId) {
        var team = [];
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


    loadCollege(){
        if (this.props.collegeName == "")
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



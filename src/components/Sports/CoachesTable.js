import React from 'react';
import "./Sports.css"

import ReactTable from "react-table";
import "react-table/react-table.css";


export default class CoachesTable extends React.Component {

    constructor(props) {
        super(props);

        this.getSalary = this.getSalary.bind(this);
        this.showCoachDetails = this.showCoachDetails.bind(this);

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
                            <button type="button" onClick={null} className="btn btn-info">Give Raise</button>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" onClick={null} className="btn btn-info">Fire Coach</button>
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
}



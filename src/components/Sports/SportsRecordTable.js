import React from 'react';
import "./Sports.css"

import ReactTable from "react-table";
import "react-table/react-table.css";

export default class SportsRecordTable extends React.Component {
    constructor(props) {
        super(props);

        //this.showTeam = showTeam()

        // this.sportsTeem = getSportsTeem(this.props.sports);
        this.showTeam = this.showTeam.bind(this);
        this.showProgressBar = this.showProgressBar.bind(this);
    }

    render() {
        const columns = [{
            Header: 'TEAM',
            accessor: 'sportName' // String-based value accessors!
        }, {
            Header: 'DETAILS',
            Cell: (row) => <div>
                <button type="button" className="btn btn-info" data-toggle="collapse"
                        data-target={"#show" + row.index}>Details
                </button>
                <div className="container">
                    <div id={"show"+row.index} className="collapse">
                        <div className="row">
                        <div className="jumbotronTransp">{this.showTeam(this.props.sports[row.index].sportName)}</div>
                        </div>
                        <div className="row">
                            <h4>Reputation:</h4>
                        </div>
                        <div className="row">
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70"
                                     aria-valuemin="50" aria-valuemax="100" style={{width: this.props.sports[row.index].reputation + '%'}}>
                                    {this.props.sports[row.index].reputation}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            // Custom cell components!
        }, {
            Header: 'WINS',
            accessor: 'gamesWon' // String-based value accessors!
        }, {
            Header: 'LOSSES',
            accessor: 'gamesLost' // String-based value accessors!
        }, {
            Header: 'GAMES PLAYED',
            accessor: 'overallRep' // String-based value accessors!
        }, {
            Header: 'IN SEASON',
            accessor: 'sportSeason' // String-based value accessors!
        }, {
            Header: 'DIVISION',
            accessor: 'division' // String-based value accessors!
        }, {
            Header: 'COACH',
            accessor: 'coachName'
        }]

        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-0">
                            </div>
                            <div className="col-sm-12">
                                <h4>Sports Record</h4>
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
                                    data={this.props.sports}
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

    showTeam(sportTeamName) {
        let team = [];
        for (let i = 0; i <this.props.students.length; i++) {
            if (this.props.students[i].team === sportTeamName){
                team.push(<h4>{this.props.students[i].name}</h4>)
            }
        }
        return team
    }

    showProgressBar(percentage){
        let team = [];
        team.push(<h4>{percentage}</h4>)
        return team
    }
}
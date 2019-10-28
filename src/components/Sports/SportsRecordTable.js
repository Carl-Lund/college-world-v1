import React from 'react';
import "./Sports.css"

import ReactTable from "react-table";
import "react-table/react-table.css";

export default class SportsRecordTable extends React.Component {
    nextIntForTable = 0
    nextIntForTable2 = 0

    constructor(props) {
        super(props);

        //this.showTeam = showTeam()

        // this.sportsTeem = getSportsTeem(this.props.sports);
        this.getTheNextIntForTable = this.getTheNextIntForTable.bind(this);
        this.getTheNextIntForTable2 = this.getTheNextIntForTable2.bind(this);

    }

    render() {
        const columns = [{
            Header: 'TEAM',
            accessor: 'sportName' // String-based value accessors!
        }, {
            Header: 'DETAILS',
            Cell: props => <div>
                <button type="button" onClick={showTeam} className="btn btn-info" data-toggle="collapse"
                        data-target={"#show" + this.getTheNextIntForTable().toString()}>Details
                </button>
                <div id={"show"+this.getTheNextIntForTable2().toString()} className="collapse">
                    <div className="jumbotronTransp">{showTeam()}</div>
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
                            <div className="col-sm-10">
                                <ReactTable
                                    data={this.props.sports}
                                    columns={columns}
                                />

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        );

    }

    getTheNextIntForTable() {
        var intToReturn = this.nextIntForTable
        if (this.nextIntForTable +1 === this.props.sports.length){
            this.nextIntForTable = 0
        }else {
            this.nextIntForTable++
        }
        return intToReturn
    }

    getTheNextIntForTable2() {
        var intToReturn = this.nextIntForTable2
        if (this.nextIntForTable2 +1 === this.props.sports.length){
            this.nextIntForTable2 = 0
        }else {
            this.nextIntForTable2++
        }
        return intToReturn
    }
}



function showTeam() {
    var team = [];
    // team.push(<h4>{this.props.student[0].name}</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)

    return team
}
import React from 'react';
import "./Sports.css"

import Navigation from "../Navigation/Navigation";

export default class SportsRecordTable extends React.Component {
    constructor(props) {
        super(props);

        this.buildTable = buildTable(this.props.sports);
        this.showTeam = showTeam()
        // this.sportsTeem = getSportsTeem(this.props.sports);
    }

    render() {
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
                            <div className="col-sm-0"></div>
                            <div className="col-sm-10">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>TEAM</th>
                                        <th>DETAILS</th>
                                        <th>WINS</th>
                                        <th>LOSSES</th>
                                        <th>GAMES PLAYED</th>
                                        <th>IN SEASON</th>
                                        <th>DIVISION</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.buildTable}
                                    </tbody>
                                    <div id="show" className="collapse">
                                        <div className="jumbotronTransp">
                                            {this.showTeam}
                                        </div>
                                    </div>
                                </table>

                        </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

function buildTable(sports) {
    var sportsTeam = [];
    for (let i = 0; i < sports.length; i++) {
        // column by column
        sportsTeam.push(<td>{sports[i].sportName}</td>)
        sportsTeam.push(<button type="button" onClick={showTeam} className="btn btn-info" data-toggle="collapse" data-target="#show">Details
        </button>)
        sportsTeam.push(<td>{sports[i].gamesWon}</td>)
        sportsTeam.push(<td>{sports[i].gamesLost}</td>)
        sportsTeam.push(<td>{sports[i].overallRep}</td>)
        sportsTeam.push(<td>{sports[i].sportSeason}</td>)
        sportsTeam.push(<td>{sports[i].division}</td>)
    }

    return sportsTeam
}

function showTeam() {
    var team = [];
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)
    team.push(<h4>One</h4>)

    return team
}
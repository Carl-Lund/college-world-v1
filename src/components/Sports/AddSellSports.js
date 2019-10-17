import React from 'react';
import "./Sports.css"
import Select from 'react-select';

export default class AddSellSports extends React.Component {
    constructor(props) {
        super(props);

        this.addSportSelectOption = "womenBasketball";
    }

    render() {
        const addNewTeam = [
            {label: "minPlayers", value: 0},
            {label: "gender", value: "Male"},
            {label: "currentPlayers", value: 0},
            {label: "maxPlayers", value: 0},
            {label: "costPerDay", value: 0},
            {label: "hourLastUpdated", value: 0},
            {label: "reputation", value: 50},
            {label: "overallRep", value: 50},
            {label: "gamesWon", value: 50},
            {label: "gamesLost", value: 0},
            {label: "gamesTied", value: 0},
            {label: "numGames", value: 0},
            {label: "startupCost", value: 0},
            {label: "runId", value: "acorn"},
            {label: "sportName", value: "Men\u0027s Basketball"},
            {label: "note", value: "no note"},
            {label: "isActive", value: 0},
            {label: "hoursUntilNextGame", value: 0},
            {label: "hoursUntilNextGameReset", value: 72},
            {label: "division", value: 3},
            {label: "sportSeason", value: "Winter"},
            {label: "championshipsWon", value: 0},
            {label: "coachName", value: "Nathan Morris"},
        ];

        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="jumbotronAddSell">
                            <div className="container">
                                <div className="row">
                                    <h5>Select Sport to Add</h5>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <select className="form-control" onChange={e => this.addSportSelectOption = e.target.value}>
                                            <option value="womenBasketball">$50,000 - Women's Basketball</option>
                                            <option value="baseball">$50,000 - Baseball</option>
                                            <option value="softball">$50,000 - Softball</option>
                                            <option value="womenSoccer">$50,000 - Women's Soccer</option>
                                            <option value="menSoccer">$50,000 - Men's Soccer</option>
                                            <option value="menFootball">$50,000 - Men's Football</option>
                                            <option value="womenVolleyball">$50,000 - Women's Volleyball</option>
                                        </select>
                                    </div>
                                    </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <button type="button" onClick={this.updateCollegeOnServer} className="btn btn-primary">Add Sport</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="jumbotronAddSell">
                            <div className="container">
                                <div className="row">
                                    <h5>Select Sport to sell</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }

    addSport = () => {
        console.log('Selected: ' + this.addSportSelectOption)
        console.log('Selected: ' + this.props.everything)

    }


    updateCollegeOnServer(){
        var d
        const addNewTeam = [
            {label: "username", value: "username"},
            {label: "password", value: "password"}
        ];

        // fetch("http://localhost:8080/enccollegeworld_war_exploded/rest/sports/acorn",
        //     {
        //         method: 'POST',
        //         body: JSON.stringify(addNewTeam)
        //     }
        // )
        //     .then(response => response.json())
        //     .then(data => d = data);

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/sports/acorn', {
            method: 'POST',
            body: JSON.stringify({addNewTeam}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json()
        }).then(json =>{
            console.log('Selected: ' + this.props.everything)
        });

    }
}
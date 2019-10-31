import React from 'react';
import "./Sports.css"
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import { withAlert } from 'react-alert'



export default class AddSellSports extends React.Component {
    addSportSelectOption = ""
    sellSportSelectOption = ""

    constructor(props) {
        super(props);

        this.teams = [];
        this.updateCollegeOnServer = this.updateCollegeOnServer.bind(this);
        this.afterUpdateCollegeOnServer = this.afterUpdateCollegeOnServer.bind(this);
        this.loadCollege = this.loadCollege.bind(this);
        this.updateTeamsOnServerForSell = this.updateTeamsOnServerForSell.bind(this);
        this.afterUpdateCollegeOnServerForSell = this.afterUpdateCollegeOnServerForSell.bind(this);

    }

    render() {

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
                                        <select className="form-control" onChange={e => this.onChangeAddSport(e.target.value)}>
                                            {this.showTeamAvailables()}
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
                                <div className="row">
                                    <div className="col-sm-4">
                                        <select className="form-control" onChange={s => this.onChangeSellSport(s.target.value)}>
                                            {this.showTeamAvailablesForSell()}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <button type="button" onClick={this.updateTeamsOnServerForSell} className="btn btn-primary">Sell Sport</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id={'dialog'}>
                </div>

            </div>


        );

    }

    onChangeAddSport= (value) => {
        console.log('The value is: ' + value.toString())
        this.addSportSelectOption = value.toString()

    }
    addSport = () => {
        console.log('Selected: ' + this.addSportSelectOption)
        console.log('Selected: ' + this.props.everything)

    }

    buildTeamsArray= () => {
        this.teams[0] = "Women's Basketball"
        this.teams[1] = "Baseball"
        this.teams[2] = "Softball"
        this.teams[3] = "Women's Soccer"
        this.teams[4] = "Men's Soccer"
        this.teams[5] = "Men's Football"
        this.teams[6] = "Women's Volleyball"
    }


    showAvailableTeams= () => {
        this.buildTeamsArray()
        var availableTeams = this.teams;
        for (let i = 0; i < this.props.sports.length ; i++) {
            for (let j = 0; j < this.teams.length; j++) {
                if (this.props.sports[i].sportName === this.teams[j]){
                    availableTeams.splice(j, 1);
                }
            }
        }

        return availableTeams
    }

    showTeamAvailables= () => {
        var availableTeams = this.showAvailableTeams()

        this.addSportSelectOption = "$50,000 - "+availableTeams[0]

        console.log('showTeamAvailables: ' + this.addSportSelectOption)

        var team = [];
        for (let i = 0; i < availableTeams.length ; i++) {
            team.push(<option value={"$50,000 - "+availableTeams[i]}>{"$50,000 - "+availableTeams[i]}</option>)
        }

        return team
    }


    updateCollegeOnServer(){
        console.log('Add to server: ' + this.addSportSelectOption)
        const addNewTeam = [
            {sportName: this.addSportSelectOption, collegeId: this.props.collegeName, actionId: "ADD"}
        ];

        var responseFromServer

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/sports/'+ this.props.collegeName,
            {
                method: 'POST',
                body: JSON.stringify(addNewTeam)
            }
        )
            .then(response => response.json())
            .then(data => {
                responseFromServer = data.title
                console.log('Selected: ' + data.ok)
                console.log('Sesdsdd: ' + data.title)
                this.afterUpdateCollegeOnServer(data.title)
            });
    }

    afterUpdateCollegeOnServer(response){
        if (response === "successfull"){
            {this.loadCollege()}
            return
        }

        //On Error- show message
        const Swal = require('sweetalert2')
        Swal.fire(""+ response)
    }

    loadCollege(){
        console.log("College Name: "+ this.props.collegeName);

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

    //Sell Sports:
    onChangeSellSport= (value) => {
        this.sellSportSelectOption = value.toString()
        console.log('onChangeSellSport new value: ' + value.toString())

    }

    showTeamAvailablesForSell= () => {
        if (this.props.sports.length === 0){
            return
        }
        this.sellSportSelectOption = ""+ this.props.sports[0].sportName

        var team = [];
        for (let i = 0; i < this.props.sports.length ; i++) {
            team.push(<option value={""+this.props.sports[i].sportName}>{"$50,000 - "+this.props.sports[i].sportName}</option>)
        }


        return team
    }

    updateTeamsOnServerForSell(){
        console.log('Sell the team: ' + this.sellSportSelectOption)
        if (this.sellSportSelectOption === ""){
            return
        }
        const addNewTeam = [
            {sportName: this.sellSportSelectOption, collegeId: this.props.collegeName, actionId: "SELL"}
        ];

        var responseFromServer

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/sports/'+ this.props.collegeName,
            {
                method: 'POST',
                body: JSON.stringify(addNewTeam)
            }
        )
            .then(response => response.json())
            .then(data => {
                responseFromServer = data.title
                this.afterUpdateCollegeOnServerForSell(data.title)
                console.log('Selected: ' + data.ok)
                console.log('Sesdsdd: ' + data.title)
            });
    }

    afterUpdateCollegeOnServerForSell(response){
        if (response === "successfull"){
            {this.loadCollege()}
            return
        }

        //On Error- show message
        const Swal = require('sweetalert2')
        Swal.fire(""+ response)
    }
}


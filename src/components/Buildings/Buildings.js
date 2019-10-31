import React from 'react';
import Navigation from "../Navigation/Navigation";
import ReactTable from "react-table";

export default class Buildings extends React.Component {

    constructor(props) {
        super(props);
        this.upgradeBuilding = this.upgradeBuilding.bind(this);
        this.repairBuilding = this.repairBuilding.bind(this);
    }

    upgradeBuilding(e) {
        var building = e.target.value;
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/buildings/" + this.props.everything.college.runID;
        fetch(address)
            .then(response => response.json())
        this.props.everything.buildings[building].hoursToComplete = 336;
        this.props.everything.buildings[building].isUpgradeComplete = false;
        this.props.everything.college.availableCash -= this.props.everything.buildings[building].upgradeCost;
        this.props.replaceEverything(this.props.everything);
    }

    repairBuilding(e) {
        var building = e.target.value;
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/buildings/" + this.props.everything.college.runID;
        fetch(address)
            .then(response => response.json())
        var qualityDecayed = 100 - this.props.everything.buildings[building].shownQuality;
        if (qualityDecayed > 10) {
            this.props.everything.buildings[building].isRepairComplete = false;
            this.props.everything.buildings[building].hoursToComplete = 24 * (qualityDecayed/10);
        } else {
            this.props.everything.buildings[building].isRepairComplete = true;
            this.props.everything.buildings[building].hiddenQuality = 10.0;
            this.props.everything.buildings[building].repairCost = ((100 - this.props.everything.buildings[building].shownQuality) * 300);
        }
        this.props.everything.college.availableCash -= this.props.everything.buildings[building].repairCost;
        this.props.replaceEverything(this.props.everything);
    }


    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

        let tableStyle = {
            border: '1px solid #ccc',
            borderCollapse: 'collapse',
            margin: '0',
            padding: '0',
            width: '100%',
            tableLayout: 'fixed'
        }
        let trStyle = {
            background: '#f8f8f8',
            border: '1px solid #ddd',
            padding: '.35em'
        }
        let thStyle = {
            padding: '.625em',
            textAlign: 'center',
            fontSize: '.85em',
            letterSpacing: '.1em'
        }
        let tdStyle = {
            padding: '.625em',
            textAlign: 'center',
            verticalAlign: 'middle'
        }

        let availableBeds = 0;
        let takenBeds = 0;
        for(let i = 0; i < this.props.everything.buildings.length; i++) {
            if (this.props.everything.buildings[i].isBuilt == true && this.props.everything.buildings[i].kindOfBuilding == "DORM") {
                availableBeds += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenBeds += this.props.everything.buildings[i].numStudents;
            }
        }

        let availablePlates = 0;
        let takenPlates = 0;
        for(let i = 0; i < this.props.everything.buildings.length; i++) {
            if (this.props.everything.buildings[i].isBuilt == true && this.props.everything.buildings[i].kindOfBuilding == "DINING") {
                availablePlates += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenPlates += this.props.everything.buildings[i].numStudents;
            }
        }

        let availableDesks = 0;
        let takenDesks = 0;
        for(let i = 0; i < this.props.everything.buildings.length; i++) {
            if (this.props.everything.buildings[i].isBuilt == true && this.props.everything.buildings[i].kindOfBuilding == "ACADEMIC") {
                availableDesks += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenDesks += this.props.everything.buildings[i].numStudents;
            }
        }

        let table = [];
        for (let i = 0; i < this.props.everything.buildings.length; i++) {
            let building = [];

            let status = "";
            if (this.props.everything.buildings[i].hoursToComplete > 0) {
                status = String((this.props.everything.buildings[i].hoursToComplete/24)) + " days remaining";
            } else {
                status = "Built";
            }

            let upgradeButton = [];
            if (this.props.everything.buildings[i].size != "Extra Large" && this.props.everything.buildings[i].size != "N/A"
            && this.props.everything.buildings[i].hoursToComplete == 0 && this.props.everything.buildings[i].upgradeCost <= this.props.everything.college.availableCash) {
                upgradeButton.push (
                    <button type="submit" className="btn btn-info" style={{horizAlign: "left", fontSize: "75%"}} onClick={this.upgradeBuilding} name="upgradeBuilding" value={i}>Upgrade (${this.props.everything.buildings[i].upgradeCost})</button>
                )
            }

            let repairButton = [];
            if (this.props.everything.buildings[i].repairCost <= this.props.everything.college.availableCash && this.props.everything.buildings[i].repairCost > 0
            && this.props.everything.buildings[i].hoursToComplete == 0 && this.props.everything.buildings[i].isUpgradeComplete == true) {
                repairButton.push (
                    <button type="submit" className="btn btn-info" style={{horizAlign: "left", fontSize: "75%", marginTop: "5px"}} onClick={this.repairBuilding} name="repairBuilding" value={i}>Repair (${this.props.everything.buildings[i].repairCost}</button>
                )
            }

            building.push(
                    <td style={tdStyle}>{this.props.everything.buildings[i].name}</td>,
                    <td style={tdStyle}>{this.props.everything.buildings[i].kindOfBuilding}</td>,
                    <td style={tdStyle}>{this.props.everything.buildings[i].size} ({this.props.everything.buildings[i].capacity})</td>,
                    <td style={tdStyle}>{this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents}</td>,
                    <td style={tdStyle}><div className="progress">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: this.props.everything.buildings[i].shownQuality}}>
                            {this.props.everything.buildings[i].shownQuality}%
                        </div>
                    </div></td>,
                    <td style={tdStyle}>{this.props.everything.buildings[i].curDisaster}</td>,
                    <td style={tdStyle}>{status}</td>,
                    <td style={tdStyle}>{upgradeButton}{repairButton}</td>
            )
            table.push(<tr style={trStyle}>{building}</tr>)
        }

        return (
            <div>
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="img-responsive" src="resources/images/bed.png"/>
                        </div>
                        <div className="col-md-2">
                            <h4>{availableBeds} Available Beds</h4>
                            <h4>{takenBeds} Taken Beds</h4>
                        </div>
                        <div className="col-md-2">
                            <img className="img-responsive" src="resources/images/plate.png"/>
                        </div>
                        <div className="col-md-2">
                            <h4>{availablePlates} Available Plates</h4>
                            <h4>{takenPlates} Taken Plates</h4>
                        </div>
                        <div className="col-md-2">
                            <img className="img-responsive" src="resources/images/desk.png"/>
                        </div>
                        <div className="col-md-2">
                            <h4>{availableDesks} Available Desks</h4>
                            <h4>{takenDesks} Taken Desks</h4>
                        </div>
                    </div>
                </div>
                <div className="well well-sm" >
                    <div className="col-sm-5">
                        <div className="form-group">
                            <label for="buildingType">Filter by Building Type
                        </label>
                        <select className="form-control" id="sortByBuildingType" name="sortByBuildingType"
                                style={{width: '160px'}}>
                            <option value="All Buildings">All Buildings</option>
                            <option value="Administrative Building">Administrative Building</option>
                            <option value="Academic Center">Academic Center</option>
                            <option value="Baseball Diamond">Baseball Diamond</option>
                            <option value="Dining Hall">Dining Hall</option>
                            <option value="Dormitory">Dormitory</option>
                            <option value="Football Stadium">Football Stadium</option>
                            <option value="Hockey Rink">Hockey Rink</option>
                            <option value="Entertainment Center">Entertainment Center</option>
                            <option value="Health Center">Health Center</option>
                            <option value="Library">Library</option>
                        </select>
                        <input type="submit" className="btn btn-info" name="startSortByBuildingType" value="Filter"
                               style={{marginTop: '5px'}}>
                        </input>
                    </div>
                </div>
                <table className="table table-condensed" style={tableStyle}>
                    <tbody>
                        <tr style={trStyle}>
                            <th style={thStyle}>Building Name</th>
                            <th style={thStyle}>Building Type</th>
                            <th style={thStyle}>Size</th>
                            <th style={thStyle}>Open Spots</th>
                            <th style={thStyle}>Quality</th>
                            <th style={thStyle}>Current Disaster</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </div>
                <div className="col-sm-4">
                    <div className="well well-sm">
                        <div id="purchase">
                            <h4>Purchase Buildings</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6" >
                        <div className="well well-sm">
                            <h3>
                                <p>Resident News</p>
                            </h3>
                            <div className="pre-scrollable">
                                <ul className="list-group">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container">
                    <div className="jumbotron" >
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-2" >
                                    <h4>Large Size</h4>
                                    <img className="img-responsive" src="resources/images/EXTRA_LARGE_DORM_k.png"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                        </div>
                                </div>
                            <div className="col-md-2" >
                                <h4>Extra Large Size</h4>
                                <img className="img-responsive" src="resources/images/EXTRA_LARGE_DORM_k.png"/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                    </div>
                            </div>
                            <div className="col-md-2" >
                                <h4>Library</h4>
                                <img className="img-responsive" src="resources/images/LIBRARY_k.png"/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                    </div>
                            </div>
                            <div className="col-md-2" >
                                <h4>Health Center</h4>
                                <img className="img-responsive" src="resources/images/HEALTH_k.png"/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                    </div>
                            </div>
                            </div>
                            <div className="col-md-12">
                                <div className="col-md-2" >
                                    <h4>Entertainment Center</h4>
                                    <img className="img-responsive" src="resources/images/ENTERTAINMENT_k.png"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                        </div>
                                </div>
                                <div className="col-md-2" >
                                    <h4>Football Stadium</h4>
                                    <img className="img-responsive" src="resources/images/FOOTBALL%20STADIUM_k.png"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                        </div>
                                </div>
                                <div className="col-md-2" >
                                    <h4>Baseball Diamond</h4>
                                    <img className="img-responsive" src="resources/images/BASEBALL%20DIAMOND_k.png"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                        </div>
                                </div>
                                <div className="col-md-2" >
                                    <h4>Hockey Rink</h4>
                                    <img className="img-responsive" src="resources/images/HOCKEY%20RINK_k.png"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
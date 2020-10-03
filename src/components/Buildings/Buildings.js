import React from 'react';
import News from "../News/News";
import Navigation from "../Navigation/Navigation";
import ReactTable from "react-table";
import Select from "react-select";

export default class Buildings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buildingChoice: 'Academic Center',
            buildingName: ''
        };
        this.upgradeBuilding = this.upgradeBuilding.bind(this);
        this.repairBuilding = this.repairBuilding.bind(this);
        this.purchaseBuilding = this.purchaseBuilding.bind(this);
        this.handleSelectBuildingChoice = this.handleSelectBuildingChoice.bind(this);
        this.handleNewBuildingChange = this.handleNewBuildingChange.bind(this);
    }

    handleSelectBuildingChoice(value) {
        this.setState({buildingChoice:value.value})
    }

    handleNewBuildingChange(e) {
        this.setState({buildingName:e.target.value})
    }

    upgradeBuilding(e) {
        var building = e.target.value;
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/building/" + this.props.everything.college.runId + "/upgrade/" + encodeURI(this.props.everything.buildings[building].name);
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
    }

    repairBuilding(e) {
        var building = e.target.value;
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/building/" + this.props.everything.college.runId + "/repair/" + encodeURI(this.props.everything.buildings[building].name);
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
    }

    purchaseBuilding() {
        const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/building/" + this.props.everything.college.runId + "/purchase/" + encodeURI(this.state.buildingName) + "/" + encodeURI(this.state.buildingChoice)
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
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

        let table = [];
        let availableBeds = 0;
        let takenBeds = 0;
        let availablePlates = 0;
        let takenPlates = 0;
        let availableDesks = 0;
        let takenDesks = 0;
        let buildingFiltersOptions = [];

        for(let i = 0; i < this.props.everything.buildings.length; i++) {
            let status = "";
            let building = [];
            let upgradeButton = [];
            let repairButton = [];

            if (this.props.everything.buildings[i].isBuilt && this.props.everything.buildings[i].kindOfBuilding == "DORM") {
                availableBeds += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenBeds += this.props.everything.buildings[i].numStudents;
            }
            if (this.props.everything.buildings[i].isBuilt && this.props.everything.buildings[i].kindOfBuilding == "DINING") {
                availablePlates += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenPlates += this.props.everything.buildings[i].numStudents;
            }
            if (this.props.everything.buildings[i].isBuilt && this.props.everything.buildings[i].kindOfBuilding == "ACADEMIC") {
                availableDesks += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenDesks += this.props.everything.buildings[i].numStudents;
            }
            if(!buildingFiltersOptions.includes(<option value={this.props.everything.buildings[i].kindOfBuilding}>{this.props.everything.buildings[i].kindOfBuilding}</option>)){
                buildingFiltersOptions.push(<option value={this.props.everything.buildings[i].kindOfBuilding}>{this.props.everything.buildings[i].kindOfBuilding}</option>);
            }

            if (this.props.everything.buildings[i].hoursToComplete > 0) {
                status = String((this.props.everything.buildings[i].hoursToComplete/24)) + " days remaining";
            } else {
                status = "Built";
            }

            if (this.props.everything.buildings[i].size != "Extra Large" && this.props.everything.buildings[i].size != "N/A"
                && this.props.everything.buildings[i].hoursToComplete == 0 && this.props.everything.buildings[i].upgradeCost <= this.props.everything.college.availableCash) {
                upgradeButton.push (
                    <button type="submit" className="btn btn-info" style={{horizAlign: "left", fontSize: "75%"}} onClick={this.upgradeBuilding} name="upgradeBuilding" value={i}>Upgrade (${this.props.everything.buildings[i].upgradeCost})</button>
                )
            }

            if (this.props.everything.buildings[i].repairCost <= this.props.everything.college.availableCash && this.props.everything.buildings[i].repairCost > 0
                && this.props.everything.buildings[i].hoursToComplete == 0 && this.props.everything.buildings[i].isUpgradeComplete == true) {
                repairButton.push (
                    <button type="submit" className="btn btn-info" style={{horizAlign: "left", fontSize: "75%", marginTop: "5px"}} onClick={this.repairBuilding} name="repairBuilding" value={i}>Repair (${this.props.everything.buildings[i].repairCost})</button>
                )
            }

            building.push(
                <td style={tdStyle}>{this.props.everything.buildings[i].name}</td>,
                <td style={tdStyle}>{this.props.everything.buildings[i].kindOfBuilding}</td>,
                <td style={tdStyle}>{this.props.everything.buildings[i].size} ({this.props.everything.buildings[i].capacity})</td>,
                <td style={tdStyle}>{this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents}</td>,
                <td style={tdStyle}><div className="progress">
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.floor(120*(this.props.everything.buildings[i].shownQuality/100))}}>
                        {Math.floor(this.props.everything.buildings[i].shownQuality)}%
                    </div>
                </div></td>,
                <td style={tdStyle}>{this.props.everything.buildings[i].curDisaster}</td>,
                <td style={tdStyle}>{status}</td>,
                <td style={tdStyle}>{upgradeButton}{repairButton}</td>
            )
            table.push(<tr style={trStyle}>{building}</tr>)
        }

        let numStudents = this.props.everything.objectives.studentCount;
        const buildingChoices = [
            {label: "Dormitory", value: "Dormitory"},
            {label: "Academic Center", value: "Academic Center"},
            {label: "Baseball Diamond", value: "Baseball Diamond"},
            {label: "Dining Hall", value: "Dining Hall"},
            {label: "Dormitory", value: "Dormitory"},
            {label: "Football Stadium", value: "Football Stadium"},
            {label: "Hockey Rink", value: "Hockey Rink"},
            {label: "Entertainment Center", value: "Entertainment Center"},
            {label: "Health Center", value: "Health Center"},
            {label: "Library", value: "Library"}]

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
                            <label>Filter by Building Type</label>
                        <select className="form-control" id="sortByBuildingType" name="sortByBuildingType" style={{width: '160px'}}>
                            <option value="All Buildings">All Buildings</option>
                            {buildingFiltersOptions}
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
                <div className="row">
                <div className="col-sm-6">
                    <div className="well well-sm">
                        <div id="purchase">
                            <h3>Purchase Buildings</h3>
                            <div className="form-group">
                                <label>Building Type</label>
                                <Select
                                    options={buildingChoices}
                                    value={{label: this.state.buildingChoice, value: this.state.buildingChoice}}
                                    onChange={value => this.handleSelectBuildingChoice(value)}
                                    defaultValue={{label: this.state.buildingChoice, value: this.state.buildingChoice}}
                                />
                            </div>
{/*                            <div className="form-group">
                                <label>Size</label>
                                <select className="form-control" id="buildingSize" name="buildingSize">
                                    <option value="Small">Small ($50,000)</option>
                                    <option value="Medium">Medium ($150,000)</option>
                                    <option value="Large">Large ($350,000)</option>
                                    <option value="Extra Large">Extra Large ($650,000)</option>
                                </select>
                            </div>*/}
                            <div className="form-group">
                                <label>Name</label>
                                <input className="editText" type="text" value={this.state.buildingName} onChange={this.handleNewBuildingChange} placeholder="Enter Building Name"/>
                            </div>
                            <button type="submit" className="btn btn-info" onClick={this.purchaseBuilding} name="purchaseBuilding">Purchase ($150000)</button>
                        </div>
                    </div>
                </div>

                    <div className="col-sm-6">
                        <div className="well well-sm">
                            <h3>
                                <p>Resident News</p>
                            </h3>
                            <div className="pre-scrollable">
                                    <News everything={this.props.everything} newsType={'RES_LIFE_NEWS'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container">
                    <div className="jumbotron" >
                        <div className="row">
                            {/*<div className="col-md-12">*/}
                                <div className="col-md-2" style={{marginRight: '3%'}}>
                                    <h4>Large Size</h4>
                                    <img className="img-responsive" src="resources/images/EXTRA_LARGE_DORM_k.png"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(numStudents/150)))}}>
                                                {Math.min(100, Math.floor(100*(numStudents/150)))}%
                                            </div>
                                        </div>
                                </div>
                            <div className="col-md-2" style={{marginRight: '3%'}}>
                                <h4>Extra Large Size</h4>
                                <img className="img-responsive" src="resources/images/EXTRA_LARGE_DORM_k.png"/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(numStudents/200)))}}>
                                            {Math.min(100, Math.floor(100*(numStudents/200)))}%
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-2" style={{marginRight: '3%'}}>
                                <h4>Library</h4>
                                <img className="img-responsive" src="resources/images/LIBRARY_k.png" style={{marginTop: '37px', marginBottom: '38px'}}/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(numStudents/300)))}}>
                                            {Math.min(100, Math.floor(100*(numStudents/300)))}%
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-2" style={{marginRight: '3%'}}>
                                <h4>Health Center</h4>
                                <img className="img-responsive" src="resources/images/HEALTH_k.png" style={{marginTop: '37px', marginBottom: '38.5px'}}/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(numStudents/400)))}}>
                                            {Math.min(100, Math.floor(100*(numStudents/400)))}%
                                        </div>
                                    </div>
                            </div>
                            {/*</div>*/}
                            {/*<div className="col-md-12">*/}
                                <div className="col-md-2" style={{marginRight: '3%'}}>
                                    <h4>Entertainment Center</h4>
                                    <img className="img-responsive" src="resources/images/ENTERTAINMENT_k.png" style={{marginBottom: '28px'}}/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(numStudents/500)))}}>
                                                {Math.min(100, Math.floor(100*(numStudents/500)))}%
                                            </div>
                                        </div>
                                </div>
                                <div className="col-md-2" style={{marginRight: '3%'}}>
                                    <h4>Football Stadium</h4>
                                    <img className="img-responsive" src="resources/images/FOOTBALL%20STADIUM_k.png"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(numStudents/200)))}}>
                                                {Math.min(100, Math.floor(100*(numStudents/200)))}%
                                            </div>
                                        </div>
                                </div>
                                <div className="col-md-2" style={{marginRight: '3%'}}>
                                    <h4>Baseball Diamond</h4>
                                    <img className="img-responsive" src="resources/images/BASEBALL%20DIAMOND_k.png" style={{marginTop: '33px', marginBottom: '34px'}}/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(numStudents/300)))}}>
                                                {Math.min(100, Math.floor(100*(numStudents/300)))}%
                                            </div>
                                        </div>
                                </div>
                                <div className="col-md-2" style={{marginRight: '3%'}}>
                                    <h4>Hockey Rink</h4>
                                    <img className="img-responsive" src="resources/images/HOCKEY%20RINK_k.png" style={{marginTop: '41px', marginBottom: '47px'}}/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{borderRadius: '5px', width: Math.min(100, Math.floor(100*(numStudents/400)))}}>
                                                {Math.min(100, Math.floor(100*(numStudents/400)))}%
                                            </div>
                                        </div>
                                </div>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
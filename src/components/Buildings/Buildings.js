import React from 'react';
import "./buildings.css"
import Button from "react-bootstrap/cjs/Button";
import BuildingFilterPanel from "./BuildingFilterPanel";
import BuildingsDashboard from "./BuildingsDashboard";
import BuildingsTable from "./BuildingsTable";
import PurchaseBuildings from "./PurchaseBuildings";
import ResidentNews from "./ResidentNews";
import BuildingProgressPannel from "./BuildingProgressPannel";
import InsufficientFundPopup from "./InsufficientFundPopup";
import BuildingQualityBar from "./BuildingQualityBar";


export default class Buildings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buildingChoice: 'Academic Center',
            buildingName: '',
            hideShowTipsTextBuilding : "Hide Tips",
            isHideBuilding: false,
            showNextTipBuilding: true,
            hideShowTipsTextSafety : "Hide Tips",
            isHideSafety: false,
            appear: false,
            showNextTipSafety: true
        };
        this.upgradeBuilding = this.upgradeBuilding.bind(this);
        this.repairBuilding = this.repairBuilding.bind(this);
        this.purchaseBuilding = this.purchaseBuilding.bind(this);
        this.handleSelectBuildingChoice = this.handleSelectBuildingChoice.bind(this);
        this.handleNewBuildingChange = this.handleNewBuildingChange.bind(this);
        this.hideShowTipsTextBuilding = this.hideShowTipsTextBuilding.bind(this);
        this.hideShowTipsTextSafety = this.hideShowTipsTextSafety.bind(this);

        this.setShow = (value) => {this.setState({appear:value})}
        this.handleClose = () => this.setShow(false);
        this.handleShow = () => this.setShow(true);
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
        if(this.props.everything.college.availableCash < 150000){
            this.handleShow();
        }
        else {
            const address = "http://localhost:8080/enccollegeworld_war_exploded/rest/building/" + this.props.everything.college.runId + "/purchase/" + encodeURI(this.state.buildingName) + "/" + encodeURI(this.state.buildingChoice)
            fetch(address)
                .then(response => response.json())
                .then(data => {
                    this.props.replaceEverything(data);
                });
        }
    }

    hideShowTipsTextBuilding = () => {
        let tips = document.getElementById('building-tips');
        if (this.state.isHideBuilding){
            this.state.hideShowTipsTextBuilding = "Hide tips"
            this.setState({isHideBuilding: false})
            tips.style.display = "block";
        }else {
            this.state.hideShowTipsTextBuilding = "Show tips"
            this.setState({isHideBuilding: true})
            tips.style.display = "none";
        }
        this.setState({ hideShowTipsTextBuilding: this.state.hideShowTipsTextBuilding});
    }

    hideShowTipsTextSafety = () => {
        let tips = document.getElementById('safety-tips');
        if (this.state.isHideSafety){
            this.state.hideShowTipsTextSafety = "Hide tips"
            this.setState({isHideSafety: false})
            tips.style.display = "block";
        }else {
            this.state.hideShowTipsTextSafety = "Show tips"
            this.setState({isHideSafety: true})
            tips.style.display = "none";
        }
        this.setState({ hideShowTipsTextSafety: this.state.hideShowTipsTextSafety});
    }

    getImage(type){
        if (type === "DORM"){
            return ("resources/images/DORM.png");
        }
        else if (type === "ACADEMIC"){
            return ("resources/images/ACADEMIC.png");
        }
        else if (type === "ADMIN"){
            return ("resources/images/ADMIN.png")
        }
        else if (type === "DINING"){
            return ("resources/images/DINING.png");
        }
        else if (type === "DORM"){
            return ("resources/images/DORM.png");
        }
        else if (type === "ENTERTAINMENT"){
            return ("resources/images/ENTERTAINMENT.png");
        }
        else if (type === "HEALTH"){
            return ("resources/images/HEALTH.png");
        }
        else if (type === "LIBRARY"){
            return ("resources/images/LIBRARY.png");
        }
        else if (type === "SPORTS"){
            return ("resources/images/stadium.png");
        }
        else if (type === "BASEBALL DIAMOND"){
            return ("resources/images/BASEBALL DIAMOND.png");
        }
        else if (type === "FOOTBALL DIAMOND"){
            return ("resources/images/FOOTBALL STADIUM.png");
        }
        else if (type === "HOCKEY RINK"){
            return ("resources/images/HOCKEY RINK");
        }
    }


    render() {
        function getTextColor(value) {
            if(value < 45){
                return "#fc3d17";
            }
            else if(value < 70){
                return "#FFFF00";
            }
            else{
                return "#f8f8f8";
            }
        }

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
            let trColor = getTextColor((this.props.everything.buildings[i].shownQuality));

            if (this.props.everything.buildings[i].isBuilt && this.props.everything.buildings[i].kindOfBuilding === "DORM") {
                availableBeds += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenBeds += this.props.everything.buildings[i].numStudents;
            }
            if (this.props.everything.buildings[i].isBuilt && this.props.everything.buildings[i].kindOfBuilding === "DINING") {
                availablePlates += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenPlates += this.props.everything.buildings[i].numStudents;
            }
            if (this.props.everything.buildings[i].isBuilt && this.props.everything.buildings[i].kindOfBuilding === "ACADEMIC") {
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
                && this.props.everything.buildings[i].hoursToComplete === 0 && this.props.everything.buildings[i].upgradeCost <= this.props.everything.college.availableCash) {
                upgradeButton.push (
                    <button type="submit" className="btn btn-info" style={{horizAlign: "left", fontSize: "75%"}} onClick={this.upgradeBuilding} name="upgradeBuilding" value={i}>Upgrade (${this.props.everything.buildings[i].upgradeCost})</button>
                )
            }

            if (this.props.everything.buildings[i].repairCost <= this.props.everything.college.availableCash && this.props.everything.buildings[i].repairCost > 0
                && this.props.everything.buildings[i].hoursToComplete === 0 && this.props.everything.buildings[i].isUpgradeComplete === true) {
                repairButton.push (
                    <button type="submit" className="btn btn-info" style={{horizAlign: "left", fontSize: "75%", marginTop: "5px"}} onClick={this.repairBuilding} name="repairBuilding" value={i}>Repair (${this.props.everything.buildings[i].repairCost})</button>
                )
            }

            if (this.props.everything.buildings[i].repairCost > this.props.everything.college.availableCash ){
                repairButton.push (
                    <Button variant="warning" style={{horizAlign: "left", fontSize: "75%", marginTop: "5px"}} onClick={this.handleShow} name="repairBuilding" value={i}>Repair (${this.props.everything.buildings[i].repairCost})</Button>
                )
            }

            building.push(
                <td style={tdStyle}>{this.props.everything.buildings[i].name}</td>,
                <td style={tdStyle}><img className="img-responsive" src={this.getImage(this.props.everything.buildings[i].kindOfBuilding)}/> {this.props.everything.buildings[i].kindOfBuilding}</td>,
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
            table.push(<tr style={{ background: trColor, trStyle}}>{building}</tr>)
        }


        // this.handleSelectBuildingChoice(value)this.state.buildingChoice)

        let numStudents = this.props.everything.objectives.studentCount;
        const buildingChoices = [
            {label: "Administrative Building", value: "Administrative Building"},
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
                <InsufficientFundPopup everything={this.props.everything} show={this.state.appear} handleClose={this.handleClose}/>
                <div className="container">
                    <div className="jumbotron">
                        <BuildingsDashboard
                            availableBeds={availableBeds} takenBeds={takenBeds} availablePlates={availablePlates}
                            takenPlates={takenPlates} availableDesks={availableDesks} takenDesks={takenDesks}
                        />
                    </div>
                    <div className="row" >
                        <div className="col-lg-2">
                            <BuildingFilterPanel buildingFiltersOptions={buildingFiltersOptions}/>
                        </div>
                        <div className="col-lg-3" />
                        <div className="col-sm-1" />
                        <div className="col-md-3" >
                            <BuildingQualityBar totalBuildingHealth={this.props.everything.college.totalBuildingHealth} />
                        </div>
                        <div className="col-md-3"></div>
                    <BuildingsTable table={table}/>
                    </div>
                    <div className="row">
                        <PurchaseBuildings
                            handleNewBuildingChange={this.handleNewBuildingChange} handleSelectBuildingChoice={this.handleSelectBuildingChoice} purchaseBuilding={this.purchaseBuilding}
                            everything={this.props.everything} buildingChoices={buildingChoices} buildingName={this.state.buildingName} buildingChoice={this.state.buildingChoice}/>
                        <ResidentNews everything={this.props.everything} />
                    </div>
                </div>
                <BuildingProgressPannel numStudents={numStudents}/>
            </div>
        )
    }
}
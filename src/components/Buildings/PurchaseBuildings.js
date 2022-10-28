import Select from "react-select";
import React from "react";

export default class PurchaseBuildings extends React.Component{

    render(){
        let cashColor = "white";
        if(this.props.everything.college.availableCash < 150000){
            cashColor = "red";
        }

        // Only shows the purchasable buildings for the level the user is at.
        let purchaseChoices = [];
        for (let i = 0; i < this.props.everything.objectives.currentLevel; ++i) {
            for (let j = 0; j < this.props.buildingChoices[i].length; ++j) {
                purchaseChoices.push(this.props.buildingChoices[i][j]);
            }
        }

        return(
            <div className="col-sm-6">
                <div className="well well-sm">
                    <div id="purchase">
                        <h2>Purchase Buildings</h2>
                        <div className="form-group">
                            <label>Building Type</label>
                            <Select
                                options={purchaseChoices}
                                value={{label: this.props.buildingChoice, value: this.props.buildingChoice}}
                                onChange={value => this.props.handleSelectBuildingChoice(value)}
                                defaultValue={{label: this.props.buildingChoice, value: this.props.buildingChoice}}
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
                            <input className="editText" type="text" value={this.props.buildingName} onChange={this.props.handleNewBuildingChange} placeholder="Enter Building Name"/>
                        </div>
                        <button style={{color:cashColor}} type="submit" className="btn btn-info" onClick={this.props.purchaseBuilding} name="purchaseBuilding">Purchase ($150,000)</button>
                    </div>
                </div>
            </div>
        );
    }
}
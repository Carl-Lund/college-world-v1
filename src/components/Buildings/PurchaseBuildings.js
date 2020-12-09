import Select from "react-select";
import React from "react";

export default class PurchaseBuildings extends React.Component{

    render(){
        let cashColor = "white";
        if(this.props.everything.college.availableCash < 150000){
            cashColor = "red";
        }

        return(
            <div className="col-sm-6">
                <div className="well well-sm">
                    <div id="purchase">
                        <h3>Purchase Buildings</h3>
                        <div className="form-group">
                            <label>Building Type</label>
                            <Select
                                options={this.props.buildingChoices}
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
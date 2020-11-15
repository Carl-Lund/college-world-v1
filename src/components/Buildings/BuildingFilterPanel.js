import React from "react";

export default class BuildingFilterPanel extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label>Filter by Building Type</label>
                <select className="form-control" id="sortByBuildingType" name="sortByBuildingType"
                        style={{width: '160px'}}>
                    <option value="All Buildings">All Buildings</option>
                    {this.props.buildingFiltersOptions}
                </select>
                <input type="submit" className="btn btn-info" name="startSortByBuildingType" value="Filter"
                       style={{marginTop: '5px'}}>
                </input>
            </div>)
    }
}
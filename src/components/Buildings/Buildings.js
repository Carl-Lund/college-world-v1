import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Buildings extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.everything) {
            return <p>Loading...</p>;
        }

        let avalibleBeds = 0;
        let takenBeds = 0;
        for(let i = 0; i < this.props.everything.buildings.length; i++) {
            if (this.props.everything.buildings[i].isBuilt == true && this.props.everything.buildings[i].kindOfBuilding == "DORM") {
                avalibleBeds += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenBeds += this.props.everything.buildings[i].numStudents;
            }
        }

        let avaliblePlates = 0;
        let takenPlates = 0;
        for(let i = 0; i < this.props.everything.buildings.length; i++) {
            if (this.props.everything.buildings[i].isBuilt == true && this.props.everything.buildings[i].kindOfBuilding == "DINING") {
                avaliblePlates += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenPlates += this.props.everything.buildings[i].numStudents;
            }
        }

        let avalibleDesks = 0;
        let takenDesks = 0;
        for(let i = 0; i < this.props.everything.buildings.length; i++) {
            if (this.props.everything.buildings[i].isBuilt == true && this.props.everything.buildings[i].kindOfBuilding == "ACADEMIC") {
                avalibleDesks += this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents;
                takenDesks += this.props.everything.buildings[i].numStudents;
            }
        }

        let table = [];
        for (let i = 0; i < this.props.everything.buildings.length; i++) {
            let building = [];
            building.push(
                <tr>
                    <td>{this.props.everything.buildings[i].name}</td>
                    <td>{this.props.everything.buildings[i].kindOfBuilding}</td>
                    <td>{this.props.everything.buildings[i].size} ({this.props.everything.buildings[i].capacity})</td>
                    <td>{this.props.everything.buildings[i].capacity - this.props.everything.buildings[i].numStudents}</td>
                    <td><div className="progress"></div></td>
                    <td>{this.props.everything.buildings[i].curDisaster}</td>
                </tr>
            )
            table.push(<tr>{building}</tr>)
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
                            <h4>{avalibleBeds} Avalible Beds</h4>
                            <h4>{takenBeds} Taken Beds</h4>
                        </div>
                        <div className="col-md-2">
                            <img className="img-responsive" src="resources/images/plate.png"/>
                        </div>
                        <div className="col-md-2">
                            <h4>{avaliblePlates} Avalible Plates</h4>
                            <h4>{takenPlates} Taken Plates</h4>
                        </div>
                        <div className="col-md-2">
                            <img className="img-responsive" src="resources/images/desk.png"/>
                        </div>
                        <div className="col-md-2">
                            <h4>{avalibleDesks} Avalible Desks</h4>
                            <h4>{takenDesks} Taken Desks</h4>
                        </div>
                    </div>
                </div>
                <div className="well well-sm" >
                    <div className="col-sm-5">
                        <div className="form-group">
                            <label for="buildingType">Filter by Building Type
                        </label>
                        {/*<select className="form-control" id="sortByBuildingType" name="sortByBuildingType"*/}
                        {/*        style="width: 160px;">*/}
                        {/*    <option value="All Buildings">All Buildings</option>*/}
                        {/*    <option value="Administrative Building">Administrative Building</option>*/}
                        {/*    <option value="Academic Center">Academic Center</option>*/}
                        {/*    <option value="Baseball Diamond">Baseball Diamond</option>*/}
                        {/*    <option value="Dining Hall">Dining Hall</option>*/}
                        {/*    <option value="Dormitory">Dormitory</option>*/}
                        {/*    <option value="Football Stadium">Football Stadium</option>*/}
                        {/*    <option value="Hockey Rink">Hockey Rink</option>*/}
                        {/*    <option value="Entertainment Center">Entertainment Center</option>*/}
                        {/*    <option value="Health Center">Health Center</option>*/}
                        {/*    <option value="Library">Library</option>*/}
                        {/*</select>*/}
                        {/*<input type="submit" className="btn btn-info" name="startSortByBuildingType" value="Sort"*/}
                        {/*       style="margin-top: 5px;">*/}
                        {/*</input>*/}
                    </div>
                </div>
                <table className="table table-condensed">
                    <thread>
                        <tr>
                            <th>Building Name</th>
                            <th>Building Type</th>
                            <th>Size</th>
                            <th>Open Spots</th>
                            <th>Quality</th>
                            <th>Current Disaster</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thread>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </div>
                <div className="col-sm-4">
                    <div className="well well-sm">
                        <div id="purchase">
                            <h4></h4>
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
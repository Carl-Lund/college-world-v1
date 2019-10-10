import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Buildings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/building/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ data });
                console.log("Fetched building data " + data)
            });
    }
    render() {
        return (
            <div>
            <div className="container">
                <div className="jumbotron" style="background-color: aliceblue">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="img-responsive" src="resources/images/bed.png"/>
                        </div>
                        <div className="col-md-2">
                            <h4></h4>
                        </div>
                        <div className="col-md-2">
                            <img className="img-responsive" src="resources/images/plate.png"/>
                        </div>
                        <div className="col-md-2">
                            <h4></h4>
                        </div>
                        <div className="col-md-2">
                            <img className="img-responsive" src="resources/images/desk.png"/>
                        </div>
                        <div className="col-md-2">
                            <h4></h4>
                        </div>
                    </div>
                </div>
                <div className="well well-sm" style="background: aliceblue;">
                    <div className="col-sm-5" style=" margin-top: 30px;">
                        <div className="form-group">
                            <label for="buildingType">Filter by Building Type
                        </label>
                        <select className="form-control" id="sortByBuildingType" name="sortByBuildingType"
                                style="width: 160px;">
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
                        <input type="submit" className="btn btn-info" name="startSortByBuildingType" value="Sort"
                               style="margin-top: 5px;">
                        </input>
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
                </table>
            </div>
                <div className="col-sm-4">
                    <div className="well well-sm" style="background: aliceblue;">
                        <div id="purchase">
                            <h4></h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6" style="margin-left: 150px;">
                        <div className="well well-sm" style="background: aliceblue;">
                            <h3>
                                <p style="color: purple">Resident News</p>
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
                    <div className="jumbotron" style="background-color: aliceblue">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-2" style="margin-right: 3%;">
                                    <h4>Large Size</h4>
                                    <img className="img-responsive" src="resources/images/EXTRA_LARGE_DORM_k.png"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                        </div>
                                </div>
                            <div className="col-md-2" style="margin-right: 3%">
                                <h4>Extra Large Size</h4>
                                <img className="img-responsive" src="resources/images/EXTRA_LARGE_DORM_k.png"/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                    </div>
                            </div>
                            <div className="col-md-2" style="margin-right: 3%">
                                <h4>Extra Large Size</h4>
                                <img className="img-responsive" src="resources/images/EXTRA_LARGE_DORM_k.png"/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                    </div>
                            </div>
                            <div className="col-md-2" style="margin-right: 3%">
                                <h4>Library</h4>
                                <img className="img-responsive" src="resources/images/LIBRARY_k.png"
                                     style="margin-top: 37px; margin-bottom: 38px;"/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                    </div>
                            </div>
                            <div className="col-md-2" style="margin-right: 3%">
                                <h4>Health Center</h4>
                                <img className="img-responsive" src="resources/images/HEALTH_k.png"
                                     style=" margin-top: 37px; margin-bottom: 38.5px;"/>
                                    <h5>Total progress:</h5>
                                    <div className="progress">
                                    </div>
                            </div>
                            </div>
                            <div className="col-md-12">
                                <div className="col-md-2" style="margin-right: 3%">
                                    <h4>Entertainment Center</h4>
                                    <img className="img-responsive" src="resources/images/ENTERTAINMENT_k.png"
                                         style="margin-bottom: 28px;"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                        </div>
                                </div>
                                <div className="col-md-2" style="margin-right: 3%;">
                                    <h4>Football Stadium</h4>
                                    <img className="img-responsive" src="resources/images/FOOTBALL%20STADIUM_k.png"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                        </div>
                                </div>
                                <div className="col-md-2" style="margin-right: 3%;">
                                    <h4>Baseball Diamond</h4>
                                    <img className="img-responsive" src="resources/images/BASEBALL%20DIAMOND_k.png"
                                         style="margin-top: 33px; margin-bottom: 34px;"/>
                                        <h5>Total progress:</h5>
                                        <div className="progress">
                                        </div>
                                </div>
                                <div className="col-md-2" style="margin-right: 3%;">
                                    <h4>Hockey Rink</h4>
                                    <img className="img-responsive" src="resources/images/HOCKEY%20RINK_k.png"
                                         style="margin-top: 41px; margin-bottom: 47px;"/>
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
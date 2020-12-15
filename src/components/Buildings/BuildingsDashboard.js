import React from "react";

export default class BuildingsDashboard extends React.Component {

    render() {
        return (
                <div className="row">
                    <div className="col-md-2">
                        <img alt="bedImage" className="img-responsive" src="resources/images/bed.png"/>
                    </div>
                    <div className="col-md-2">
                        <h4>{this.props.availableBeds} Available Beds</h4>
                        <h4>{this.props.takenBeds} Taken Beds</h4>
                    </div>
                    <div className="col-md-2">
                        <img alt="plateImage" className="img-responsive" src="resources/images/plate.png"/>
                    </div>
                    <div className="col-md-2">
                        <h4>{this.props.availablePlates} Available Plates</h4>
                        <h4>{this.props.takenPlates} Taken Plates</h4>
                    </div>
                    <div className="col-md-2">
                        <img alt="deskImage" className="img-responsive" src="resources/images/desk.png"/>
                    </div>
                    <div className="col-md-2">
                        <h4>{this.props.availableDesks} Available Desks</h4>
                        <h4>{this.props.takenDesks} Taken Desks</h4>
                    </div>
                </div>
                );
    }
}
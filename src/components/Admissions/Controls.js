import React from 'react';
import Button from "react-bootstrap/Button";


export default class Controls extends React.Component {
    render() {
        let timeUntilNextSemester = 75 - Math.round((this.props.everything.college.hoursAlive - 1) / 24 + 1);
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-2" align="center">
                        <Button  variant="primary"> ACCEPT </Button>
                    </div>
                    <div className="col-sm-2" align="center">
                        <Button  variant="primary"> REJECT </Button>
                    </div>
                    <div className="col-sm-2" align="center">
                        <Button  variant="primary"> STALL </Button>
                    </div>
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>
            </div>
        );
    }
}

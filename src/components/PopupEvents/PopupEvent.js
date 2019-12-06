import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
        this.eventAcknowledged = this.eventAcknowledged.bind(this);
    }


    eventAcknowledged(leftRightType) {
        console.log("Event Acknowledged");

        var address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/eventOptionChosen/' + this.props.everything.college.runId + '/';

        address += this.props.event.eventId + '/';

        if (this.props.event.type === 1) {
            address += this.props.event.acknowledgeButtonCallback;
        } else {
            if (leftRightType === 0) {
                address += this.props.event.rightButtonCallback;
            } else {
                address += this.props.event.leftButtonCallback;
            }
        }

        console.log(address);
        fetch(address)
            .then(response => response.json())
            .then(data => {
                this.props.everything.popupEvent = data.slice(0);
            })
            .then(this.props.replaceEverything(this.props.everything))
            .then(this.props.eventHandler());
    }



    render() {
        let eventType = false;
        if (this.props.event.type === 1) {
            eventType = true;
        }

        return (
            <div>
                <Modal.Body className="modal-body">
                    <h3></h3>
                    <div>
                        <img style={{float: "left", marginRight: "1em"}} src={this.props.event.imagePath} alt={this.props.event.altImageText} width="100" height="100"/>
                        {eventType ? (
                            <div>
                                <p> {this.props.event.description} <br/>
                                    <input onClick={this.eventAcknowledged} type="submit" className="btn btn-info"
                                           style={{position: "absolute", right: "1em", bottom: "1em"}}
                                           name={this.props.event.acknowledgeButtonCallback}
                                           value={this.props.event.acknowledgeButtonText}/>
                                        <div style={{clear: "both"}}></div>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p> {this.props.event.description} <br/>
                                    <input onClick={() => this.eventAcknowledged(0)} type="submit" className="btn btn-info"
                                           style={{position: "absolute", right: "1em", bottom: "1em"}}
                                           name={this.props.event.rightButtonCallback}
                                           value={this.props.event.rightButtonText}/>
                                        <input onClick={() => this.eventAcknowledged(1)} type="submit" className="btn btn-info"
                                               style={{position: "absolute", bottom: "1em", marginLeft: "1.5em"}}
                                               name={this.props.event.leftButtonCallback}
                                               value={this.props.event.leftButtonText}/>
                                            <div style={{clear: "both"}}></div>
                                </p>
                            </div>
                        )}
                    </div>
                </Modal.Body>
            </div>
        );
    }
}
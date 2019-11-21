import React from 'react';

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
        this.eventAcknowledged = this.eventAcknowledged.bind(this);
    }


    eventAcknowledged(e) {
        console.log("Event Acknowledged");

        var event = e.target.value;
        var address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/EventOptionChosen/' + this.props.everything.college.runId + '/';

        if (typeof this.props.event.rightButtonCallback !== typeof null && typeof this.props.event.rightButtonCallback !== typeof undefined) {
            address += this.props.everything.rightButtonCallback;
        } else if (typeof this.props.event.leftButtonCallback !== typeof null && typeof this.props.event.leftButtonCallback !== typeof undefined) {
            address += this.props.everything.leftButtonCallback;
        } else {
            address += this.props.everything.acknowledgeButtonCallBack;
        }

        console.log(address);
        fetch(address)
            .then(response => response.json())
            .then(data => {
            });

        this.props.replaceEverything(this.props.everything);
    }


    render() {
        let eventType = false;
        if (this.props.event.type === 1) {
            eventType = true;
        }

        return (
            <div>
                <div className="modal-body">
                    <h3></h3>
                    <div>
                        <img style={{float: "left", marginRight: "1em"}} src={this.props.event.imagePath} alt={this.props.event.altImageText} width="100" height="100"/>
                        {eventType ? (
                            <div>
                                <p> {this.props.event.description} <br/>
                                    <input onClick={this.eventAcknowledged} type="submit" className="btn btn-info"
                                           style={{position: "absolute", right: "1em", bottom: "1em"}}
                                           name={this.props.event.acknowledgeButtonCallBack}
                                           value={this.props.event.acknowledgeButtonText}/>
                                        <div style={{clear: "both"}}></div>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p> {this.props.event.description} <br/>
                                    <input onClick={this.eventAcknowledged} type="submit" className="btn btn-info"
                                           style={{position: "absolute", right: "1em", bottom: "1em"}}
                                           name={this.props.event.rightButtonCallback}
                                           value={this.props.event.rightButtonText}/>
                                        <input onClick={this.eventAcknowledged} type="submit" className="btn btn-info"
                                               style={{position: "absolute", right: "1em", bottom: "1em"}}
                                               name={this.props.event.leftButtonCallback}
                                               value={this.props.event.leftButtonText}/>
                                            <div style={{clear: "both"}}></div>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
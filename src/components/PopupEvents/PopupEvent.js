import React from 'react';

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
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
                        <img style={{float: "left", marginRight: "1em"}} src={this.props.event.imagePath} alt={this.props.event.altText} width="100" height="100"/>
                        {eventType ? (
                            <div>
                                <p> {this.props.event.description} <br/>
                                    <input type="submit" className="btn btn-info"
                                           style={{position: "absolute", right: "1em", bottom: "1em"}}
                                           name={this.props.event.acknowledgeButtonCallBack}
                                           value={this.props.event.acknowledgeButtonText}/>
                                        <div style={{clear: "both"}}></div>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p> {this.props.event.description} <br/>
                                    <input type="submit" className="btn btn-info"
                                           style={{position: "absolute", right: "1em", bottom: "1em"}}
                                           name={this.props.event.rightButtonCallback}
                                           value={this.props.event.rightButtonText}/>
                                        <input type="submit" className="btn btn-info"
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
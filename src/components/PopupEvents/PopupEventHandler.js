import React from 'react';
import PopupEvent from "./PopupEvent";

export default class PopupEventHandler extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.everything);

        this.state = {
            allEvents: groupEvents(this.props.everything.popupEvent, this.props.everything, this.props.replaceEverything)
        }

    }

    render() {
        if (this.props.everything == null) {
            return;
        }

        return (
            <div>
                <div className="modal fade" id="eventPopUp" role="dialog">
                    <input type="submit" className="btn btn-info" style={{position: "absolute", right: "1em", bottom: "1em"}}
                           name="readAll" value="Read All"/>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {this.state.allEvents}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function groupEvents(events, everything, replaceEverything) {
    let group = [];
    var eventsArray = Object.keys(events).map(function (key) { return events[key]; });

    for (let i = 0; i < eventsArray.length; i++) {
        group.push(<PopupEvent event = {eventsArray[i]} everything={everything} replaceEverything = {replaceEverything} />)
    }

    return group;
}
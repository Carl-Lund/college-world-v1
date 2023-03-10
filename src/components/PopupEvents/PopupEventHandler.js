import React from 'react';
import PopupEvent from "./PopupEvent";
import Modal from 'react-bootstrap/Modal';
import "./PopupEventModal.css";

export default class PopupEventHandler extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.everything);

        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler() {
    }

    render() {
        this.allEvents = groupEvents(this.props.everything.popupEvent, this.props.everything, this.props.replaceEverything, this.eventHandler);

        if (this.props.everything == null) {
            return;
        }
        let noEvents = true;
        if (this.props.everything.popupEvent.length >= 1) {
            noEvents = false;
        }

        return (
            <div>
                {noEvents ? (
                    <div></div>
                ) : (
                    // <Modal show={true} id="eventPopUp"> {/*</Modal>*/}
                    // className="modal-content" style={{maxHeight: "650px", overflow: "scroll"}}
                        <div >
                            {this.allEvents}
                        </div>

                )}
            </div>
        );
    }
}

function groupEvents(events, everything, replaceEverything, eventHandler) {
    let group = [];
    var eventsArray = Object.keys(events).map(function (key) { return events[key]; });
    console.log(eventsArray);

    for (let i = 0; i < eventsArray.length; i++) {
        group.push(<PopupEvent event = {eventsArray[i]} everything={everything} replaceEverything = {replaceEverything} eventHandler = {eventHandler}/>)
    }

    return group;
}
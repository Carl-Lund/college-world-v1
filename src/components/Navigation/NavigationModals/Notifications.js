import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import PopupEventHandler from "../../PopupEvents/PopupEventHandler";
import "../Navigation.css"

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.clearNotifications = this.clearNotifications.bind(this);
    }

    clearNotifications() {
        console.log("Event Acknowledged");
        let address = 'http://localhost:8080/enccollegeworld_war_exploded/rest/eventOptionChosen/' + this.props.everything.college.runId + '/';
        address += 'deleteEvents/';
        console.log(address);
        fetch(address)
            .then(response => response.json())
            .then(data => {this.props.replaceEverything(data);
            });
    }

    render() {
        return (
            <Modal  show={this.props.show} onHide={this.props.handleClose}
                   backdrop="static"
                   keyboard={false}
             aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        Notifications
                    </Modal.Title>
                    <Button className="clearAll" onClick={this.clearNotifications}>Clear All Notifications</Button>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <PopupEventHandler everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
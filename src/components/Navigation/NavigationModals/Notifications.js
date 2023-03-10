import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PopupEventHandler from "../../PopupEvents/PopupEventHandler";

export default class Notifications extends React.Component {
    render() {

        return (
            <Modal  show={this.props.show} onHide={this.props.handleClose}
                   backdrop="static"
                   keyboard={false}
             aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        Notifications
                    </Modal.Title>
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
import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class InsufficientFundPopup extends React.Component {
    render() {

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}
                   backdrop="static"
                   keyboard={false}
                   aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        Insufficient Funds
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <h2>You don't have sufficient funds to make this purchase!</h2>
                        <h3>You can take out a loan from the Finances page if you need more money.</h3>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
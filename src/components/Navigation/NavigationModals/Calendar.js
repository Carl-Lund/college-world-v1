import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}
                    backdrop="static"
                    keyboard={false}
                    aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        Calendar
                        <h3 style={{fontSize: 24}}>Year {this.props.year}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col className="col-sm-6">Date</Col>
                            <Col className="col-sm-6">Some Event</Col>
                        </Row>
                        <Row>
                            <Col className="col-sm-6">Date</Col>
                            <Col className="col-sm-6">Some Event</Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
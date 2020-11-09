import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Traits extends React.Component {
    render() {

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}
                   backdrop="static"
                   keyboard={false}
                   aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        Traits
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col className="col-sm-3">Trait 1</Col>
                            <Col className="col-sm-3">Trait 2</Col>
                            <Col className="col-sm-3">Trait 3</Col>
                            <Col className="col-sm-3">Trait 4</Col>
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
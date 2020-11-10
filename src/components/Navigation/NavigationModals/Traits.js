import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TraitBox from "../../College/TraitBox";

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
                            <Col className={"col-sm-4"}>
                                <TraitBox icon={"resources/images/academictrait.png"} label={'Academics:'} rating={this.props.everything.college.academicRating}/>
                            </Col>
                            <Col className={"col-sm-4"}>
                                <TraitBox icon={"resources/images/athletictrait.png"} label={'Athletics:'} rating={this.props.everything.college.athleticRating}/>
                            </Col>
                            <Col className={"col-sm-4"}>
                                <TraitBox icon={"resources/images/infastructuretrait.png"} label={'Infrastructure:'} rating={this.props.everything.college.infrastructureRating}/>
                            </Col>
                            <Col className={"col-sm-4"}>
                                <TraitBox icon={"resources/images/safetytrait.png"} label={'Safety:'} rating={this.props.everything.college.safetyRating}/>
                            </Col>
                            <Col className={"col-sm-4"}>
                                <TraitBox icon={"resources/images/costtrait.png"} label={'Value:'} rating={this.props.everything.college.schoolValue}/>
                            </Col>
                            <Col className={"col-sm-4"}>
                                <TraitBox icon={"resources/images/socialtrait.png"} label={'Social:'} rating={this.props.everything.college.socialRating}/>
                            </Col>
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
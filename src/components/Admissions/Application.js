import React from 'react';
import './Admissions.css';
import {Button, Modal} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Application extends React.Component {
    render() {
        //Check so things don't blow up
        if(this.props.student === null){
            return <div></div>
        }
        return (
        <Modal show={this.props.show} onHide={this.props.handleClose}
               backdrop="static"
               keyboard={false}
               aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title  id="contained-modal-title-vcenter">
                    Application
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container className="Application">
                    <div>
                        <div>Name: {this.props.student.name}</div>
                        <div>Nature: {this.props.student.nature}</div>
                        <div>Hobbies: {this.props.student.hobbies[0]}, {this.props.student.hobbies[1]}, {this.props.student.hobbies[2]}</div>
                        <div>GPA: {(this.props.student.quality.academics/25.0 + 2.0).toFixed(2)}</div>
                        <div>Athletic Ability: {this.props.student.quality.sports}%</div>
                        <div className="buttons-2"><Button variant="success">Accept</Button>
                            <Button variant="danger">Decline</Button>
                        </div>
                    </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }

}